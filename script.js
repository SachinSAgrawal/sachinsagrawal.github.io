function displayRecentBlogs() {
  const container = document.getElementById('recent-blogs');
  if (!container) return;

  const recentBlogs = (BLOGS_DATA || []).slice(0, 2);

  recentBlogs.forEach(blog => {
    const item = document.createElement('div');
    item.className = 'recent-blog-item';
    item.tabIndex = 0;

    const title = document.createElement('h4');
    title.textContent = blog.title;
    
    const date = document.createElement('p');
    date.textContent = blog.date;

    item.appendChild(title);
    item.appendChild(date);
    container.appendChild(item);

    const targetKey = blog.key || '';
    const targetUrl = `/blog?post=${encodeURIComponent(targetKey)}`;

    const goToPost = () => {
      window.location.href = targetUrl;
    };

    item.addEventListener('click', goToPost);
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToPost();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('recent-blogs')) {
    displayRecentBlogs();
  }
});
