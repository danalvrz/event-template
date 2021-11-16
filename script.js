const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
  } else {
    menu.classList.add('showMenu');
  }
};

function closeMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
    }
};

hamburger.addEventListener('click', toggleMenu);
xIcon.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);