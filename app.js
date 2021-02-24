const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.aside');

hamburger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

function hideAside() {
  menu.style.display = 'none';
}