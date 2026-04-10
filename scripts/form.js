// ===== Footer (works on all pages) =====
const lastModified = document.querySelector('#lastModified');
const currentYear = document.querySelector('#currentyear');

if (lastModified) {
  lastModified.textContent = document.lastModified;
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// ===== Product Array =====
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ===== Populate Product Dropdown (ONLY on index.html) =====
const productSelect = document.getElementById("product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// ===== Review Counter (ONLY on review.html) =====
const reviewCountElement = document.getElementById("review-count");

if (reviewCountElement) {
  const STORAGE_KEY = "reviewCount";

  let count = localStorage.getItem(STORAGE_KEY);
  count = count ? Number(count) : 0;

  count++; // increment on each visit

  localStorage.setItem(STORAGE_KEY, count);
  reviewCountElement.textContent = count;
}