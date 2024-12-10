<?php
$servername = "localhost";
$username = "root";  // Nome de usuário do banco de dados
$password = "";      // Senha do banco de dados
$dbname = "sistemas_login"; // Nome do banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}
?>
