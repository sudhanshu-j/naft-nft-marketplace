"use strict"; // Enforces stricter parsing and error handling in the code.

// element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active"); // Toggles the 'active' class on the given element
};

// navbar variables
const navbar = document.querySelector("[data-navbar]"); // Selects the navigation bar element using a custom data attribute
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]"); // Selects the button that toggles the navbar

navbarToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar); // Toggles the 'active' class on the navbar when the button is clicked
});

// wishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]"); // Selects all elements with the wishlist button attribute

for (let i = 0; i < whishlistBtn.length; i++) {
  whishlistBtn[i].addEventListener("click", function () {
    elemToggleFunc(this); // Toggles the 'active' class on the clicked wishlist button
  });
}

// go to top variable
const goTopBtn = document.querySelector("[data-go-top]"); // Selects the 'go to top' button element

window.addEventListener("scroll", function () {
  // Adds or removes 'active' class based on scroll position
  if (this.window.scrollY >= 800) {
    // If user has scrolled down 800px or more
    goTopBtn.classList.add("active"); // Show the 'go to top' button
  } else {
    goTopBtn.classList.remove("active"); // Hide the button when near the top
  }
});

// Initialize ScrollReveal with basic settings
const sr = ScrollReveal({
  origin: "top", // Animate from top
  distance: "60px", // Distance to travel
  duration: 2000, // Animation duration in ms
  delay: 200, // Initial delay before starting
  reset: true, // Re-run animation every time section enters view
});

sr.reveal(`.hero-content`, { origin: "left" });
sr.reveal(`.hero-banner`, { origin: "right" });
sr.reveal(`.product-item, .footer-brand`, { interval: 100 });
sr.reveal(
  `.about-item, .product-item-5, .product-item-6, .product-item-7, .product-item-8`,
  {
    origin: "bottom",
    interval: 200,
  }
);

sr.reveal(
  `.top-seller-item-1, .top-seller-item-2, .top-seller-item-5, .top-seller-item-6, .top-seller-item-9, .top-seller-item-10`,
  { origin: "left", delay: 400, interval: 100 }
);

sr.reveal(
  `.top-seller-item-3, .top-seller-item-4, .top-seller-item-7, .top-seller-item-8, .top-seller-item-11, .top-seller-item-12`,
  { origin: "right", delay: 400, interval: 100 }
);

sr.reveal(`.footer-link-box`, { interval: 200 });
sr.reveal(`.footer-list`, { interval: 300 });
sr.reveal(`.footer-bottom`, { interval: 600 });
