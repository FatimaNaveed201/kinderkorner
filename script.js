let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active'); 
}

// JavaScript to update the progress bar based on scrolling
window.onscroll = function() {
    updateProgressBar();
    progressBarScroll();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

// Function to handle scroll-based progress bar
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    // Considering you have a progress bar with ID 'myBar'
    document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    fadeElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add("active");
        }, index * 200); // Adjust the delay timing (in milliseconds) between each element
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Function to handle the fade-in effect
  function fadeInSections() {
    const sections = document.querySelectorAll(".fade-in");
  
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
  
      const isVisible =
        sectionTop < window.innerHeight && sectionBottom >= 0;
  
      if (isVisible) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }
  
  
// Initial check for fade-in sections on page load
fadeInSections();
  
// Listen for scroll events and trigger the fade-in effect
window.addEventListener("scroll", fadeInSections);
  

// JavaScript to update the progress bar based on scrolling
window.onscroll = function() {updateProgressBar()};
    
function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// mouse following animations
// Array of colors to be used for the follower spans
let colors = ["yellow", "violet", "orange", "pink"];

// Counter to cycle through the colors array
let i = 0;

// Function to create follower spans on mouse movement
document.onmousemove = function(e) {
    // Increment the counter
    i++;

    // Get the mouse coordinates
    let x = e.pageX;
    let y = e.pageY;

    // Create a new span element
    let span = document.createElement("span");
    span.classList.add("follower");
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.style.backgroundColor = colors[i - 1]; // Set background color from the colors array
    document.body.appendChild(span); // Append the span to the body

    // Reset the counter when it reaches the end of the colors array
    if (i == colors.length) {
        i = 0;
    }
};
