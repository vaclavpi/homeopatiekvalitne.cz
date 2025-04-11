<?php
// Nastavení hlaviček pro správný typ obsahu
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  // Povolit všechny domény (nebo použít specifický origin)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");  // Povolit metody GET a POST
header("Access-Control-Allow-Headers: Content-Type");  // Povolit hlavičku Content-Type


// Připojení k databázi
$host = 'admin.systems90.cz'; // Hostitel MySQL serveru
$dbname = 'mysql134709'; // Název databáze
$username = "mysql57809";
$password = "Homeopatiekvalitne2025";


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = "SELECT id, name, message, created_at FROM guestbook ORDER BY created_at DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    
    $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => true, 'reviews' => $reviews]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Chyba při načítání recenzí: ' . $e->getMessage()]);
}
?>

