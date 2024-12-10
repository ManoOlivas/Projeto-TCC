document.addEventListener('DOMContentLoaded', () => {
    const quiz1Button = document.getElementById('quiz1');
    const quiz2Link = document.getElementById('quiz2-link');
    const quiz3Link = document.getElementById('quiz3-link');
    const quiz4Link = document.getElementById('quiz4-link');

    // Verifica se o Quiz 1 foi jogado
    const quiz1Played = localStorage.getItem('quiz1Played');
    const quiz2Unlocked = localStorage.getItem('quiz2Unlocked');
    const quiz3Unlocked = localStorage.getItem('quiz3Unlocked');
    const quiz4Unlocked = localStorage.getItem('quiz4Unlocked');

    // Libera o Quiz 2 se desbloqueado
    if (quiz1Played) {
        quiz2Link.classList.remove('disabled'); // Libera o Quiz 2
    }

    // Libera o Quiz 2 se desbloqueado
    if (quiz2Unlocked) {
        quiz2Link.classList.remove('disabled'); // Habilita o Quiz 2
    }

    // Libera o Quiz 3 se desbloqueado
    if (quiz3Unlocked) {
        quiz3Link.classList.remove('disabled'); // Habilita o Quiz 3
    }

    // Libera o Quiz 4 se desbloqueado
    if (quiz4Unlocked) {
        quiz4Link.classList.remove('disabled'); // Habilita o Quiz 4
    }

    // Adiciona um evento de clique para o botão do Quiz 1
    quiz1Button.addEventListener('click', () => {
        // Quando o Quiz 1 for jogado, armazena no localStorage
        localStorage.setItem('quiz1Played', 'true');
        quiz2Link.classList.remove('disabled'); // Libera o Quiz 2
    });
});
