// script.js

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to Bottom Function
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Form Submission with Email
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    let mailtoLink = `mailto:andiwillkissyou@gmail.com?subject=Contact from ${name}&body=Email: ${email}%0D%0A${message}`;
    window.location.href = mailtoLink;

    alert("Your message has been sent!");
});

// Automatic Rotation for Events
let currentIndex = 0;
let eventItems = document.querySelectorAll('.event-item');

setInterval(() => {
    if (eventItems.length) {
        eventItems.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'inline-block' : 'none';
        });
        currentIndex = (currentIndex + 1) % eventItems.length;
    }
}, 3500);
