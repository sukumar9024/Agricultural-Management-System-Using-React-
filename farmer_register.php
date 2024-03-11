<?php

// if (empty($_POST["farmer-name"])) {
//     die("Name is required");
// }

// if ($_POST["email"]) {
//     die("Valid email is required");
// }

if (strlen($_POST["password"]) < 8) {
    die("Password must be at least 8 characters");
}

if (!preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}

if (!preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one number");
}

if ($_POST["password"] !== $_POST["cpassword"]) {
    die("Passwords do not match");
}
// if (empty($_POST["address"])) {
//     die("Name is required");
// }
// if (empty($_POST["state"])) {
//     die("Name is required");
// }
// if (empty($_POST["cityu"])) {
//     die("Name is required");
// }
// if (empty($_POST["mobile"])) {
//     die("Number is required");
// }
// if (empty($_POST["pcode"])) {
//     die("Number is required");
// }

// Include the file to establish a database connection
require_once __DIR__ . "/db.php";

// Hash the password
$hashedPassword = password_hash($_POST["password"], PASSWORD_DEFAULT);

$sql = "INSERT INTO farmers_data (username, email, password, address, state, city, pincode, mobile)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    die("SQL error: " . $mysqli->error);
}


$stmt->bind_param("ssssssis",
    $_POST["username"],
    $_POST["email"],
    $hashedPassword,
    $_POST["address"],
    $_POST["state"],
    $_POST["city"],
    $_POST["pincode"],
    $_POST["mobile"],

);

if ($stmt->execute()) {
    header("Location: login.html");
    exit;
} else {
    if ($mysqli->errno === 1062) {
        die("Email already taken");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }
}
?>
