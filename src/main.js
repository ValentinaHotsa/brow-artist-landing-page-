import 'modern-normalize/modern-normalize.css';

const burgerMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('open');
  menuBtn.classList.toggle('open');
});
