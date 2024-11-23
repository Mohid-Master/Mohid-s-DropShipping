// document.addEventListener("DOMContentLoaded", function() {
//   const themeSwitch = document.getElementById('themeSwitch');
//   const body = document.body;

//   themeSwitch.addEventListener('change', function() {
//     body.classList.toggle('dark-theme');
//   });

//   // Carousel Interaction
//   const carouselItems = document.querySelectorAll(".carouselItem");
//   carouselItems.forEach(item => {
//     item.addEventListener("click", () => {
//       carouselItems.forEach(i => i.classList.remove("active"));
//       item.classList.add("active");
//     });
//   });

//   // Smooth scroll effect for section links
//   document.querySelectorAll('.navLinks a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

//   // Reveal elements on scroll
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {document.addEventListener("DOMContentLoaded", function() {
//   const themeSwitch = document.getElementById('themeSwitch');
//   const body = document.body;

//   themeSwitch.addEventListener('change', function() {
//     body.classList.toggle('dark-theme');
//   });

//   // Rotating Block Interaction
//   const blocks = document.querySelectorAll(".block");
//   let currentIndex = 0;

//   function rotateBlocks() {
//     blocks.forEach((block, index) => {
//       block.style.transform = `rotateY(${(index - currentIndex) * 90}deg)`;
//     });
//     currentIndex = (currentIndex + 1) % blocks.length;
//   }

//   setInterval(rotateBlocks, 3000); // Rotate every 3 seconds

//   // Smooth scroll effect for section links
//   document.querySelectorAll('.navLinks a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// });
//         entry.target.classList.add('popUp');
//       }
//     });
//   }, { threshold: 0.1 });

//   document.querySelectorAll('.moreProducts, .footer').forEach(el => {
//     observer.observe(el);
//   });
// });




document.addEventListener("DOMContentLoaded", function() {
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;

  // Theme Switch Functionality
  themeSwitch.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
  });

  // Social Media Animation
  const socialIcons = document.querySelectorAll('.socialIcon');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  socialIcons.forEach(icon => {
    observer.observe(icon);
  });

  // Smooth scroll effect for section links
  document.querySelectorAll('.navLinks a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

function scaleUp(element) {
  element.style.transform = 'scale(1.1)';
}

function scaleDown(element) {
  element.style.transform = 'scale(1)';
}
document.addEventListener("DOMContentLoaded", function() {
  const cube = document.getElementById('cube');
  let currentRotation = 0;

  function rotateCube() {
    currentRotation += 90; // Rotate 90 degrees on each interval
    cube.style.transform = `rotateY(${currentRotation}deg)`; // Apply rotation
  }

  setInterval(rotateCube, 5000); 
    // Rotate every 3 seconds
});
// JavaScript for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the active class to show/hide the sidebar
});





// document.addEventListener("DOMContentLoaded", function() {
//   const themeSwitch = document.getElementById('themeSwitch');
//   const body = document.body;

//   // Theme Switch Functionality
//   themeSwitch.addEventListener('change', function() {
//     body.classList.toggle('dark-theme');
//   });

//   // Social Media Animation
//   const socialIcons = document.querySelectorAll('.socialIcon');
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   });

//   socialIcons.forEach(icon => {
//     observer.observe(icon);
//   });

//   // Smooth scroll effect for section links
//   document.querySelectorAll('.navLinks a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// });

// function scaleUp(element) {
//   element.style.transform = 'scale(1.1)';
// }

// function scaleDown(element) {
//   element.style.transform = 'scale(1)';
// }
// document.addEventListener("DOMContentLoaded", function() {
//   const cube = document.getElementById('cube');
//   let currentRotation = 0;

//   function rotateCube() {
//     currentRotation += 90; // Rotate 90 degrees on each interval
//     cube.style.transform = `rotateY(${currentRotation}deg)`; // Apply rotation
//   }

  setInterval(rotateCube, 5000); // Rotate every 3 seconds
// });
// // JavaScript for Hamburger Menu
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.navLinks');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active'); // Toggle the active class to show/hide the sidebar
// });

