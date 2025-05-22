<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Simule l'envoi d'un mail (affiche juste les infos)
    echo "<h2>Message reçu :</h2>";
    echo "<p><strong>Nom :</strong> $name</p>";
    echo "<p><strong>Email :</strong> $email</p>";
    echo "<p><strong>Message :</strong><br>$message</p>";

    // Pour activer réellement l'envoi d'email, tu dois configurer "sendmail" + "php.ini"
}
?>

