/**
 * LUGGAGE PASS - Main Application Entrypoint
 * Coordinates all modules, handles navigation, modals, accordions, and tabs.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Storage & i18n
  if (window.I18nManager) window.I18nManager.init();
  if (window.MediaViewer) window.MediaViewer.init();
  if (window.BookingManager) window.BookingManager.init();
  if (window.ShoppingSimulator) window.ShoppingSimulator.init();
  if (window.TrackerManager) window.TrackerManager.init();

  // 2. Global Navigation & Scroll Spy
  initNavigation();

  // 3. Language Selector
  initLanguageSwitcher();

  // 4. Location Guide Tabs
  initGuideTabs();

  // 5. FAQ Accordions
  initFaqAccordion();

  // 6. My Pass Modal
  initMyPassModal();

  console.log('LUGGAGE PASS Web Application successfully initialized.');
});

// --- Navigation & Mobile Drawer ---
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('primary-nav');

  // Sticky Header Shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close when nav link clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// --- Language Switcher ---
function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (window.I18nManager) {
        window.I18nManager.setLanguage(lang);
      }
    });
  });
}

// --- Location Guide Tabs ---
function initGuideTabs() {
  const guideTabBtns = document.querySelectorAll('.guide-tab-btn');
  const guidePanes = document.querySelectorAll('.guide-pane');

  guideTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      guideTabBtns.forEach(b => b.classList.remove('active'));
      guidePanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add('active');
    });
  });
}

// --- FAQ Accordions ---
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

// --- My Pass Modal ---
function initMyPassModal() {
  const openBtn = document.getElementById('gnb-my-pass-btn');
  const modal = document.getElementById('mypass-modal');
  const closeBtn = document.getElementById('mypass-modal-close');
  const modalPassContainer = document.getElementById('modal-pass-container');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      let pass = window.StorageManager.getActivePass();
      if (!pass) {
        pass = window.StorageManager.loadDemoPass();
        if (window.BookingManager) {
          window.BookingManager.showToast('체험용 샘플 패스가 로드되었습니다.');
        }
      }
      
      const passCard = document.getElementById('digital-pass-card');
      if (passCard && modalPassContainer) {
        modalPassContainer.innerHTML = '';
        const clone = passCard.cloneNode(true);
        clone.id = 'modal-cloned-pass';
        clone.style.display = 'block';
        modalPassContainer.appendChild(clone);

        // Also redraw canvas on clone
        const cloneBarcode = clone.querySelector('#barcode-canvas');
        const cloneQr = clone.querySelector('#qr-canvas');
        if (cloneBarcode && window.BookingManager) {
          cloneBarcode.id = 'modal-barcode-canvas';
          window.BookingManager.drawBarcode(pass.passId);
          // copy canvas
          const origB = document.getElementById('barcode-canvas');
          if (origB) cloneBarcode.getContext('2d').drawImage(origB, 0, 0);
        }
        if (cloneQr && window.BookingManager) {
          cloneQr.id = 'modal-qr-canvas';
          const origQ = document.getElementById('qr-canvas');
          if (origQ) cloneQr.getContext('2d').drawImage(origQ, 0, 0);
        }
      }

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}
