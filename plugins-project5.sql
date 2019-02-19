-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 19 fév. 2019 à 22:08
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
  `pluginId` varchar(255) NOT NULL,
  `pluginName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `favorites`
--

INSERT INTO `favorites` (`userId`, `pluginId`, `pluginName`) VALUES
(15, 'buddyforms', 'Contact – Registration – Post Form Builder & FrontEnd Editor BuddyForms – Making WordPress Forms A Breeze'),
(15, 'captainform', 'Forms by CaptainForm – Form Builder for WordPress'),
(16, 'captainform', 'Forms by CaptainForm – Form Builder for WordPress'),
(16, 'mailoptin', 'MailOptin – Popups, Email Optin Forms & Newsletters for MailChimp, Aweber etc.'),
(16, 'weglot', 'Translate WP website – Weglot Translate');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `pseudo` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `registration_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `lastname`, `firstname`, `pseudo`, `email`, `password`, `registration_date`) VALUES
(15, 'katell', 'katell', 'katell', 'katell@gmail.com', '$2y$10$TQzkLvrLIxjCvLwS4K.5a.7hvdXLNzKtMvQ41G6RqK/zKyqaTKe1W', '2019-02-19 00:00:00'),
(16, 'kat', 'ka', 'katou', 'katell.fracassi@gmail.com', '$2y$10$4LjSZvexBgM.JdRyuOBDF.oXp7vGXCwGtzCav36h45oMuKo5nM.Ju', '2019-02-19 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
