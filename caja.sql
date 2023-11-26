-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-03-2023 a las 12:57:23
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `caja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`) VALUES
(1, 'arroz', 250),
(2, 'fideo', 300),
(3, 'pan', 50),
(4, 'gaseosa', 100),
(10, 'yerba', 900),
(11, 'fideo_marca_patito', 500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

DROP TABLE IF EXISTS `registros`;
CREATE TABLE IF NOT EXISTS `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iduser` int NOT NULL,
  `idturno` int NOT NULL,
  `producto` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `cantidad` int NOT NULL,
  `precio` int NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `iduser`, `idturno`, `producto`, `cantidad`, `precio`, `time`) VALUES
(19, 2, 6, 'arroz', 3, 750, '13:53:04'),
(18, 2, 6, 'gaseosa', 2, 200, '13:53:04'),
(17, 2, 6, 'yerba', 4, 3600, '13:53:04'),
(16, 2, 6, 'pan', 2, 100, '13:53:04'),
(15, 2, 2, 'arroz', 1, 250, '13:19:32'),
(14, 2, 2, 'fideo', 1, 300, '13:19:32'),
(13, 2, 2, 'yerba', 1, 900, '13:19:32'),
(12, 2, 2, 'gaseosa', 1, 100, '13:19:27'),
(11, 2, 2, 'pan', 1, 50, '13:19:27'),
(20, 1, 7, 'gaseosa', 1, 100, '06:58:37'),
(21, 1, 7, 'fideo', 1, 300, '06:58:37'),
(22, 1, 7, 'arroz', 1, 250, '06:58:37'),
(23, 1, 7, 'arroz', 1, 250, '06:59:14'),
(24, 1, 7, 'fideo', 1, 300, '06:59:14'),
(25, 1, 7, 'pan', 1, 50, '06:59:14'),
(26, 1, 7, 'gaseosa', 1, 100, '06:59:14'),
(27, 2, 8, 'gaseosa', 1, 100, '07:03:21'),
(28, 2, 8, 'yerba', 1, 900, '07:03:21'),
(29, 2, 8, 'fideo', 1, 300, '07:03:25'),
(30, 2, 8, 'pan', 1, 50, '07:03:25'),
(31, 2, 8, 'gaseosa', 1, 100, '07:03:25'),
(32, 1, 9, 'pan', 3, 150, '12:04:05'),
(33, 1, 9, 'fideo', 2, 600, '12:04:05'),
(34, 1, 9, 'arroz', 2, 500, '12:04:05'),
(35, 2, 10, 'arroz', 1, 250, '12:05:15'),
(36, 2, 10, 'fideo', 1, 300, '12:05:15'),
(37, 2, 10, 'fideo', 1, 300, '12:05:17'),
(38, 2, 10, 'pan', 1, 50, '12:05:17'),
(39, 2, 10, 'gaseosa', 1, 100, '12:05:17'),
(40, 2, 10, 'yerba', 1, 900, '12:05:17'),
(41, 2, 10, 'gaseosa', 1, 100, '12:05:18'),
(42, 2, 10, 'pan', 1, 50, '12:05:18'),
(43, 2, 10, 'fideo', 1, 300, '12:05:18'),
(44, 2, 10, 'arroz', 6, 1500, '12:05:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE IF NOT EXISTS `turnos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iduser` int NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `horain` timestamp NOT NULL,
  `horafin` timestamp NOT NULL,
  `total` int NOT NULL,
  `condicion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `iduser`, `name`, `horain`, `horafin`, `total`, `condicion`) VALUES
(3, 2, 'sergio', '2023-03-14 16:23:16', '2023-03-14 16:28:59', 0, 1),
(2, 2, 'sergio', '2023-03-14 16:17:44', '2023-03-14 16:19:43', 1600, 1),
(4, 1, 'gaston', '2023-03-14 16:30:36', '0000-00-00 00:00:00', 0, 0),
(5, 1, 'gaston', '2023-03-14 16:31:07', '0000-00-00 00:00:00', 0, 0),
(6, 2, 'sergio', '2023-03-14 16:37:41', '2023-03-14 16:53:09', 4650, 1),
(7, 1, 'gaston', '2023-03-15 09:57:57', '2023-03-15 10:00:09', 1350, 1),
(8, 2, 'sergio', '2023-03-15 10:03:17', '2023-03-15 10:05:23', 1450, 1),
(9, 1, 'gaston', '2023-03-16 15:02:40', '2023-03-16 15:04:25', 1250, 1),
(10, 2, 'sergio', '2023-03-16 15:05:02', '2023-03-16 15:05:55', 3850, 1),
(11, 2, 'sergio', '2023-03-16 15:06:16', '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `admin`) VALUES
(1, 'gaston', 'e10adc3949ba59abbe56e057f20f883e', 0),
(2, 'sergio', 'e10adc3949ba59abbe56e057f20f883e', 1),
(8, 'goi', 'e10adc3949ba59abbe56e057f20f883e', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
