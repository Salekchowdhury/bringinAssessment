-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2023 at 02:32 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--
CREATE DATABASE IF NOT EXISTS `books` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `books`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `book_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auth_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publish_date` date NOT NULL,
  `edition` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `book_name`, `auth_name`, `publish_date`, `edition`, `created_at`, `updated_at`) VALUES
(1, 'Ms. Adella Beer V s', 'Prof. Levi Botsford ss', '2007-10-19', 4, '2023-02-24 08:54:40', '2023-02-25 02:30:43'),
(2, 'Dr. Evans', 'Benny', '2019-07-06', 3, '2023-02-24 08:54:40', '2023-02-25 00:43:12'),
(3, 'Erick Dietrich', 'Katrina Schinner', '2003-04-01', 7, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(4, 'Astrid Boyer', 'Zola Borer', '2017-05-18', 2, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(5, 'Prof. Mariano Daniel DVM', 'Kyla Dickinson', '2000-03-26', 3, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(6, 'Miss Breana Nader DVM', 'Ms. Andreane Schaden DVM', '1996-01-30', 7, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(7, 'Prof. Carmel Powlowski', 'Guido Upton', '2018-10-10', 3, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(8, 'Sally Schultz', 'Delfina Jast', '1991-02-03', 6, '2023-02-24 08:54:40', '2023-02-24 08:54:40'),
(11, 'ICT', 'Mahfuzur Rahaman', '2023-02-25', 3, '2023-02-25 02:50:45', '2023-02-25 02:50:45');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_24_143630_create_books_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(11, 'App\\Models\\User', 9, 'salekchowdhurycse20@gmail.com_Token', '9f7f277b4869ac31d411030990c15c3643a4c31b4e6d50d5d8f69f66da932a15', '[\"*\"]', '2023-02-25 07:11:01', '2023-02-24 23:31:19', '2023-02-25 07:11:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'salek', 'salek@gmail.com', NULL, '$2y$10$BfgdtMlZhYThR2lO0oPlfeZJ.uwC0V/C/7Qpfv9QW2.F0m.DsrTzW', NULL, '2023-02-24 02:54:59', '2023-02-24 02:54:59'),
(2, 'Md Salek Chowdhury', 'salekchowdhurycse@gmail.com', NULL, '$2y$10$uG.s.7ZEGh2NJ3YL76soxu8x5eUjDe9TAunoeOtFKql7wznsFaWwO', NULL, '2023-02-24 03:43:32', '2023-02-24 03:43:32'),
(3, 'salekur Rahaman chowdhury', 'shuvo@gmail.com', NULL, '$2y$10$FEBqbhANj5UM6RgJsVitV.s4aFa4.0GpROCBJyr6UWJ4WnXn3zt7C', NULL, '2023-02-24 03:52:16', '2023-02-24 03:52:16'),
(4, 'salek', 'keya14531@gmail.com', NULL, '$2y$10$bQqYJmK2x5K4eAYib19SQ.vGCe9AwTALm3qjF3QnL.N7k6aEUkiRO', NULL, '2023-02-24 03:55:47', '2023-02-24 03:55:47'),
(5, 'salek', 'keya145321@gmail.com', NULL, '$2y$10$HOY3CvZiDkSsuZ0yYTL.xOQq3Hmet09P.Y.cR5K4Kd2fP.tTp0gr.', NULL, '2023-02-24 03:56:25', '2023-02-24 03:56:25'),
(6, 'salekur Rahaman chowdhury', 'shuvo1@gmail.com', NULL, '$2y$10$SseVrbt3SBc7f7O.rXfRvOFeiBr7dBZ4o6ptCWHCWqVjwUY5NGQlC', NULL, '2023-02-24 03:58:04', '2023-02-24 03:58:04'),
(8, 'imran', 'salekchowdhurycse1@gmail.com', NULL, '$2y$10$NP2SDBvhmh4rRlNSuKTKzOoDZdOrkP82ziqFEi2v1QQYus9h5rzuq', NULL, '2023-02-24 08:07:29', '2023-02-24 08:07:29'),
(9, 'salek chy', 'salekchowdhurycse20@gmail.com', NULL, '$2y$10$qjPtuwrUhhGM.ahKrMs3BOyv2/MqdyJJU6Uoj3homaFlcUXd620.O', NULL, '2023-02-24 11:53:08', '2023-02-24 11:53:08'),
(10, 'Md Salek Chowdhury', 'salek.ctg8@gmail.com', NULL, '$2y$10$L4cU6ST4qlc2brGBGvlDmeKSsThHKTW5fBAkGTeaAj756.v8M4s9q', NULL, '2023-02-24 11:57:14', '2023-02-24 11:57:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
