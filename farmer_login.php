<?php
// Include the database connection file
$mysqli = require_once __DIR__ . "/db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve email and password from the form
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email exists in the database
    $check_query = "SELECT * FROM farmers_data WHERE email = '$email'";
    $result = $mysqli->query($check_query);

    if ($result->num_rows == 1) {
        // Fetch the user's data
        $user = $result->fetch_assoc();
        $hashed_password = $user['password'];

        // Verify if the provided password matches the hashed password
        if (password_verify($password, $hashed_password)) {
            // Passwords match, redirect to index.html
            header("Location: index.html");
            exit();
        } else {
            // Passwords do not match
            echo "Invalid email or password";
        }
    } else {
        // Email not found in the database
        echo "Invalid email or password";
    }
}

// Close database connection
$mysqli->close();
?>
