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

