/**
 * Script de vérification des liens cassés pour le site HTML statique
 * Usage: node check-links.js
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = __dirname;
const HTML_EXTENSIONS = ['.html', '.htm'];

// Couleurs pour la console
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Statistiques
const stats = {
  filesChecked: 0,
  linksChecked: 0,
  brokenLinks: [],
  missingImages: [],
  warnings: []
};

/**
 * Récupère tous les fichiers HTML du site
 */
function getAllHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      getAllHtmlFiles(fullPath, files);
    } else if (stat.isFile() && HTML_EXTENSIONS.includes(path.extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extrait tous les liens d'un fichier HTML
 */
function extractLinks(htmlContent) {
  const links = [];
  
  // href="..." (liens)
  const hrefRegex = /href=["']([^"'#]+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(htmlContent)) !== null) {
    links.push({ type: 'href', url: match[1] });
  }
  
  // src="..." (images, scripts)
  const srcRegex = /src=["']([^"']+)["']/gi;
  while ((match = srcRegex.exec(htmlContent)) !== null) {
    links.push({ type: 'src', url: match[1] });
  }
  
  return links;
}

/**
 * Vérifie si un lien interne existe
 */
function checkInternalLink(link, sourceFile) {
  // Ignorer les liens externes, mailto, tel, javascript
  if (link.startsWith('http://') || 
      link.startsWith('https://') || 
      link.startsWith('mailto:') || 
      link.startsWith('tel:') ||
      link.startsWith('javascript:') ||
      link.startsWith('data:') ||
      link.startsWith('#')) {
    return { valid: true, external: true };
  }
  
  // Résoudre le chemin relatif
  const sourceDir = path.dirname(sourceFile);
  let targetPath;
  
  if (link.startsWith('/')) {
    // Chemin absolu depuis la racine du site
    targetPath = path.join(SITE_DIR, link);
  } else {
    // Chemin relatif
    targetPath = path.resolve(sourceDir, link);
  }
  
  // Vérifier si le fichier existe
  const exists = fs.existsSync(targetPath);
  
  return { valid: exists, targetPath, external: false };
}

/**
 * Analyse un fichier HTML
 */
function analyzeFile(filePath) {
  const relativePath = path.relative(SITE_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);
  
  stats.filesChecked++;
  
  for (const link of links) {
    stats.linksChecked++;
    const result = checkInternalLink(link.url, filePath);
    
    if (!result.external && !result.valid) {
      const issue = {
        source: relativePath,
        link: link.url,
        type: link.type,
        expectedPath: result.targetPath ? path.relative(SITE_DIR, result.targetPath) : link.url
      };
      
      if (link.type === 'src' && (link.url.includes('.webp') || link.url.includes('.png') || 
          link.url.includes('.jpg') || link.url.includes('.jpeg') || link.url.includes('.gif') ||
          link.url.includes('.svg') || link.url.includes('.ico'))) {
        stats.missingImages.push(issue);
      } else if (link.type === 'href') {
        stats.brokenLinks.push(issue);
      } else {
        stats.warnings.push(issue);
      }
    }
  }
}

/**
 * Affiche le rapport
 */
function printReport() {
  console.log('\n' + '='.repeat(60));
  console.log(colors.blue + '📊 RAPPORT DE VÉRIFICATION DES LIENS' + colors.reset);
  console.log('='.repeat(60) + '\n');
  
  console.log(`📁 Fichiers analysés: ${stats.filesChecked}`);
  console.log(`🔗 Liens vérifiés: ${stats.linksChecked}`);
  console.log('');
  
  // Liens cassés
  if (stats.brokenLinks.length > 0) {
    console.log(colors.red + `❌ LIENS CASSÉS (${stats.brokenLinks.length}):` + colors.reset);
    console.log('-'.repeat(40));
    
    // Grouper par fichier source
    const grouped = {};
    for (const issue of stats.brokenLinks) {
      if (!grouped[issue.source]) grouped[issue.source] = [];
      grouped[issue.source].push(issue);
    }
    
    for (const [source, issues] of Object.entries(grouped)) {
      console.log(colors.yellow + `\n📄 ${source}:` + colors.reset);
      for (const issue of issues) {
        console.log(`   → ${issue.link}`);
      }
    }
    console.log('');
  } else {
    console.log(colors.green + '✅ Aucun lien cassé trouvé!' + colors.reset + '\n');
  }
  
  // Images manquantes
  if (stats.missingImages.length > 0) {
    console.log(colors.red + `🖼️  IMAGES MANQUANTES (${stats.missingImages.length}):` + colors.reset);
    console.log('-'.repeat(40));
    
    const grouped = {};
    for (const issue of stats.missingImages) {
      if (!grouped[issue.source]) grouped[issue.source] = [];
      grouped[issue.source].push(issue);
    }
    
    for (const [source, issues] of Object.entries(grouped)) {
      console.log(colors.yellow + `\n📄 ${source}:` + colors.reset);
      for (const issue of issues) {
        console.log(`   → ${issue.link}`);
      }
    }
    console.log('');
  } else {
    console.log(colors.green + '✅ Toutes les images sont présentes!' + colors.reset + '\n');
  }
  
  // Avertissements
  if (stats.warnings.length > 0) {
    console.log(colors.yellow + `⚠️  AVERTISSEMENTS (${stats.warnings.length}):` + colors.reset);
    console.log('-'.repeat(40));
    for (const issue of stats.warnings) {
      console.log(`   ${issue.source}: ${issue.link}`);
    }
    console.log('');
  }
  
  // Résumé final
  console.log('='.repeat(60));
  const totalIssues = stats.brokenLinks.length + stats.missingImages.length;
  if (totalIssues === 0) {
    console.log(colors.green + '🎉 SUCCÈS: Aucun problème détecté!' + colors.reset);
  } else {
    console.log(colors.red + `⚠️  ${totalIssues} problème(s) à corriger` + colors.reset);
  }
  console.log('='.repeat(60) + '\n');
  
  // Retourner le code de sortie
  return totalIssues > 0 ? 1 : 0;
}

/**
 * Liste des images requises vs présentes
 */
function checkRequiredImages() {
  const imagesDir = path.join(SITE_DIR, 'assets', 'images');
  
  console.log('\n' + colors.blue + '📷 ÉTAT DU DOSSIER IMAGES:' + colors.reset);
  console.log('-'.repeat(40));
  
  if (!fs.existsSync(imagesDir)) {
    console.log(colors.red + '❌ Le dossier assets/images/ n\'existe pas!' + colors.reset);
    return;
  }
  
  function listImages(dir, prefix = '') {
    const items = fs.readdirSync(dir);
    let count = 0;
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        console.log(colors.blue + `${prefix}📁 ${item}/` + colors.reset);
        count += listImages(fullPath, prefix + '  ');
      } else {
        console.log(`${prefix}  ${item}`);
        count++;
      }
    }
    
    return count;
  }
  
  const totalImages = listImages(imagesDir);
  console.log(colors.green + `\n✅ Total: ${totalImages} image(s) présente(s)` + colors.reset);
}

// Exécution principale
console.log(colors.blue + '\n🔍 Analyse du site HTML statique...' + colors.reset);

const htmlFiles = getAllHtmlFiles(SITE_DIR);

for (const file of htmlFiles) {
  analyzeFile(file);
}

checkRequiredImages();
const exitCode = printReport();

process.exit(exitCode);
