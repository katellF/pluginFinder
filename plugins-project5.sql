-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  lun. 25 fév. 2019 à 19:16
-- Version du serveur :  5.7.23-23-log
-- Version de PHP :  7.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `plugins-project5`
--

-- --------------------------------------------------------

--
-- Structure de la table `favorites`
--

CREATE TABLE `favorites` (
  `userId` int(11) NOT NULL,
  `pluginId` varchar(100) NOT NULL,
  `pluginName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `favorites`
--

INSERT INTO `favorites` (`userId`, `pluginId`, `pluginName`) VALUES
(38, 'captainform', 'Forms by CaptainForm – Form Builder for WordPress');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `registration_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `lastname`, `firstname`, `pseudo`, `email`, `password`, `registration_date`) VALUES
(38, 'katell', 'katell', 'katell', 'katell.fracassi@gmail.com', '$2y$10$9kZ0BT1WkfhWQJiepDiFWOgHSLOgMfZhmYNDuzO80aMPzLr5b2Kt.', '2019-02-24 00:00:00'),
(39, 'a', 'a', 'aaa', 'z.aa@a.fr', '$2y$10$P./Rx8qRRUp9w76pLj.tjeNebz/1ekdiDPdruATWmIbNpQexesBhy', '2019-02-24 00:00:00'),
(40, 'a', 'a', 'azerty', 'a.a@a.a', '$2y$10$cWZR.pBVzA05UhjSGbcHeOwTqrrxUK3TTcPM0XLXwxCgoCg.YBQx6', '2019-02-24 00:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`userId`,`pluginId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
