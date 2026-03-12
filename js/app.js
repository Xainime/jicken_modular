// ═══════════════════════════════════════════
// app.js — App initialization (runs on DOMContentLoaded)
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Reset all pages — home starts active
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const home = document.getElementById('page-home');
  if (home) {
    home.classList.add('active');
    home.style.display = '';
  }

  // Kiosk hidden by default
  const kiosk = document.getElementById('page-kiosk');
  if (kiosk) kiosk.style.display = 'none';

  // Init scroll reveal
  setTimeout(initReveal, 200);

  // Init pan display
  renderPan();
});
