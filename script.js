const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");
      observer.unobserve(entry.target);

    }

  });

}, { threshold: .12 });

reveals.forEach(el => observer.observe(el));


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  topBtn.style.display = window.scrollY > 500 ? "grid" : "none";

});

topBtn.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
);


const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn?.addEventListener("click", () => {

  const open = nav.style.display === "flex";

  nav.style.display = open ? "none" : "flex";

  if (!open) {

    nav.style.position = "absolute";
    nav.style.top = "58px";
    nav.style.right = "0";
    nav.style.flexDirection = "column";
    nav.style.background = "#fff";
    nav.style.padding = "15px";
    nav.style.borderRadius = "18px";
    nav.style.boxShadow = "0 15px 35px rgba(180,70,110,.15)";

  }

});


nav?.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {

    if (window.innerWidth <= 850) {
      nav.style.display = "none";
    }

  })
);


function copyText(text) {

  navigator.clipboard?.writeText(text);

  const toast = document.getElementById("toast");

  toast.textContent = "Teks berhasil disalin ✨";

  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 1800);

}


/* =========================
   POPUP SERTIFIKAT
   ========================= */

function openCertificate(src) {

  const modal = document.getElementById("certificateModal");
  const preview = document.getElementById("certificatePreview");

  preview.src = src;

  modal.classList.add("active");

}


function closeCertificate() {

  const modal = document.getElementById("certificateModal");

  modal.classList.remove("active");

}
const cursorGlow = document.querySelector(".cursor-glow");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});