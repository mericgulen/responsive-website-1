const navMenu = document.getElementById('nav');

function showMenu() {
  navMenu.style.right = '0rem';
}
function hideMenu() {
  navMenu.style.right = '-30rem';
}

//* set current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
