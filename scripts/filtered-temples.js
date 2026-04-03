const menuBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');
const pageTitle = document.getElementById("page-title");
const gallery = document.querySelector(".gallery");

const lastModified = document.querySelector('#lastModified');


lastModified.textContent = document.lastModified;

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Salt Lake Temple",
  location: "Salt Lake City, Utah",
  dedicated: "1893, April, 6",
  area: 382207,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
},
{
  templeName: "Paris France",
  location: "Paris, France",
  dedicated: "2017, May, 21",
  area: 44000,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-403038-wallpaper.jpg"
},
{
  templeName: "Accra Ghana",
  location: "Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17500,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-lds-249027-wallpaper.jpg"
}
];

function displayTemples(templesArray) {
  gallery.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
    
}
displayTemples(temples);

function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
    pageTitle.textContent = "Home";
});

document.getElementById("old").addEventListener("click", () => {
    displayTemples(temples.filter(t => getYear(t) < 1900));
    pageTitle.textContent = "Old Temples (Before 1900)";
});

document.getElementById("new").addEventListener("click", () => {
    displayTemples(temples.filter(t => getYear(t) > 2000));
    pageTitle.textContent = "New Temples (After 2000)";
});

document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
    pageTitle.textContent = "Large Temples (Area > 90,000)";
});

document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
    pageTitle.textContent = "Small Temples (Area < 10,000)";
});