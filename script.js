
// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// =================================
// SCROLL REVEAL ANIMATION
// =================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =================================
// ACTIVE NAVIGATION HIGHLIGHT
// =================================

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});


sections.forEach(section => {

    sectionObserver.observe(section);

});


// =================================
// AUTOMATIC COPYRIGHT YEAR
// =================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =================================
// BACK TO TOP ON LOGO CLICK
// =================================

document.querySelector(".logo").addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
