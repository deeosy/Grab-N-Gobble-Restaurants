// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // Calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position -= navHeight;
    }

    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});

// video controls 
const video = document.getElementById("js-food-video");

video.addEventListener("mouseenter", function () {
    video.setAttribute("controls", "controls");
});

video.addEventListener("mouseleave", function () {
    video.removeAttribute("controls");
});

// slide.js 
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoScroll: {
        speed: 1,
      },    
      perPage: 5, // Adjust the number of images visible at a time
      autoplay: true, // Enable autoplay
      interval: 5000, // Time between slides
      pauseOnHover: true, // Pause when hovered
      breakpoints: {
          1024: { perPage: 2 },
          768: { perPage: 1 },
      },
  }).mount();
});