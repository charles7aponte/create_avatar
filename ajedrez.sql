-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2015 a las 17:22:33
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ajedrez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatar_img`
--

CREATE TABLE IF NOT EXISTS `avatar_img` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `datos` text NOT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `avatar_img`
--

INSERT INTO `avatar_img` (`nid`, `datos`) VALUES
(1, '{  datos:{ ''forma'':''n6'',''oreja'':''n7'',''ceja'':''n7'' ,''ojos'':''n7'',''nariz'':''n5'',''boca'':''n9'',''cabello'':''n8'' ,''barba'':''n13'',''expresion'':''n1''  ,''forma_1'':''cargar'',''oreja_1'':''cargar'',''ceja_1'':''cargar'',''ojos_1'':''cargar'' ,''nariz_1'':''cargar'' ,''boca_1'':''cargar'' ,''cabello_1'':''cargar'' ,''barba_1'':''cargar'' ,''expresion_1'':''cargar'' },color:{color_forma_svg_i:null,color_ceja_svg_i:null,color_ojos_svg_i:null,color_cabello_svg_i:0,color_boca_svg_i:null}}'),
(2, '{  datos:{ ''forma'':''n6'',''oreja'':''n7'',''ceja'':''n7'' ,''ojos'':''n7'',''nariz'':''n5'',''boca'':''n9'',''cabello'':''n8'' ,''barba'':''n13'',''expresion'':''n1''  ,''forma_1'':''cargar'',''oreja_1'':''cargar'',''ceja_1'':''cargar'',''ojos_1'':''cargar'' ,''nariz_1'':''cargar'' ,''boca_1'':''cargar'' ,''cabello_1'':''cargar'' ,''barba_1'':''cargar'' ,''expresion_1'':''cargar'' },color:{color_forma_svg_i:null,color_ceja_svg_i:null,color_ojos_svg_i:null,color_cabello_svg_i:0,color_boca_svg_i:null}}'),
(3, '{  datos:{ ''forma'':''n6'',''oreja'':''eliminar'',''ceja'':''eliminar'' ,''ojos'':''n2'',''nariz'':''n5'',''boca'':''n9'',''cabello'':''n8'' ,''barba'':''eliminar'',''expresion'':''n1''  ,''forma_1'':''cargar'',''oreja_1'':''eliminar'',''ceja_1'':''eliminar'',''ojos_1'':''cargar'' ,''nariz_1'':''cargar'' ,''boca_1'':''cargar'' ,''cabello_1'':''cargar'' ,''barba_1'':''eliminar'' ,''expresion_1'':''cargar'' },color:{color_forma_svg_i:1,color_ceja_svg_i:null,color_ojos_svg_i:1,color_cabello_svg_i:0,color_boca_svg_i:0}}'),
(4, '{  datos:{ ''forma'':''n1'',''oreja'':''n1'',''ceja'':''n2'' ,''ojos'':''n1'',''nariz'':''n1'',''boca'':''n1'',''cabello'':''n1'' ,''barba'':''n1'',''expresion'':''n1''  ,''forma_1'':''cargar'',''oreja_1'':''cargar'',''ceja_1'':''cargar'',''ojos_1'':''cargar'' ,''nariz_1'':''cargar'' ,''boca_1'':''cargar'' ,''cabello_1'':''cargar'' ,''barba_1'':''cargar'' ,''expresion_1'':''cargar'' },color:{color_forma_svg_i:3,color_ceja_svg_i:null,color_ojos_svg_i:null,color_cabello_svg_i:null,color_boca_svg_i:null}}'),
(5, '{  datos:{ ''forma'':''n1'',''oreja'':''n1'',''ceja'':''n1'' ,''ojos'':''n1'',''nariz'':''n1'',''boca'':''n1'',''cabello'':''n1'' ,''barba'':''n1'',''expresion'':''n1''  ,''forma_1'':''cargar'',''oreja_1'':''cargar'',''ceja_1'':''cargar'',''ojos_1'':''cargar'' ,''nariz_1'':''cargar'' ,''boca_1'':''cargar'' ,''cabello_1'':''cargar'' ,''barba_1'':''cargar'' ,''expresion_1'':''cargar'' },color:{color_forma_svg_i:null,color_ceja_svg_i:null,color_ojos_svg_i:null,color_cabello_svg_i:null,color_boca_svg_i:null}}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
