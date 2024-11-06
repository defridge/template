// Toggle Burger Menu
function toggleNav() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
}

// Accordion Logic
const accordionToggles = document.querySelectorAll(".accordion-toggle");
accordionToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    const content = toggle.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-advance carousel every 3 seconds
setInterval(nextSlide, 3000);
