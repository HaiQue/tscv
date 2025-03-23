<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$env = parse_ini_file(__DIR__ . '/../config.env');

$emailUser = $env['EMAIL_USER'];
$emailPass = $env['EMAIL_PASSWORD'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../phpmailer/src/Exception.php';
require __DIR__ . '/../phpmailer/src/PHPMailer.php';
require __DIR__ . '/../phpmailer/src/SMTP.php';

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $inputJSON = file_get_contents("php://input");
    $requestData = json_decode($inputJSON, true);

    if (!isset($requestData["userEmail"], $requestData["adminEmail"], $requestData["userData"])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing required fields"]);
        exit;
    }

    $userEmail = $requestData["userEmail"];
    $adminEmail = $requestData["adminEmail"];
    $userData = $requestData["userData"];

    // Save data to CSV (Excel alternative)
    $csvFile = "../data/registrations.csv";
    $csvData = [
        $userData["vardas"],
        $userData["pavarde"],
        $userData["pareigos"],
        $userData["darboviete"],
        $userData["email"],
        $userData["phone"],
        $userData["vertimasPriemone"] ? "Taip" : "Ne",
        count($userData["tickets"])
    ];

    $file = fopen($csvFile, "a");
    fputcsv($file, $csvData);
    fclose($file);

    // Configure PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->CharSet = 'UTF-8'; // ✅ This fixes Lithuanian symbols
        $mail->isSMTP();
        $mail->Host = "cphostingas.telecentras.lt";
        $mail->SMTPAuth = true;
        $mail->Username = $emailUser;
        $mail->Password = $emailPass;
        $mail->SMTPSecure = "ssl";
        $mail->Port = 465;
        $mail->setFrom($emailUser, "NKC Konferencija");

        // User email content
        $mail->addAddress($userEmail);
        $mail->Subject = "=?UTF-8?B?" . base64_encode("Registracija į konferenciją SAUGUS KRAUJAS NKC 2025") . "?=";
        $mail->Body = "Gerb. {$userData["vardas"]} {$userData["pavarde"]},\n\nDėkojame už registraciją į konferenciją Saugus kraujas NKC kuri vyks gegužės 13 dieną CyberCity (Švitrigailos g. 34, B korpusas, Vilnius).\n\nJūsų registracija sėkmingai patvirtinta. Jeigu turite klausimų, kreipkitės el. paštu konferencija@kraujodonoryste.lt arba telefonu +37052392444.\n\nLaukiame jūsų konferencijoje!\n\nPagarbiai,\nVšĮ Nacionalinis kraujo centras";
        $mail->send();

        // Admin email content
        $mail->clearAddresses();
        $mail->addAddress($adminEmail);
        $mail->Subject = "Nauja registracija: {$userData["vardas"]} {$userData["pavarde"]}";
        $mail->Body = "Nauja registracija į konferenciją:\n\n"
            . "Dalyvio informacija:\n"
            . "- Vardas, pavardė: {$userData["vardas"]} {$userData["pavarde"]}\n"
            . "- Pareigos: {$userData["pareigos"]}\n"
            . "- Darbovietė: {$userData["darboviete"]}\n"
            . "- El. paštas: {$userData["email"]}\n"
            . "- Tel. numeris: {$userData["phone"]}\n"
            . "- Vertimo priemonė: " . ($userData["vertimasPriemone"] ? "Taip" : "Ne") . "\n"
            . "- Bilietų skaičius: " . count($userData["tickets"]) . "\n";
        $mail->send();

        echo json_encode(["message" => "Registration processed successfully"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email", "details" => $mail->ErrorInfo]);
        file_put_contents("php-error-log.txt", $e->getMessage() . "\n", FILE_APPEND);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>