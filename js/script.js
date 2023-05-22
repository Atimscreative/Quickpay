"use strict";

// PRELOADER
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  // Remove message after 5 seconds
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);
});

// Navigation
const openMenu = document.querySelector(".open-menu"),
  closeMenu = document.querySelector(".close-menu"),
  navMenu = document.querySelector(".nav-menu"),
  logo = document.querySelector(".logo");

// Function that closes the nav menu
function closeNavMenu() {
  navMenu.classList.remove("display-mobile-nav");
}

// Navmenu Opens
openMenu.addEventListener("click", function () {
  navMenu.classList.add("display-mobile-nav");
  logo.style.zIndex = "2";
  logo.style.animation = "fade-in 300ms 1 ease-in-out";
});

// Navmenu Closes
closeMenu.addEventListener("click", () => {
  closeNavMenu();
  logo.style.animation = "none";
});

// Remove Nav-Menu when link are clicked
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavMenu();
  });
});

// LOGIN AND DOWNLOAD BTN
const loginBtn = document.querySelector(".login-btn");
const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", function () {
  navMenu.classList.remove("display-mobile-nav");
});

// CHANGE HEADER BG AND ADD SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentPosition = window.pageYOffset;

  if (currentPosition >= 100) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
});

// SCROLL BACK TO TOP
const toTop = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 200) {
    toTop.style.bottom = "10px";
  } else {
    toTop.style.bottom = "-50px";
  }
});

/* ========= ACTIVE MENU SCROLLPSY ========= */
// Attach a scroll event listener to the window object
window.addEventListener("scroll", function () {
  // Get the current scroll position of the window
  var currentScrollPos = window.pageYOffset;

  // Define the IDs of the selected sections
  var sectionIds = ["hero", "whyus", "about", "contact"];

  // Loop through the selected section IDs
  for (var i = 0; i < sectionIds.length; i++) {
    var sectionId = sectionIds[i];

    // Get the corresponding section element by its ID
    var section = document.getElementById(sectionId);

    // Get the position and height of the section
    var sectionPos = section.offsetTop - 50;
    var sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the range of the section
    if (
      currentScrollPos >= sectionPos &&
      currentScrollPos < sectionPos + sectionHeight
    ) {
      // Add an "active" class to the corresponding link in the navigation menu
      var navLink = document.querySelector("nav a[href='#" + sectionId + "']");
      navLink.classList.add("active");
    } else {
      // Remove the "active" class from the corresponding link in the navigation menu
      var navLink = document.querySelector("nav a[href='#" + sectionId + "']");
      navLink.classList.remove("active");
    }
  }
});
