const menuBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');

const lastModified = document.querySelector('#lastModified');

lastModified.textContent = document.lastModified;

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});
