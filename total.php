<?php
require_once("db.php");

// 👇 นับทั้งหมด
$totalStmt = $conn->query("SELECT COUNT(*) FROM visitor_logs");
$totalVisits = $totalStmt->fetchColumn();

// 👇 นับของวันนี้
$today = date("Y-m-d");
$todayStmt = $conn->prepare("SELECT COUNT(*) FROM visitor_logs WHERE DATE(visit_time) = ?");
$todayStmt->execute([$today]);
$todayVisits = $todayStmt->fetchColumn();

// 👇 ส่งกลับ JSON
header("Content-Type: application/json");
echo json_encode([
  "totalVisits" => $totalVisits,
  "todayVisits" => $todayVisits
]);
