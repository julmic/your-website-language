/* prerender: build, serve dist, collect routes (src/pages, AppRoutes, content), copy dist -> site-html-2 and save rendered HTML per route */
const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

function readFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const href = fm.match(/href:\s*["']?([^"\n']+)["']?/);
  const slug = fm.match(/slug:\s*["']?([^"\n']+)["']?/);
  const available = fm.match(/available:\s*(true|false)/);
  return {
    href: href ? href[1].trim() : undefined,
    slug: slug ? slug[1].trim() : undefined,
    available: available ? available[1].trim() === 'true' : true,
  };
}

function collectRoutesFromContent(contentDir) {
  const routes = new Set();
  if (!fs.existsSync(contentDir)) return routes;
  (function walk(dir) {
    for (const it of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, it.name);
      if (it.isDirectory()) walk(full);
      else if (it.isFile() && full.endsWith('.md')) {
        const raw = fs.readFileSync(full, 'utf8');
        const fm = readFrontmatter(raw);
        if (fm.available === false) continue;
        if (fm.href) routes.add(fm.href.startsWith('/') ? fm.href : '/' + fm.href);
        else if (fm.slug) routes.add('/' + fm.slug);
        else routes.add('/' + path.basename(full, '.md'));
      }
    }
  })(contentDir);
  return routes;
}

function collectRoutesFromAppRoutes(appRoutesPath) {
  const routes = new Set();
  if (!fs.existsSync(appRoutesPath)) return routes;
  const raw = fs.readFileSync(appRoutesPath, 'utf8');
  const pathRegex = /<Route[^>]*path\s*=\s*{?\s*["'`]([^"'`}\s]+)["'`]\s*}?/g;
  let m;
  while ((m = pathRegex.exec(raw))) {
    const p = m[1].trim();
    if (p && p !== '*') routes.add(p.startsWith('/') ? p : '/' + p);
  }
  return routes;
}

function collectRoutesFromPages(pagesDir) {
  const routes = new Set();
  if (!fs.existsSync(pagesDir)) return routes;
  function slugify(name) { return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, ''); }
  (function walk(dir, base = '') {
    for (const it of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, it.name);
      if (it.isDirectory()) walk(full, base + '/' + it.name);
      else if (it.isFile() && full.endsWith('.tsx')) {
        const name = path.basename(full, '.tsx');
        let routeBase = base;
        // special-case philosophie pages -> /philosophie-vedique
        if (routeBase.includes('/philosophie')) routeBase = '/philosophie-vedique';
        const slug = slugify(name);
        const route = (routeBase === '' ? '/' + slug : routeBase + '/' + slug).replace(/\/\/+/, '/');
        routes.add(route);
      }
    }
  })(pagesDir);
  return routes;
}

function makeLinksRelative(html) {
  html = html.replace(/href="\/([^"#?]+)"/g, (m, p1) => {
    if (/^(http|https):/.test(p1)) return `href="${m.slice(6, -1)}"`;
    if (/\.[a-z0-9]{1,6}$/i.test(p1)) return `href="./${p1}"`;
    return `href="./${p1.replace(/\/+$/,'')}/"`;
  });
  html = html.replace(/src="\/([^\"]+)"/g, (m, p1) => `src="./${p1}"`);
  return html;
}

async function prerender() {
  console.log('1) Build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('2) Serve dist on http://localhost:8080 ...');
  const server = spawn('npx', ['serve', 'dist', '-l', '8080'], { stdio: 'ignore', detached: true });
  await new Promise(r => setTimeout(r, 1200));

  const contentRoutes = collectRoutesFromContent(path.resolve(__dirname, '..', 'content'));
  const appRoutes = collectRoutesFromAppRoutes(path.resolve(__dirname, '..', 'src', 'app', 'AppRoutes.tsx'));
  const pageRoutes = collectRoutesFromPages(path.resolve(__dirname, '..', 'src', 'pages'));
  const fallback = new Set(['/','/philosophie-vedique','/philosophie-vedique/rigveda']);
  const routes = Array.from(new Set([...fallback, ...contentRoutes, ...appRoutes, ...pageRoutes]));
  console.log('Routes to render:', routes);

  const outDir = path.resolve(__dirname, '..', 'site-html-2');
  if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // copy dist assets so styles/scripts remain available
  const distDir = path.resolve(__dirname, '..', 'dist');
  if (fs.existsSync(distDir)) fs.cpSync(distDir, outDir, { recursive: true });

  let browser;
  try {
    const launchOptions = { args: ['--no-sandbox', '--disable-setuid-sandbox'] };
    if (process.env.CHROME_PATH) {
      launchOptions.executablePath = process.env.CHROME_PATH;
      console.log('Using CHROME_PATH:', process.env.CHROME_PATH);
    }
    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    console.error('Puppeteer launch failed:', err.message);
    const candidates = [
      process.env.CHROME_PATH,
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      '/snap/bin/chromium',
    ].filter(Boolean);

    let launched = false;
    for (const c of candidates) {
      try {
        console.log('Trying to launch Chrome at', c);
        browser = await puppeteer.launch({ executablePath: c, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        launched = true;
        break;
      } catch (e) {
        // ignore and continue
      }
    }

    if (!launched) {
      console.error('All launch attempts failed. Please set CHROME_PATH to your Chrome executable (Windows example: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe") or install puppeteer so Chromium is available.');
      process.exit(1);
    }
  }

  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:8080${route}`;
    try {
      console.log('Rendering', url);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForTimeout(200);
      let html = await page.content();
      html = makeLinksRelative(html);

      const outPath = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route.replace(/^\//, ''), 'index.html');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf8');
      console.log('Saved', outPath);
    } catch (err) {
      console.error('Error rendering', url, err.message);
    }
  }

  await browser.close();
  try { process.kill(-server.pid); } catch (e) { /* ignore */ }
  console.log('Done. Files written to', outDir);
}

prerender().catch((err) => { console.error(err); process.exit(1); });