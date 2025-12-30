/* ========================================
   ARKADHYA - JavaScript Principal
   Centre Ayurvédique en Aquitaine
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // --------- Mobile Menu Toggle ---------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('active');
      
      if (isOpen) {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = '';
      } else {
        mobileNav.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
    
    // Close menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }
  
  // --------- Scroll to Top Button ---------
  const scrollTopBtn = document.getElementById('scroll-top');
  
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
  
  // --------- Accordion Functionality ---------
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Optional: Close all other accordions (single mode)
      // const allItems = document.querySelectorAll('.accordion-item');
      // allItems.forEach(item => item.classList.remove('active'));
      
      // Toggle current item
      if (isActive) {
        accordionItem.classList.remove('active');
      } else {
        accordionItem.classList.add('active');
      }
    });
  });
  
  // --------- Smooth Scroll for Anchor Links ---------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // --------- Form Submission Handler ---------
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      
      // Reset form
      this.reset();
    });
  }
  
  // --------- Intersection Observer for Animations ---------
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
  
  // --------- Lazy Loading Images ---------
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
  
  // --------- Category Filter (for blog page) ---------
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
  
  // --------- Header Scroll Effect ---------
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.scrollY;
      
      // Add shadow when scrolled
      if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // --------- Tab Functionality ---------
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
  
  // --------- Copy to Clipboard (for phone/email) ---------
  const copyButtons = document.querySelectorAll('[data-copy]');
  
  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const textToCopy = this.dataset.copy;
      
      navigator.clipboard.writeText(textToCopy).then(function() {
        // Show feedback
        const originalText = btn.textContent;
        btn.textContent = 'Copié !';
        
        setTimeout(function() {
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });

});

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
