// Inisialisasi AOS
AOS.init({
  offset: 0
});

// Toggle dropmenu
const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const navbar = document.querySelector(".dropmenu");

hamburg.addEventListener("click", () => {
  navbar.style.transform = "translateY(0)";
});

cancel.addEventListener("click", () => {
  navbar.style.transform = "translateY(-300px)";
});

// misalnya setelah halaman load atau event tertentu:
window.addEventListener('load', () => {
  const wrapper = document.querySelector('.profile-wrapper');

  // step 1: munculkan background
  wrapper.classList.add('show-bg');

  // step 2: setelah transisi selesai, baru spin
  setTimeout(() => {
    wrapper.classList.add('spin-bg');
  }, 800); // sama dengan durasi transition css
});

