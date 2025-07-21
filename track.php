<?php
require_once("db.php");

$ip = $_SERVER['REMOTE_ADDR'];

$stmt = $conn->prepare("INSERT INTO visitor_logs (ip_address) VALUES (?)");
$stmt->execute([$ip]);
