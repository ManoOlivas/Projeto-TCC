<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistemas_login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT); // Hash da senha

    $sql = "INSERT INTO users (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registro bem-sucedido!";
        header("Location: index.php"); // Redireciona para a tela de login
        exit();
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Registrar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Registrar-se</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
            </div>
            <button type="submit">Registrar</button>
        </form>
        <a href="index.php">Voltar para o Login</a>
        <a href="recuperar_senha.php">Esqueceu a senha?</a>
    </div>
    <script src="script.js"></script>
</body>
</html>
