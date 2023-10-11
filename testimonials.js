// Sample data - Replace this with your actual data source
const testimonialsData = [
    {
        author: "John Doe",
        message: "I had the privilege of joining Biodiversity Nexus Rwanda in their conservation efforts. It was an eye-opening experience. Great work!"
    },
    {
        author: "Jane Smith",
        message: "Biodiversity Nexus Rwanda is doing an amazing job in educating and involving the youth in conservation. I'm proud to be a part of it."
    }
];

// Function to display testimonials
function displayTestimonials() {
    const testimonialContainer = document.getElementById("testimonial-container");
    
    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");
        
        const blockquoteElement = document.createElement("blockquote");
        blockquoteElement.textContent = testimonial.message;
        
        const authorElement = document.createElement("p");
        authorElement.classList.add("author");
        authorElement.textContent = testimonial.author;
        
        testimonialElement.appendChild(blockquoteElement);
        testimonialElement.appendChild(authorElement);
        
        testimonialContainer.appendChild(testimonialElement);
    });
}

// Call the function to display testimonials when the page loads
window.onload = displayTestimonials;
