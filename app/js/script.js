/* Navigation Scroll Animation */
$(document).ready(function() {
    $('.nav-container a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 850);

        e.preventDefault();
    });

});

/* Mobile Navigation Toggle */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector(".hamburgerButton").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector(".hamburgerButton").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Toggle Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* Closing Mobile Navigation Toggle */
function closeMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector(".hamburgerButton").innerHTML = "<i class='fas fa-bars'></i>";
    }
}

/* carousel */
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("inter-slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}