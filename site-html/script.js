/* ========================================
   ARKADHYA - JavaScript Principal
   Centre Ayurvédique en Aquitaine
   Version autonome (sans partials)
   ======================================== */

// --------- Main Initialization ---------
document.addEventListener('DOMContentLoaded', function() {
  // Apply theme immediately to prevent flash
  applyTheme(getPreferredTheme());
  
  // Initialize all functionality
  initThemeToggle();
  initLogoAnimation();
  initMobileMenu();
  initMobileAccordions();
  initScrollToTop();
  initAccordions();
  initSmoothScroll();
  initFormHandler();
  initAnimations();
  initLazyLoading();
  initCategoryFilter();
  initHeaderScroll();
  initTabs();
  initCopyToClipboard();
});

// --------- Theme Management ---------
function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

function updateThemeIcons() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  // Desktop icons
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (sunIcon && moonIcon) {
    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
  }
  
  // Mobile icons
  const sunIconMobile = document.querySelector('.sun-icon-mobile');
  const moonIconMobile = document.querySelector('.moon-icon-mobile');
  if (sunIconMobile && moonIconMobile) {
    sunIconMobile.style.display = isDark ? 'none' : 'block';
    moonIconMobile.style.display = isDark ? 'block' : 'none';
  }
}

function initThemeToggle() {
  updateThemeIcons();
  
  // Desktop toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      updateThemeIcons();
    });
  }
  
  // Mobile toggle
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      updateThemeIcons();
    });
  }
}

// --------- Logo Animation ---------
function initLogoAnimation() {
  const logoImg = document.querySelector('.logo-animated');
  const siteTitle = document.querySelector('.site-title');
  const siteDescription = document.querySelector('.site-description');
  
  if (logoImg) {
    logoImg.classList.add('animate');
    setTimeout(() => {
      logoImg.classList.add('loaded');
    }, 1500);
  }
  
  if (siteTitle) {
    siteTitle.classList.add('animate');
    setTimeout(() => {
      siteTitle.classList.add('loaded');
    }, 1500);
  }
  
  if (siteDescription) {
    siteDescription.classList.add('animate');
    setTimeout(() => {
      siteDescription.classList.add('loaded');
    }, 1500);
  }
}

// --------- Mobile Menu ---------
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('active');
      
      if (isOpen) {
        mobileNav.classList.remove('active');
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
        document.body.style.overflow = '';
      } else {
        mobileNav.classList.add('active');
        if (menuIcon) menuIcon.style.display = 'none';
        if (closeIcon) closeIcon.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
    
    // Close menu when clicking on a direct link (not accordion triggers)
    const mobileLinks = mobileNav.querySelectorAll('a:not(.mobile-accordion-trigger)');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }
}

// --------- Mobile Accordions ---------
function initMobileAccordions() {
  const accordionTriggers = document.querySelectorAll('.mobile-accordion-trigger');
  
  accordionTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;
      
      // Toggle current accordion
      this.setAttribute('aria-expanded', !isExpanded);
      if (content) {
        content.classList.toggle('open', !isExpanded);
      }
    });
  });
}

// --------- Scroll to Top ---------
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top') || document.querySelector('.scroll-top-btn');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// --------- Accordion Functionality (FAQ, etc.) ---------
function initAccordions() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      if (isActive) {
        accordionItem.classList.remove('active');
      } else {
        accordionItem.classList.add('active');
      }
    });
  });
}

// --------- Smooth Scroll for Anchor Links ---------
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// --------- Form Submission Handler ---------
function initFormHandler() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      this.reset();
    });
  }
}

// --------- Intersection Observer for Animations ---------
function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }
}

// --------- Lazy Loading Images ---------
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if (lazyImages.length > 0 && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
}

// --------- Category Filter (for blog page) ---------
function initCategoryFilter() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const blogCards = document.querySelectorAll('.blog-card[data-category]');
  
  if (categoryButtons.length > 0) {
    categoryButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active button
        categoryButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter cards
        blogCards.forEach(function(card) {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

// --------- Header Scroll Effect ---------
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
}

// --------- Tab Functionality ---------
function initTabs() {
  const tabTriggers = document.querySelectorAll('[data-tab-trigger]');
  
  if (tabTriggers.length > 0) {
    tabTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const tabGroup = this.closest('[data-tab-group]');
        const targetId = this.dataset.tabTrigger;
        
        // Update triggers
        tabGroup.querySelectorAll('[data-tab-trigger]').forEach(t => {
          t.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update content
        tabGroup.querySelectorAll('[data-tab-content]').forEach(c => {
          c.classList.remove('active');
          if (c.dataset.tabContent === targetId) {
            c.classList.add('active');
          }
        });
      });
    });
  }
}

// --------- Copy to Clipboard ---------
function initCopyToClipboard() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  
  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const textToCopy = this.dataset.copy;
      
      navigator.clipboard.writeText(textToCopy).then(function() {
        const originalText = btn.textContent;
        btn.textContent = 'Copié !';
        
        setTimeout(function() {
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });
}

// --------- Utility Functions ---------

// Format date for French locale
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Debounce function for scroll/resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}