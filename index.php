<?php
session_start();

// Conectar ao banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistemas_login";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão com o banco de dados
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consultar no banco de dados o usuário pelo email
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Verificar se a senha está correta
        $row = $result->fetch_assoc();
        if (password_verify($senha, $row['senha'])) {
            // Se login for bem-sucedido, definir variáveis de sessão
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['nome'];  // Aqui salvamos o nome do usuário na sessão
            header("Location: pagina1.php");
            exit();
        } else {
            echo "Senha incorreta.";
        }
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
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
            </div>
            <button type="submit">Entrar</button>
        </form>
        <a href="registrar.php">Registrar-se</a>
        <a href="recuperar_senha.php">Esqueceu a senha?</a>
    </div>
    <script src="script.js"></script>

</body>
</html>
