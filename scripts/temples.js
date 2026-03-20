const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

btn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const lastModified = document.querySelector('#lastModified');

lastModified.textContent = document.lastModified;