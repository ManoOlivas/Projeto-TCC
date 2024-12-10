const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");

let currentQuestionIndex = 0;
let totalCorrect = 0;

// Adicionar eventos aos botões
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

function startGame() {
    $startGameButton.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();
    
    // Verifica se o quiz terminou
    if (questions.length === currentQuestionIndex) {
        return finishGame();
    }

    // Exibe a pergunta
    $questionText.textContent = questions[currentQuestionIndex].question;
    
    // Exibe as respostas
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        $answersContainer.appendChild(newAnswer);

        // Adiciona evento de clique para selecionar resposta
        newAnswer.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    // Limpa as respostas anteriores
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }

    // Esconde o botão de próxima pergunta
    document.body.removeAttribute("class");
    $nextQuestionButton.classList.add("hide");
}

function selectAnswer(event) {
    const answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct");
        totalCorrect++;
    } else {
        document.body.classList.add("incorrect");
    }

    // Desabilita todas as respostas após uma escolha
    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;

        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    // Exibe o botão de próxima pergunta
    $nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;
}

function finishGame() {
    const totalQuestions = questions.length;
    const performance = Math.floor((totalCorrect * 100) / totalQuestions);

    let message = "";

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)";
            break;
        case (performance >= 70):
            message = "Muito bom :)";
            break;
        case (performance >= 50):
            message = "Bom";
            break;
        default:
            message = "Pode melhorar :(";
    }

    let quiz2Link = performance >= 70 
        ? `<a href="quiz2.html" class="button">Ir para Quiz 2</a>` 
        : '<span>Você precisa de 70 ou mais para acessar o Quiz 2.</span>';

    $questionsContainer.innerHTML = `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
            <span>Resultado: ${message}</span>
        </p>
        <div style="display: flex; gap: 8px; margin-top: 16px;">
            <button onclick="window.location.reload()" class="button">
                Refazer teste
            </button>
            ${quiz2Link}
            <button onclick="window.location.href='pagina1.php';" class="button">
                Voltar para a Tela Inicial
            </button>
        </div>
    `;

    // Enviar a pontuação para o servidor
    saveScoreToServer(performance);
}

// Função para enviar a pontuação para o servidor
function saveScoreToServer(pontuacao) {
    fetch('salvar_pontuacao.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pontuacao=${pontuacao}`
    })
    .then(response => response.text())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao salvar a pontuação:', error);
    });
}







const questions = [
  {
    question: "Qual é a primeira letra do alfabeto em português?",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false }
    ]
  },
  {
    question: "Quantas letras há no alfabeto português?",
    answers: [
      { text: "24", correct: false },
      { text: "25", correct: false },
      { text: "26", correct: true },
      { text: "27", correct: false }
    ]
  },
  {
    question: "Qual letra vem logo após o 'D'?",
    answers: [
      { text: "C", correct: false },
      { text: "E", correct: true },
      { text: "F", correct: false },
      { text: "G", correct: false }
    ]
  },
  {
    question: "Qual é a letra que encerra o alfabeto?",
    answers: [
      { text: "X", correct: false },
      { text: "Y", correct: false },
      { text: "Z", correct: true },
      { text: "W", correct: false }
    ]
  },
  {
    question: "Qual dessas letras é uma vogal?",
    answers: [
      { text: "T", correct: false },
      { text: "E", correct: true },
      { text: "N", correct: false },
      { text: "R", correct: false }
    ]
  },
  {
    question: "Complete a frase: 'A letra _____ é uma vogal.'",
    answers: [
      { text: "O", correct: true },
      { text: "S", correct: false },
      { text: "K", correct: false },
      { text: "J", correct: false }
    ]
  },
  {
    question: "Qual vogal completa a palavra 'm__da'?",
    answers: [
      { text: "a", correct: true },
      { text: "e", correct: false },
      { text: "i", correct: false },
      { text: "o", correct: false }
    ]
  },
  {
    question: "Qual dessas letras é uma consoante?",
    answers: [
      { text: "A", correct: false },
      { text: "U", correct: false },
      { text: "M", correct: true },
      { text: "I", correct: false }
    ]
  },
  {
    question: "Qual é o som da letra 'S' quando está no início da palavra?",
    answers: [
      { text: "Ess", correct: true },
      { text: "Tee", correct: false },
      { text: "Bee", correct: false },
      { text: "Dee", correct: false }
    ]
  },
  {
    question: "Qual letra vem antes do 'G'?",
    answers: [
      { text: "F", correct: true },
      { text: "E", correct: false },
      { text: "H", correct: false },
      { text: "I", correct: false }
    ]
  },
  {
    question: "Qual é o plural da letra 'A'?",
    answers: [
      { text: "A's", correct: false },
      { text: "As", correct: true },
      { text: "Ae", correct: false },
      { text: "Aas", correct: false }
    ]
  },
  {
    question: "Qual é a terceira letra do alfabeto?",
    answers: [
      { text: "C", correct: true },
      { text: "B", correct: false },
      { text: "D", correct: false },
      { text: "A", correct: false }
    ]
  },
  {
    question: "Qual letra representa o som 'ch' em português?",
    answers: [
      { text: "C", correct: true },
      { text: "K", correct: false },
      { text: "T", correct: false },
      { text: "D", correct: false }
    ]
  },
  {
    question: "Qual é a vogal que completa a palavra 'm__l'? ",
    answers: [
      { text: "a", correct: false },
      { text: "i", correct: true },
      { text: "u", correct: false },
      { text: "o", correct: false }
    ]
  },
  {
    question: "Qual letra é a última vogal do alfabeto?",
    answers: [
      { text: "U", correct: true },
      { text: "I", correct: false },
      { text: "O", correct: false },
      { text: "A", correct: false }
    ]
  },
  {
    question: "Qual é a letra que vem logo após o 'H'?",
    answers: [
      { text: "I", correct: true },
      { text: "G", correct: false },
      { text: "J", correct: false },
      { text: "K", correct: false }
    ]
  },
  {
    question: "Complete a frase: 'A letra _____ é a primeira vogal.'",
    answers: [
      { text: "A", correct: true },
      { text: "E", correct: false },
      { text: "I", correct: false },
      { text: "O", correct: false }
    ]
  },
  {
    question: "Qual é a letra que representa o som de 'f'?",
    answers: [
      { text: "V", correct: false },
      { text: "F", correct: true },
      { text: "B", correct: false },
      { text: "D", correct: false }
    ]
  },
  {
    question: "Qual dessas palavras começa com uma vogal?",
    answers: [
      { text: "Gato", correct: false },
      { text: "Elefante", correct: true },
      { text: "Cachorro", correct: false },
      { text: "Bola", correct: false }
    ]
  },
  {
    question: "Qual é a letra que vem antes do 'N'?",
    answers: [
      { text: "M", correct: true },
      { text: "L", correct: false },
      { text: "O", correct: false },
      { text: "K", correct: false }
    ]
  },
  {
    question: "Qual é o som da letra 'R' quando está no início de uma palavra?",
    answers: [
      { text: "Rrr", correct: true },
      { text: "Err", correct: false },
      { text: "Arr", correct: false },
      { text: "E", correct: false }
    ]
  },
  {
    question: "Qual é a vogal que falta na palavra 'b__co'?",
    answers: [
      { text: "a", correct: false },
      { text: "i", correct: false },
      { text: "u", correct: true },
      { text: "o", correct: false }
    ]
  },
  {
    question: "Qual letra representa o som de 'z'?",
    answers: [
      { text: "Z", correct: true },
      { text: "S", correct: false },
      { text: "X", correct: false },
      { text: "C", correct: false }
    ]
  },
  {
    question: "Qual é a letra que representa o som de 'k'?",
    answers: [
      { text: "K", correct: true },
      { text: "C", correct: false },
      { text: "Q", correct: false },
      { text: "T", correct: false }
    ]
  },
  {
    question: "Qual é a vogal que pode formar a palavra 'p__co'?",
    answers: [
      { text: "e", correct: true },
      { text: "i", correct: false },
      { text: "o", correct: false },
      { text: "u", correct: false }
    ]
  },
  {
    question: "Qual letra é frequentemente usada para iniciar a palavra 'cachorro'?",
    answers: [
      { text: "C", correct: true },
      { text: "K", correct: false },
      { text: "Q", correct: false },
      { text: "S", correct: false }
    ]
  },
  {
    question: "Qual é a letra que vem logo antes do 'O'?",
    answers: [
      { text: "N", correct: true },
      { text: "M", correct: false },
      { text: "P", correct: false },
      { text: "L", correct: false }
    ]
  },
  {
    question: "Qual letra é usada no som de 'ch' em 'chuva'?",
    answers: [
      { text: "C", correct: true },
      { text: "T", correct: false },
      { text: "D", correct: false },
      { text: "S", correct: false }
    ]
  },
  {
    question: "Qual é o som produzido pela letra 'H'?",
    answers: [
      { text: "H", correct: true },
      { text: "R", correct: false },
      { text: "L", correct: false },
      { text: "N", correct: false }
    ]
  },
  {
    question: "Qual letra pode ser usada para completar 'g__ta'?",
    answers: [
      { text: "a", correct: true },
      { text: "e", correct: false },
      { text: "i", correct: false },
      { text: "o", correct: false }
    ]
  },
  {
    question: "Qual é a letra que aparece duas vezes na palavra 'banana'?",
    answers: [
      { text: "B", correct: false },
      { text: "A", correct: true },
      { text: "N", correct: false },
      { text: "R", correct: false }
    ]
  },
  {
    question: "Qual letra é frequentemente utilizada em palavras estrangeiras?",
    answers: [
      { text: "K", correct: true },
      { text: "X", correct: false },
      { text: "Z", correct: false },
      { text: "Y", correct: false }
    ]
  },
  {
    question: "Qual é a letra que segue o 'P' no alfabeto?",
    answers: [
      { text: "Q", correct: true },
      { text: "R", correct: false },
      { text: "S", correct: false },
      { text: "T", correct: false }
    ]
  }
];



