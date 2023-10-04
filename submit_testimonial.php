<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $author = $_POST["author"];
    $message = $_POST["message"];

    // Validate and sanitize input (add more validation as needed)
    $author = htmlspecialchars($author);
    $message = htmlspecialchars($message);

    // Store the testimonial in a database or file (for this example, we'll use a file)
    $file = 'testimonials.txt';
    $newTestimonial = "Author: $author\nMessage: $message\n\n";

    // Append the new testimonial to the file
    file_put_contents($file, $newTestimonial, FILE_APPEND);

    // Redirect back to testimonials page
    header("Location: testimonials.html");
    exit();
}
?>
