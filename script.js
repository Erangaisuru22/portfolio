function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Thank you, " + name + "! Your message has been received.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}