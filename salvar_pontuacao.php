<?php
session_start();
include('conexao.php');  // Inclua sua conexão com o banco de dados

// Verifica se o usuário está logado
if (!isset($_SESSION['user_id'])) {
    echo "Usuário não está logado!";
    exit();
}

// Verifica se a pontuação foi enviada via POST
if (isset($_POST['pontuacao'])) {
    $pontuacao = $_POST['pontuacao'];
    $user_id = $_SESSION['user_id'];

    // Atualiza a pontuação no banco de dados
    $sql = "UPDATE users SET pontuacao = pontuacao + ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $pontuacao, $user_id);

    if ($stmt->execute()) {
        echo "Pontuação salva com sucesso!";
    } else {
        echo "Erro ao salvar a pontuação!";
    }
} else {
    echo "Pontuação não recebida!";
}
?>
