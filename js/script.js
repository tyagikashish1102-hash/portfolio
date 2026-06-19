/* ==========================
   TYPING EFFECT
========================== */

const texts = [
    "Frontend Developer",
    "Web Designer",
    "BCA Graduate",
    "JavaScript Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            count++;
            index = 0;
            type();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

            if (target === 76) {
                counter.innerText = target + "%";
            }

            if (target === 100) {
                counter.innerText = target + "%";
            }

            if (target === 3) {
                counter.innerText = target + "+";
            }

            if (target === 2) {
                counter.innerText = target + "+";
            }

        }

    };

    updateCounter();

});


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
    ".section-title, .skill, .project-card, .timeline-item, .certificate-card, .contact-card, .stat-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   PROJECT BUTTON EFFECT
========================== */

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Project link will be added soon."
        );

    });

});


/* ==========================
   SMOOTH BUTTON HOVER GLOW
========================== */

const buttons =
    document.querySelectorAll(
        ".btn, .project-btn"
    );

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.6)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.boxShadow =
                "none";

        }
    );

});


/* ==========================
   IMAGE HOVER EFFECT
========================== */

const projectImages =
    document.querySelectorAll(
        ".project-card img"
    );

projectImages.forEach(image => {

    image.addEventListener(
        "mouseenter",
        () => {

            image.style.transform =
                "scale(1.08)";

            image.style.transition =
                "0.4s";

        }
    );

    image.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "scale(1)";

        }
    );

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "Portfolio Developed By Kashish Tyagi 🚀"
);
