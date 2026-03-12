// ═══════════════════════════════════════════
// loader.js — Loads each page HTML partial into index.html
//
// HOW IT WORKS:
//   Each html/page-*.html file is fetched and inserted
//   into its mount point div in index.html.
//
// ALTERNATIVE (no fetch):
//   If you're not running a local server, you can paste
//   each html/*.html file's content directly into index.html
//   instead of using this loader.
// ═══════════════════════════════════════════

const pages = [
  { file: 'html/home.html',    mount: 'page-home-mount' },
  { file: 'html/about.html',   mount: 'page-about-mount' },
  { file: 'html/contact.html', mount: 'page-contact-mount' },
  { file: 'html/rules.html',   mount: 'page-rules-mount' },
  { file: 'html/menu.html',    mount: 'page-menu-mount' },
  { file: 'html/cafe.html',    mount: 'page-cafe-mount' },
  { file: 'html/kiosk.html',   mount: 'page-kiosk-mount' },
];

async function loadPages() {
  for (const page of pages) {
    try {
      const res = await fetch(page.file);
      const html = await res.text();
      const mount = document.getElementById(page.mount);
      if (mount) mount.innerHTML = html;
    } catch (err) {
      console.warn(`Could not load ${page.file}:`, err);
    }
  }

  // Re-init after all pages are injected
  const home = document.getElementById('page-home');
  if (home) {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
    });
    home.classList.add('active');
    home.style.display = '';
  }
  renderPan();
  setTimeout(initReveal, 200);
}

// Only use loader if running via a server (fetch requires HTTP/HTTPS)
// If opening index.html directly as a file://, the pages won't load via fetch.
// In that case, paste each html/*.html into index.html manually.
if (window.location.protocol !== 'file:') {
  loadPages();
}
