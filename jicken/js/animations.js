// ═══════════════════════════════════════════
// animations.js — Intersection Observer scroll reveal
// ═══════════════════════════════════════════

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .stagger').forEach(el => {
    if (!el.classList.contains('vis')) observer.observe(el);
    else el.classList.add('vis');
  });
}
