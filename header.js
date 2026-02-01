document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (!header) return;

  header.innerHTML = `
    <h2>Sachin Agrawal</h2>
    <nav class="header-nav">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="header-socials">
      <a href="https://www.linkedin.com/in/sachinsagrawal/" target="_blank" title="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/sachinsagrawal" target="_blank" title="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="https://discord.com/users/575795042933932071" target="_blank" title="Discord">
        <i class="fa-brands fa-discord"></i>
      </a>
      <a href="https://instagram.com/sachinsagrawal2" target="_blank" title="Instagram">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <button class="theme-toggle" id="themeToggleBtn" type="button" title="Theme: Auto" aria-label="Theme: Auto">
        <i id="themeToggleIcon" data-lucide="monitor"></i>
      </button>
    </div>
  `;

  document.dispatchEvent(new CustomEvent('header:loaded'));
});
