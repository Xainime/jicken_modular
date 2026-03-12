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

// ── Mobile cart drawer ──
function openDrawer() {
  document.getElementById('kPan').classList.add('drawer-open');
  document.getElementById('panOverlay').classList.add('visible');
}

function closeDrawer() {
  document.getElementById('kPan').classList.remove('drawer-open');
  document.getElementById('panOverlay').classList.remove('visible');
}

function toggleDrawer() {
  const pan = document.getElementById('kPan');
  pan.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
}

// Keep the toggle button count in sync
function updateToggleBtn(count) {
  const btn = document.getElementById('panToggleCount');
  if (btn) btn.textContent = count;
}

// Auto-open drawer when item is added on mobile
const _origAddToPan = addToPan;
window.addToPan = function(item) {
  _origAddToPan(item);
  if (window.innerWidth <= 900) openDrawer();
};

// Prevent pull-to-refresh
document.addEventListener('touchmove', function(e) {
  if (document.getElementById('page-kiosk').classList.contains('active')) {
    e.preventDefault();
  }
}, { passive: false });
