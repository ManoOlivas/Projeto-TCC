<?php
session_start();
include('conexao.php'); // Inclua sua conexão com o banco de dados

// Verificar se o usuário está logado
if (!isset($_SESSION['user_id'])) {
    header("Location: index.php"); // Redireciona para o login se não estiver logado
    exit();
}

// Consulta para pegar o ranking dos usuários, ordenado pela pontuação
$query = "SELECT nome, pontuacao FROM users ORDER BY pontuacao DESC LIMIT 10";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking - Sistema</title>
    <link rel="stylesheet" href="pagina1.css">
</head>
<body>
    <header class="login-status">
        <div class="status-indicator">
            <span class="status-circle"></span>
            <span class="status-text">Logado como: <?php echo $_SESSION['user_name']; ?></span>
        </div>
    </header>

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
</body>
</html>
