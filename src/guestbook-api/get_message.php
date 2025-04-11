<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Připojení k databázi
$host = "https://admin.systems90.cz/mysql";
$dbname = "mysql134709";
$username = "mysql57809";
$password = "Homeopatiekvalitne2025";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $stmt = $pdo->query("SELECT name, message, created_at FROM guestbook ORDER BY created_at DESC");
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($messages);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Chyba serveru: " . $e->getMessage()]);
}
