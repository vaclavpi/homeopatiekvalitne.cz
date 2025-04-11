<?php
header('Content-Type: application/json');
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT * FROM guestbook ORDER BY created_at DESC");
    echo json_encode($stmt->fetchAll());
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['name'], $data['message'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Neplatná data']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO guestbook (name, message) VALUES (?, ?)");
    $stmt->execute([$data['name'], $data['message']]);

    echo json_encode(['success' => true]);
}
