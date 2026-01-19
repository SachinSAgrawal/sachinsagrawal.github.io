function truncateWords(text, limit = 30) {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(' ') + '…';
}

function createBlogCard({ key, title, date, paragraphs, link }) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  if (key) card.dataset.key = key;

  const header = document.createElement('div');
  header.className = 'blog-header';
  const h4 = document.createElement('h4');
  h4.className = 'blog-title';
  h4.textContent = title;
  const dateEl = document.createElement('span');
  dateEl.className = 'blog-date';
  dateEl.textContent = date;
  header.appendChild(h4);
  header.appendChild(dateEl);

  const preview = document.createElement('div');
  preview.className = 'blog-preview';
  const content = document.createElement('div');
  content.className = 'blog-content';

  const paraList = paragraphs || [];
  const previewText = truncateWords(paraList.join(' '), 30);
  const previewP = document.createElement('p');
  previewP.textContent = previewText;
  preview.appendChild(previewP);

  paraList.forEach((para) => {
    const p = document.createElement('p');
    p.textContent = para;
    content.appendChild(p);
  });

  const links = link ? (Array.isArray(link) ? link : [link]) : [];
  
  links.forEach((linkItem) => {
    const linkP = document.createElement('p');
    
    if (linkItem.icon) {
      const img = document.createElement('img');
      img.className = 'icon';
      img.alt = 'Link icon';
      img.src = linkItem.icon;
      linkP.appendChild(img);
    }
    
    if (linkItem.url) {
      const a = document.createElement('a');
      a.href = linkItem.url;
      a.target = '_blank';
      a.textContent = linkItem.displayText || linkItem.url;
      linkP.appendChild(a);
    } else if (linkItem.displayText) {
      const textNode = document.createTextNode(linkItem.displayText);
      linkP.appendChild(textNode);
    }
    
    content.appendChild(linkP);
  });

  card.appendChild(header);
  card.appendChild(preview);
  card.appendChild(content);

  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    const allCards = document.querySelectorAll('.blog-card');
    allCards.forEach(c => {
      if (c !== card) c.classList.remove('expanded');
    });
    card.classList.toggle('expanded');
  });

  return card;
}

async function initBlogs() {
  const container = document.getElementById('blogs');
  if (!container) return;

  (BLOGS_DATA || []).forEach(cfg => {
    const card = createBlogCard({ key: cfg.key, title: cfg.title, date: cfg.date, paragraphs: cfg.paragraphs || cfg.lines || [], link: cfg.link });
    container.appendChild(card);
  });

  expandFromQuery();
}

document.addEventListener('DOMContentLoaded', initBlogs);

function expandFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const target = params.get('post') || (location.hash ? decodeURIComponent(location.hash.replace('#', '')) : '');
  if (!target) return;

  const card = document.querySelector(`.blog-card[data-key="${target}"]`);
  if (!card) return;

  document.querySelectorAll('.blog-card').forEach(c => {
    if (c !== card) c.classList.remove('expanded');
  });

  card.classList.add('expanded');
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
