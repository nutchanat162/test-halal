-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2025 at 04:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `halal-counts`
--

-- --------------------------------------------------------

--
-- Table structure for table `visitor_logs`
--

CREATE TABLE `visitor_logs` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `visit_time` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visitor_logs`
--

INSERT INTO `visitor_logs` (`id`, `ip_address`, `visit_time`) VALUES
(1, '::1', '2025-07-21 15:49:57'),
(2, '::1', '2025-07-21 15:52:45'),
(3, '::1', '2025-07-21 15:52:50'),
(4, '::1', '2025-07-16 15:52:55'),
(5, '::1', '2025-07-20 15:52:59'),
(6, '::1', '2025-07-21 15:53:35'),
(7, '::1', '2025-07-21 20:15:44'),
(8, '::1', '2025-07-21 20:27:17'),
(9, '::1', '2025-07-23 13:13:55'),
(10, '::1', '2025-07-23 13:14:07'),
(11, '::1', '2025-07-23 13:14:13'),
(12, '::1', '2025-07-23 13:14:20'),
(13, '::1', '2025-07-23 14:59:55'),
(14, '::1', '2025-07-23 15:00:05'),
(15, '::1', '2025-07-23 15:00:18'),
(16, '::1', '2025-07-23 15:00:22'),
(17, '::1', '2025-07-23 15:32:13'),
(18, '::1', '2025-07-23 16:26:58'),
(19, '::1', '2025-07-24 15:41:21'),
(20, '::1', '2025-07-24 15:43:41'),
(21, '::1', '2025-07-24 15:43:51'),
(22, '::1', '2025-07-24 15:43:54'),
(23, '::1', '2025-07-24 15:43:57'),
(24, '::1', '2025-07-24 15:44:06'),
(25, '::1', '2025-07-24 15:44:12'),
(26, '::1', '2025-07-24 15:44:15'),
(27, '::1', '2025-07-24 15:44:28'),
(28, '::1', '2025-07-24 15:44:31'),
(29, '::1', '2025-07-24 15:44:33'),
(30, '::1', '2025-07-24 15:44:39'),
(31, '::1', '2025-07-24 15:44:44'),
(32, '::1', '2025-07-24 15:44:55'),
(33, '::1', '2025-07-24 15:45:01'),
(34, '::1', '2025-07-24 15:45:10'),
(35, '::1', '2025-07-24 15:45:12'),
(36, '::1', '2025-07-24 15:45:18'),
(37, '::1', '2025-07-24 15:45:25'),
(38, '::1', '2025-07-24 15:45:29'),
(39, '::1', '2025-07-24 15:45:33'),
(40, '::1', '2025-07-24 15:45:37'),
(41, '::1', '2025-07-24 15:45:41'),
(42, '::1', '2025-07-24 15:45:44'),
(43, '::1', '2025-07-24 15:45:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `visitor_logs`
--
ALTER TABLE `visitor_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `visitor_logs`
--
ALTER TABLE `visitor_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
