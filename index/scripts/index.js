// --- Scrollspy NAVIGATION ---
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar ul li a");
  let currentSection = "";
  const offset = 120; // Ajuste selon la hauteur de ton header

  // Trouver la section visible
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  // Cas spécial : tout en bas de la page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    const lastSection = sections[sections.length - 1];
    if (lastSection) currentSection = lastSection.getAttribute("id");
  }

  // Mise à jour des liens
  navLinks.forEach((link) => {
    link.classList.remove("link-active");
    if (currentSection && link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("link-active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("DOMContentLoaded", updateActiveNavLink);

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
