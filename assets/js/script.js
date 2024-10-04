  // Fungsi untuk mencegah klik kanan
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Fungsi klik kanan dinonaktifkan!");
});

// Fungsi untuk mencegah kombinasi tombol Inspect (Ctrl+Shift+I, F12, Ctrl+U)
document.addEventListener('keydown', function(event) {
    // Cegah F12
    if (event.key === "F12") {
        event.preventDefault();
        alert("Fungsi ini tidak diizinkan!");
    }

    // Cegah Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
        event.preventDefault();
        alert("Fungsi ini tidak diizinkan!");
    }

    // Cegah Ctrl+U
    if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault();
        alert("Fungsi ini tidak diizinkan!");
    }
});

if (window.innerWidth > 1024) { // Ukuran desktop biasanya lebih besar dari 1024px
// Redirect ke halaman lain
// window.location.href = "URL_tujuan";

// Atau tampilkan pesan kesalahan
alert("Maaf, website ini hanya dapat diakses melalui perangkat mobile.");
document.body.innerHTML = '<h1>Website ini hanya tersedia untuk perangkat mobile.</h1>'; // Menampilkan pesan di body
}




 // Navbar Sticky on Scroll
 const navbar = document.querySelector(".navbar");

 window.addEventListener("scroll", () => {
     if (window.scrollY > 30) {
         navbar.classList.add("sticky");
     } else {
         navbar.classList.remove("sticky");
     }
 });

 // Nav Links Close on Click
 const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
 const menuToggle = document.querySelector("#navbarNav");

 function navLinksClose() {
     navLinks.forEach((link) => {
         link.addEventListener("click", () => {
             menuToggle.classList.remove("show");
         });
     });
 }

 navLinksClose();

 // Close navbar on click outside
 document.addEventListener('click', function (event) {
     const isClickInsideNavbar = navbar.contains(event.target);
     const isTogglerClick = navbar.querySelector('.navbar-toggler').contains(event.target);

     // Tutup navbar hanya jika klik di luar navbar dan bukan pada toggler
     if (!isClickInsideNavbar && !isTogglerClick) {
         menuToggle.classList.remove('show'); // Tutup navbar
     }
 });

 
//  Scroll Reveal
const scroll = ScrollReveal({
  distance: "60px",
  delay: 300,
  duration: 2000,
});

scroll.reveal(`.home__info h1, .home__info p, .home__info .main-btn`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.home__image img , .home .category-box`, {
  origin: "left",
  interval: 100,
});

scroll.reveal(`.main-heading , .services .serv , .menu .title`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.about .image`, {
  origin: "left",
});
scroll.reveal(`.about .content`, {
  origin: "right",
});

scroll.reveal(`.menu .search`, {
  origin: "bottom",
});
scroll.reveal(`.menu .menu-content .nav .nav-link`, {
  origin: "left",
  interval: 100,
});
scroll.reveal(`.menu .tab-content`, {
  origin: "right",
  interval: 100,
});
scroll.reveal(`.menu .btn , .careers .box `, {
  origin: "bottom",
  interval: 100,
});

scroll.reveal(`.contact .left`, {
  origin: "left",
});
scroll.reveal(`.contact .right`, {
  origin: "right",
});

//  Scroll Top Button
const scrollTopButton = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

// Update Year
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
