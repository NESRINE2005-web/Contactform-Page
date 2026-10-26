const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! Your form has been checked successfully. " +
        "Please note that this demo does not send your message.";

    contactForm.reset();

});
