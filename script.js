const PROFILE = {
  // Troque pelos seus links reais antes de publicar.
  linkedin: "https://www.linkedin.com/in/SEU-USUARIO",
  github: "https://github.com/SEU-USUARIO",
  email: "mailto:SEU-EMAIL"
};

document.getElementById("linkedinLink").href = PROFILE.linkedin;
document.getElementById("githubLink").href = PROFILE.github;
document.getElementById("emailLink").href = PROFILE.email;
document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 16);
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));
