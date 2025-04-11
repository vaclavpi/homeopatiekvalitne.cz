<?php
// Nastavení hlaviček pro správný typ obsahu
header('Content-Type: application/json');


// Připojení k databázi
$host = 'localhost';
$dbname = 'mysql134709';
$username = "mysql57809";
$password = "Homeopatiekvalitne2025";
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Načtení dat z POST requestu
    $data = json_decode(file_get_contents('php://input'), true);

    // Ověření, že data obsahují potřebné hodnoty
    if (!isset($data['name']) || !isset($data['message'])) {
        echo json_encode(['success' => false, 'message' => 'Chybí název nebo zpráva']);
        exit;
    }

    $name = $data['name'];
    $message = $data['message'];

    // Vložení nové recenze do databáze
    $sql = "INSERT INTO guestbook (name, message, created_at) VALUES (?, ?, NOW())";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$name, $message]);

    // Úspěšná odpověď
    echo json_encode(['success' => true, 'message' => 'Recenze byla úspěšně odeslána!']);
} catch (PDOException $e) {
    // Chyba při připojení k databázi nebo při vykonání dotazu
    echo json_encode(['success' => false, 'message' => 'Chyba při odesílání recenze: ' . $e->getMessage()]);
}
?>
