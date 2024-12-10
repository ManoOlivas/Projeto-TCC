<?php
session_start();
include('conexao.php'); // Conexão com o banco de dados

// Verifica se o usuário está logado
if (!isset($_SESSION['user_id']) || !isset($_SESSION['user_name'])) {
    header("Location: index.php"); // Redireciona para o login caso não esteja logado
    exit();
}

$user_name = $_SESSION['user_name']; // Nome do usuário

// Consulta para pegar o ranking dos usuários, ordenado pela pontuação
$query = "SELECT nome, pontuacao FROM users ORDER BY pontuacao DESC LIMIT 10";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial - Sistema</title>
    <link rel="stylesheet" href="pagina1.css">
</head>
<body>
    <!-- Cabeçalho com status do usuário -->
    <header class="login-status">
        <div class="status-indicator">
            <span class="status-circle"></span>
            <span class="status-text">Logado como: <?php echo $user_name; ?></span>
        </div>
    </header>

    <!-- Container de controle com os botões -->
    <div class="controls-container">
        <h1>Bem-vindo, <?php echo $user_name; ?>!</h1>

        <!-- Botões de quiz -->
        <a href="quiz.html">
            <button class="start-quiz">Começar Quiz 1</button>
        </a>
        <a id="quiz2-link" href="quiz2.html" class="disabled">
            <button class="start-quiz button">Começar Quiz 2</button>
        </a>
        <a id="quiz3-link" href="quiz3.html" class="disabled">
            <button class="start-quiz button">Começar Quiz 3</button>
        </a>
        <a id="quiz4-link" href="quiz4.html" class="disabled">
            <button class="start-quiz button">Começar Quiz 4</button>
        </a>

        <!-- Botão de logout -->
        <a href="logout.php">
            <button id="logout-button" class="start-quiz">Sair</button>
        </a>
    </div>

    <!-- Seção de Ranking -->
    <div class="ranking-container">
        <h3>Top 10 Usuários</h3>
        <?php if (mysqli_num_rows($result) > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $position = 1;
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<tr>
                                <td>{$position}</td>
                                <td>{$row['nome']}</td>
                                <td>{$row['pontuacao']}</td>
                              </tr>";
                        $position++;
                    }
                    ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>Não há dados de ranking disponíveis.</p>
        <?php endif; ?>
    </div>

    <script src="pagina1.js" async></script>
</body>
</html>
