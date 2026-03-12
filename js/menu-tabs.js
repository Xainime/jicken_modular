// ═══════════════════════════════════════════
// menu-tabs.js — Menu & Cafe tab switching
// ═══════════════════════════════════════════

function switchMenuTab(id, btn) {
  document.querySelectorAll('#page-menu .panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#page-menu .tab').forEach(b => b.classList.remove('active'));
  document.getElementById('menu-' + id).classList.add('active');
  btn.classList.add('active');
  const stagger = document.querySelector('#menu-' + id + ' .stagger');
  if (stagger) { stagger.classList.remove('vis'); setTimeout(() => stagger.classList.add('vis'), 50); }
}

function switchCafeTab(id, btn) {
  document.querySelectorAll('#page-cafe .cpanel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#page-cafe .ctab').forEach(b => b.classList.remove('active'));
  document.getElementById('cafe-' + id).classList.add('active');
  btn.classList.add('active');
  const stagger = document.querySelector('#cafe-' + id + ' .stagger');
  if (stagger) { stagger.classList.remove('vis'); setTimeout(() => stagger.classList.add('vis'), 50); }
}
