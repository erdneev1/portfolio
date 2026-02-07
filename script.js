// script.js

const gallery = document.getElementById('gallery');
if (!gallery) return;

const images = Array.from(gallery.querySelectorAll('img'));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

// открыть лайтбокс
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.classList.add('show');
}

// закрыть лайтбокс
function closeLightbox() {
  lightbox.classList.remove('show');
  lightboxImg.src = '';
}

// следующий / предыдущий
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// клик по фото
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

// клик по фону — закрыть
lightbox.addEventListener('click', closeLightbox);

// клавиатура
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('show')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
