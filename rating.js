function initRating() {
  const container = document.getElementById('rating-container');
  if (!container) return;

  const stars = container.querySelectorAll('.star');
  const message = container.querySelector('.rating-message');
  const starsWrapper = container.querySelector('.stars');
  let locked = false;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      if (locked) return;
      stars.forEach(s => s.classList.remove('active', 'hover'));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active');
      }
      message.textContent = 'Thanks for your feedback, which is not being recorded.';
      message.style.display = 'block';
      locked = true;
      if (starsWrapper) {
        starsWrapper.classList.add('locked');
      }
      
      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    });

    star.addEventListener('mouseenter', () => {
      if (locked) return;
      stars.forEach(s => s.classList.remove('hover'));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('hover');
      }
    });

    star.addEventListener('mouseleave', () => {
      if (locked) return;
      stars.forEach(s => s.classList.remove('hover'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initRating);
