document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <p>
      © 2023-2026 Sachin Agrawal
      <a class="link" href="/legal.html">Privacy & Terms</a>
    </p>
  `;
});
