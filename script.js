// ── Language toggle (shared across all pages) ──────────────────────────────
let lang = localStorage.getItem('lotw-lang') || 'da';

function applyLang() {
  document.querySelectorAll('[data-da]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'da' ? 'ENGLISH' : 'DANISH';
  const sprogField = document.getElementById('sprogHidden');
  if (sprogField) sprogField.value = lang;
}

function toggleLang() {
  lang = lang === 'da' ? 'en' : 'da';
  localStorage.setItem('lotw-lang', lang);
  applyLang();
}

// ── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang();

  // Highlight active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
