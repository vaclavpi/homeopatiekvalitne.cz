<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Nastav si své údaje pro připojení k databázi
$host = "https://admin.systems90.cz/mysql";
$dbname = "mysql134709";
$username = "mysql57809";
$password = "Homeopatiekvalitne2025";

// Získej data z POST
$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->name) || !isset($data->message)) {
    http_response_code(400);
    echo json_encode(["error" => "Neplatný vstup."]);
    exit;
}

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $stmt = $pdo->prepare("INSERT INTO guestbook (name, message) VALUES (?, ?)");
    $stmt->execute([$data->name, $data->message]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Chyba serveru: " . $e->getMessage()]);
}
