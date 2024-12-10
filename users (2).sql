-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/12/2024 às 03:36
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistemas_login`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `pontuacao` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `pontuacao`) VALUES
(1, 'Gabriel', 'gabriel@hotmail.com', '$2y$10$v7oaGDIVK2BpiLvrIPbo../gjCUvtQw5Zu/rntaWp/PJDTi5qbv..', 183),
(2, 'Pedro ', 'stimer.led@gmail.com', '$2y$10$BP5aMvyKieJ6EnvtGte.xOWLiirHSb6sdf7sMJXuAXgysIIlvO1qe', 12),
(3, 'juninhoda06', 'quemleudeu@gmail.com', '$2y$10$bsSX1Jtjw8tLTSyWJhg8TO2l0GhAkbcz/KVLpCF6iUfDKuaW/suPy', 0),
(4, 'Pedro Silva Dos Santos', 'pedro.s.santos10@aluno.senai.br', '$2y$10$3UKcSoPUAik0l5Oh9zfFwuUUWByjJrFo9vpIHZZl0zdvheehn4Ypa', 0),
(5, 'Charles', 'charlestimm03@gmail.com', '$2y$10$mML1uNiUgQPKGyNBzpxYD.JJ.8uVPu3vXl344YylBRXDUpBizJWPe', 66),
(6, 'Matheus', 'm.quintana@aluno.senai.br', '$2y$10$Z2bvro4CrK4.udzqMS3pK.ElEBcoR6mVk.zYEdtpuJqVXmoHPlFh6', 75),
(7, 'FERNANDO PACULSKI SCHITZ', 'fernando.schitz@aluno.senai.br', '$2y$10$pz7mGHVkN2.4VLvaGQ8nUOpsyw33/6aAWhFYObtZZuU0gEG9P/hPy', 81),
(8, 'Thomas', 'thomas.ramos@estudante.senairs.edu.br', '$2y$10$tLh9HN1.5vlHdL17XLkoG./dq1t9L14iEeztwY7e74aPxaJDvHZxW', 0),
(9, 'Aluna Senai', 'alunasenai@gmail.com', '$2y$10$0zNG1YCrE76rdWhy2MJCIOHe6Yc4QsMMA.FTqEQ0IuLsB78VQY60S', 0),
(10, 'Lorenzo Gatao', 'adwdaw@dwa', '$2y$10$a7M9iYcSg.o2cbMPb9PyYezwjV0B8v3H3bXCW4gLmjv7.9OeGBL2K', 0),
(11, 'Rodrigo Lopes --', 'rodrigo.l.silva21@aluno.senai.br', '$2y$10$2AYaZjfg0CmH2JkNXOOOQOat0ma98cqxs/5uiyXWOPzmZC.jIOWa6', 165),
(12, 'Eduardo ', 'ednasc03@gmail.com', '$2y$10$lYzY8e.pqAIH7U9aF7RnQuXVw.FfEv4iAtF1XSlg/SuTcwYQP7R3u', 0),
(16, 'Tiago', 'tiago.s.oliveira@aluno.senai.br', '$2y$10$BOjHnhGNfJVSn8uFU13tDegnnz9ZdnwopUZlK9TrRKvSNuUNI7B8i', 0),
(17, 'Pedro Henrique Haar Peters', 'pedro.peters@aluno.senai.br', '$2y$10$36mi7mwD0nzaB152jreKtOkso63REnBvXIOkosaKG/j4r7mKaZ2Oi', 75),
(18, 'Janaina Santos ', 'janaina@estudante.senairs.edu.br', '$2y$10$FPxXQ3exSygR8mEk3V9.c.fvDsEtg4eMcgVTrYBUKvFXNu5sXMqrK', 0),
(19, 'Charles', 'charles.roos@aluno.senai.br', '$2y$10$C72oEaC0P1GqLx83PNV7kuVPi0SUfgNgxNu.yVkMRX9CH42F48ZUe', 63),
(20, 'Lorenzo', 'lorenzo.i.souza@aluno.senai.br', '$2y$10$qR7czpmjMvD6NbgNfm.qve.T6dP6alFQu8njsrAhS7YFWg7l7hlNC', 24),
(21, 'João Pedro Castro da Silva ', 'joao.p.silva170@aluno.senai.br', '$2y$10$bKyc.S/d2bpZZeV7bp.76.xx.hvz07dsOQo2uuF6ndxRo.LcYkcPy', 75),
(22, 'Luís', 'l.lessa@aluno.senai.br', '$2y$10$PiGb8Yn/ziHrU1RP.UT3rOtxctQ6mjpa0fET5nHHWqpFtdI817Tsu', 81),
(23, 'luciano', 'luciano.h.filho@aluno.senai.br', '$2y$10$e7HtS/AMuezI.ny.DbonXeAQgwa7RmYC/JKAW0LExi1MULUT1S.Bi', 0),
(25, 'Lucas Nunes Ribeiro', 'lucas.n.ribeiro6@aluno.senai.br', '$2y$10$pGHqZlCzgb1NIJT9u6ojb.ZPA6gf8ZBY4vEzoiNAhFhlSNoYH5dB.', 96),
(26, 'Paulo Henrique ', 'paulo.h.santos@aluno.senai.br', '$2y$10$9GrpmPoZtofRQJ7wRK79O.givrFoR1lgvYl97lW7xuCHUXUGyyoCi', 81);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
