// ═══════════════════════════════════════════
// nav.js — Page navigation & mobile nav
// ═══════════════════════════════════════════

let currentPage = 'home';

function navigate(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  document.getElementById('page-kiosk').classList.remove('active');

  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.add('active');
    el.style.display = '';
    currentPage = page;
    window.scrollTo(0, 0);
  }

  // Update nav active link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active-link', a.dataset.page === page);
  });

  updateFloatPan();
  setTimeout(initReveal, 100);
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ─── NAV SCROLL EFFECT ───
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});
