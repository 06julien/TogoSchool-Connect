// --- Scrollspy NAVIGATION ---
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar ul li a");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // Ajuste selon la hauteur de ton header
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove(".link-active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add(".link-active");
    }
  });
});

// Slider d'images dans .appli-galery
const slides = document.querySelectorAll(".slider .slide");
const prevBtn = document.querySelector(".slider .prev");
const nextBtn = document.querySelector(".slider .next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevBtn &&
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

nextBtn &&
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

// Optionnel : slide automatique
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
