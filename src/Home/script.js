'use strict'
// navebar Date
const date = new Date;

document.getElementById("date").textContent =
date.toLocaleString("fa-IR", {dateStyle: "full"});

// navbar menu
const navbar = document.getElementById('navbar');
const hid_navbar = document.getElementById('hid-navbar');
const toggle = document.getElementById('nav-toggle-btn');
toggle.addEventListener('click', function() {

    // Add the "button" class to the body element
    document.body.classList.toggle('button');

    // Add the "sidebar-closed" class to the body element
    document.body.classList.toggle('sidebar-closed');

    // Add the "banner" class to the body element for changing the right margin
    document.body.classList.toggle('banner');

    // normal navbar in header
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }

    // hidden navbar in header
    if (hid_navbar.classList.contains('hidden')) {
        hid_navbar.classList.remove('hidden');
    } else {
        hid_navbar.classList.add('hidden');
    }

    // for hide all span in navbar menu
    document.body.classList.toggle('nav-hidden');

    // hide the button in navbar 
    document.body.classList.toggle('add-nav');

});

// Dropdown menu in navbar 
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Close any open dropdowns
        const openDropdown = document.querySelector(".dropdown.show");
        if (openDropdown && openDropdown !== this.nextElementSibling) {
          openDropdown.classList.remove("show");
        }
  
        // Toggle the clicked item's dropdown
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle("show");
      });
    });
});
  



