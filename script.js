// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Close menu when navigation link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// ===============================
// FAQ ACCORDION
// ===============================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {

                item.classList.remove("active");

                const icon =
                    item.querySelector(".faq-question span");

                if (icon) {
                    icon.textContent = "+";
                }

            }

        });


        currentItem.classList.toggle("active");

        const icon =
            question.querySelector("span");

        if (currentItem.classList.contains("active")) {

            icon.textContent = "−";

        } else {

            icon.textContent = "+";

        }

    });

});


// ===============================
// CONTACT FORM → WHATSAPP
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const business =
        document.getElementById("business").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert(
            "Please fill in your name, email and message."
        );

        return;
    }


    const whatsappMessage =
        `Hello Collins Skylin Web Solutions!%0A%0A` +

        `Name: ${encodeURIComponent(name)}%0A` +

        `Email: ${encodeURIComponent(email)}%0A` +

        `Business: ${encodeURIComponent(business)}%0A%0A` +

        `Project Details:%0A` +

        `${encodeURIComponent(message)}`;


    const whatsappURL =
        `https://wa.me/2349163816699?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-card, .price-card, .benefit"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
