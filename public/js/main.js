console.log(`Hello! If you're seeing this, that must mean you deliberately went into the dev tools :) My name is David Mitchell and I'm a new graduate software engineer looking for opportunities to continue learning. This portfolio site definitely needs some work, but it will suffice. I'm currently working on my open-source project BootMe which I highly encourage you take a look at. Here's the link:`);
console.log('https://github.com/demyinn00/BootMe')
console.log('With this site, I made an effort to write semantic HTML. I could have built this app using React.js, but I chose to keep it vanilla.');
console.log('If you have any questions about my experience, please email me at david.emyinn@gmail.com or click the contact button at the bottom');

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  speedAsDuration: true,
  offset: 75
});

// JavaScript to animate on scroll
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.main-content'); // select the element(s) you want to animate

  if ('IntersectionObserver' in window) {
    // Create a new IntersectionObserver instance
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // If element is in viewport
          entry.target.classList.add('show'); // add class 'show' to the element
        } else {
          entry.target.classList.remove('show'); // If element is not in viewport, remove 'show' class
        }
      });
    }, { threshold: [0, 0.2] }); // trigger when 20% of the element is visible

    // Observe each element
    elements.forEach(element => {
      observer.observe(element);
    });
  }
});
