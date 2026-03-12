// ═══════════════════════════════════════════
// kiosk.js — Order kiosk navigation & category selection
// ═══════════════════════════════════════════

function openKiosk(catId, itemId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  const kiosk = document.getElementById('page-kiosk');
  kiosk.classList.add('active');
  kiosk.style.display = '';
  currentPage = 'kiosk';
  window.scrollTo(0, 0);

  if (catId) {
    const catBtn = document.querySelector(`.k-sidebar [data-cat="${catId}"]`);
    if (catBtn) selectKioskCat(catId, catBtn);
    if (itemId) {
      setTimeout(() => {
        const item = document.getElementById('k-' + itemId);
        if (item) {
          item.classList.add('highlighted');
          item.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => item.classList.remove('highlighted'), 5000);
        }
      }, 300);
    }
  }
  updateFloatPan();
}

function selectKioskCat(cat, btn) {
  document.querySelectorAll('.k-section').forEach(s => s.style.display = 'none');
  const sec = document.getElementById('k-' + cat);
  if (sec) sec.style.display = 'block';

  document.querySelectorAll('.k-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.k-cat-bar button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const sidebarBtn = document.querySelector(`.k-sidebar [data-cat="${cat}"]`);
  if (sidebarBtn) sidebarBtn.classList.add('active');
  const barBtn = document.querySelector(`.k-cat-bar button[onclick*="${cat}"]`);
  if (barBtn) barBtn.classList.add('active');

  const stagger = sec ? sec.querySelector('.stagger') : null;
  if (stagger) { stagger.classList.remove('vis'); setTimeout(() => stagger.classList.add('vis'), 50); }
}
