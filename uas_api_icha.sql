-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2024 at 10:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uas_api_icha`
--

-- --------------------------------------------------------

--
-- Table structure for table `disney`
--

CREATE TABLE `disney` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) DEFAULT NULL,
  `warna` varchar(225) DEFAULT NULL,
  `jenis_kelamin` varchar(225) DEFAULT NULL,
  `emosi` varchar(225) DEFAULT NULL,
  `deskripsi` varchar(225) DEFAULT NULL,
  `voice_aktor` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disney`
--

INSERT INTO `disney` (`id`, `nama`, `warna`, `jenis_kelamin`, `emosi`, `deskripsi`, `voice_aktor`) VALUES
(1, 'icha', 'putih', 'perempuan', 'shy', 'aku adalah emosi pemalu', 'yuna'),
(2, 'Joy', 'kuning dan biru', 'perempuan', 'senang', 'joy adalah emosi senang', 'amy porhler'),
(3, 'Sadness', 'biru', 'perempuan', 'sedih', 'sadness adalah emosi sedih atau bisa insecure', 'phyllis smith'),
(4, 'Disgust', 'hijau', 'perempuan', 'jijik', 'disgust adalah emosi yang mewakili rasa jijik', 'mindy kaling'),
(5, 'Anger', 'merah', 'laki-laki', 'marah', 'anger adalah emosi yang mewakili rasa marah', 'lewis black'),
(6, 'Fear', 'ungu', 'laki-laki', 'takut', 'fear adalah emosi yang mewakili rasa takut', 'Bill hader'),
(7, 'Anxiety', 'orange', 'laki-laki', 'cemas', 'anxiety emosi yang mewakili rasa cemas', 'Maya hawke'),
(8, 'Envy', 'biru,kehijauan', 'perempuan', 'iri', 'envy emosi yang mewakili rasa iri atau ketidakpuasan', 'Ayo edibiri'),
(9, 'Ennui', 'ungu tua', 'laki-laki', 'bosan', 'ennui emosi yang mewakili rasa bosan dan kurang energi', 'Adele exarchopoulos'),
(10, 'Embarressment', 'pink', 'laki-laki', 'malu', 'ennui emosi yang mewakili rasa malu dan canggung', 'Paul Walter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `disney`
--
ALTER TABLE `disney`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `disney`
--
ALTER TABLE `disney`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
