
const navLinks = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");
const homeLink = document.querySelector(".home");




const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

homeLink.classList.add("active");
window.addEventListener("scroll", () => {

    let currentSection = "";
    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });

});

// ======= Form =======
const contactForm = document.querySelector(".contactForm form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const sendVia = document.querySelector('select[name="sendVia"]');


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    // trim(); بتشيل المسافه من الاول والاخر 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const method = sendVia.value;

    // show form data in console for ok tips..
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Send Via:", method);

    // send message
    if (method === "whatsapp") {

        const phone = "201284825686";

        const text =
            `Hello Ahmed, my name is ${name}.\n\n` +
            `My email: ${email}\n\n` +
            `Message: ${message}`;

        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, "_blank");
    
    }else if (method === "email") {

        const subject = `Message from ${name}`;
        const myEmail = `3hmdred3@gmail.com`;

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const emailURL =
            `mailto:${myEmail}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = emailURL;

    }

    contactForm.reset();
});

// نلغي التحكم التلقائي 
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo({
        // top: 0,
    });
});



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});



