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
    $email = $_POST['email'];
    
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Aqui você pode enviar um e-mail de recuperação
        // Exemplo: enviar um link com um token de redefinição de senha
        echo "Um e-mail de recuperação foi enviado para $email.";
    } else {
        echo "Usuário não encontrado.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Recuperar Senha</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Recuperar Senha</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <a href="index.php">Voltar para o Login</a>
    </div>
    <script src="script.js"></script>
</body>
</html>
