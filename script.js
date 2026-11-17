
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeMenu() {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


// Close menu when clicking outside

document.addEventListener("click", event => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }

});


// =====================================
// 2. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.10
        }
    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // Fallback for browsers without IntersectionObserver

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


// =====================================
// 3. ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const sectionId = entry.target.id;

                    navItems.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${sectionId}`
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-25% 0px -65% 0px"
        }
    );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


// =====================================
// 4. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =====================================
// 5. CLOSE MENU ON WINDOW RESIZE
// =====================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 650) {

        closeMenu();

    }

});
