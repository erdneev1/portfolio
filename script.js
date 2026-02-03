// script.js

const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// событие: клик по любой фотографии
images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

// событие: клик по фону — закрыть
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});
