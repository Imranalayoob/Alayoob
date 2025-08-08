(function () {
  const root = document.documentElement;
  const toggleButton = document.querySelector('.theme-toggle');
  const iconEl = toggleButton?.querySelector('.icon');
  const yearEl = document.getElementById('copyright');

  function getSystemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    const effective = theme || (getSystemPrefersDark() ? 'dark' : 'light');
    root.setAttribute('data-theme', effective);
    if (iconEl) iconEl.textContent = effective === 'dark' ? '🌙' : '☀️';
  }

  function initTheme() {
    const saved = localStorage.getItem('theme');
    applyTheme(saved);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  toggleButton?.addEventListener('click', toggleTheme);

  // Set year
  const year = new Date().getFullYear();
  if (yearEl) {
    yearEl.textContent = `© ${year} عمران الايوب`;
  }

  initTheme();
})();