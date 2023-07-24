console.log("Hello! Thanks for checking out my site and going deeper with the dev tools." + 
            " There are a quite a bit on the backlog. " + 
            "This site was last updated on 07/23/2023. I'm currently working" + 
            " on implementing AOS and adapative (or responsive) design.");

console.log("For now, feel free to explore my site and if you have any feedback, please email me!");

console.log("Some things I would like to highlight is that I worked on making my HTML as semantic as possible; but" + 
            " I know I misused the <h*> tags. That is something on my backlog...")

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

