const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  speedAsDuration: true,
  offset: 75
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const mainContentElems = document.querySelectorAll('.main-content')
mainContentElems.forEach((elem) => {
  observer.observe(elem);
});
