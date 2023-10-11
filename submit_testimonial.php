<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $author = $_POST["author"];
    $message = $_POST["message"];

    // Validate and sanitize input (add more validation as needed)
    $author = htmlspecialchars($author);
    $message = htmlspecialchars($message);

    // Store the testimonial in a file
    $file = 'testimonials.txt';
    $newTestimonial = "Author: $author\nMessage: $message\n\n";

    // Append the new testimonial to the file
    if (file_put_contents($file, $newTestimonial, FILE_APPEND | LOCK_EX) !== false) {
        // Testimonial saved successfully
        header("Location: testimonials.html");
        exit();
    } else {
        // Error handling: Failed to save the testimonial
        echo "Failed to save the testimonial.";
    }
}
?>
