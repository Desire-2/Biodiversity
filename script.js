document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll('.gallery-image img');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxContainer = document.querySelector('.lightbox-container');
    const closeButton = document.createElement('span');
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
   

    // Function to open the lightbox
    function openLightbox(imageSrc) {
        lightboxContainer.innerHTML = ''; // Clear previous content
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.classList.add('lightbox-image');
        lightboxContainer.appendChild(imageElement);
        lightboxOverlay.style.display = 'flex';
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
    }

    // Event listeners for gallery images
    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            const imageSrc = this.src;
            openLightbox(imageSrc);
        });
    });

    // Create and add close button to the lightbox
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', closeLightbox);
    lightboxContainer.appendChild(closeButton);

    // Close the lightbox when overlay is clicked
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Prevent closing lightbox when the image itself is clicked
    lightboxContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Optional: Close the lightbox with the 'Esc' key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
// JavaScript for Gallery
const galleryImages = document.querySelectorAll('.gallery-image');

// Add event listeners for hover
galleryImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        const caption = image.querySelector('figcaption');
        caption.style.opacity = '1';
        caption.style.transform = 'translateY(0)';
    });

    image.addEventListener('mouseleave', () => {
        const caption = image.querySelector('figcaption');
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(100%)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the form submission
    const testimonialForm = document.querySelector("#testimonial-form");
    testimonialForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const authorInput = document.querySelector("#author");
        const messageInput = document.querySelector("#message");

        const author = authorInput.value;
        const message = messageInput.value;

        // Create a new testimonial element
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");
        testimonialElement.innerHTML = `<strong>Author:</strong> ${author}<br><strong>Message:</strong> ${message}`;

        // Append the new testimonial to the testimonials container
        const testimonialsContainer = document.querySelector(".testimonials");
        testimonialsContainer.appendChild(testimonialElement);

        // Clear form inputs
        authorInput.value = "";
        messageInput.value = "";

        // Hide the form
        testimonialForm.classList.add("hidden");
    });

    // Show the form when the "Add Testimonial" button is clicked
    const addTestimonialButton = document.querySelector("#add-testimonial-button");
    addTestimonialButton.addEventListener("click", function () {
        const testimonialForm = document.querySelector("#testimonial-form");
        testimonialForm.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donation-form");
    const successMessage = document.getElementById("success-message");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(donationForm);
        const amount = formData.get("amount");
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Send form data to the server (You can replace this with AJAX)
        // For demonstration purposes, just display a success message here
        displaySuccessMessage();

        // Clear the form (You can add more form handling logic here)
        donationForm.reset();
    });

    function displaySuccessMessage() {
        successMessage.style.display = "block";

        // Scroll to the success message (You can use smoother scrolling libraries)
        successMessage.scrollIntoView({ behavior: "smooth" });

        // Hide the success message after a few seconds (You can customize the duration)
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 5000); // Hide after 5 seconds (5000 milliseconds)
    }
});

