<?php
// Read and display existing testimonials from a file (you can replace this with a database query)
$file = 'testimonials.txt';

if (file_exists($file)) {
    $testimonials = file_get_contents($file);
    echo "<div class='testimonials'>$testimonials</div>";
} else {
    echo "<p>No testimonials yet.</p>";
}
?>
