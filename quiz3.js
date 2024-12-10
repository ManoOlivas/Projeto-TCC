const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
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
      localStorage.setItem('quiz4Unlocked', 'true'); // Desbloqueia Quiz 4
      break;
    case (performance >= 50):
      message = "Bom";
      break;
    default:
      message = "Pode melhorar :(";
  }

  let quiz4Link = performance >= 70 
    ? `<a href="quiz4.html" class="button">Ir para Quiz 4</a>` 
    : '<span>Você precisa de 70 ou mais para acessar o Quiz 4.</span>';

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <div style="display: flex; gap: 8px; margin-top: 16px;">
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Refazer teste
      </button>
      ${quiz4Link}
      <button 
        onclick="window.location.href='pagina1.php';" 
        class="button"
      >
        Voltar para a Tela Inicial
      </button>
    </div>
  `;
}



const questions = [
  {
    question: "Qual é o antônimo de 'frio'?",
    answers: [
      { text: "Quente", correct: true },
      { text: "Gelado", correct: false },
      { text: "Ameno", correct: false },
      { text: "Nublado", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'grande'?",
    answers: [
      { text: "Pequeno", correct: true },
      { text: "Imenso", correct: false },
      { text: "Alto", correct: false },
      { text: "Largo", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'rápido'?",
    answers: [
      { text: "Devagar", correct: true },
      { text: "Ágil", correct: false },
      { text: "Veloz", correct: false },
      { text: "Célere", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'feliz'?",
    answers: [
      { text: "Triste", correct: true },
      { text: "Contente", correct: false },
      { text: "Alegre", correct: false },
      { text: "Satisfeito", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'claro'?",
    answers: [
      { text: "Escuro", correct: true },
      { text: "Brilhante", correct: false },
      { text: "Luminoso", correct: false },
      { text: "Transparente", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'cheio'?",
    answers: [
      { text: "Vazio", correct: true },
      { text: "Completo", correct: false },
      { text: "Agradável", correct: false },
      { text: "Farto", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'forte'?",
    answers: [
      { text: "Fraco", correct: true },
      { text: "Robusto", correct: false },
      { text: "Vigoroso", correct: false },
      { text: "Poderoso", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'alto'?",
    answers: [
      { text: "Baixo", correct: true },
      { text: "Elevado", correct: false },
      { text: "Grande", correct: false },
      { text: "Largo", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'sim'?",
    answers: [
      { text: "Não", correct: true },
      { text: "Talvez", correct: false },
      { text: "Claro", correct: false },
      { text: "Com certeza", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'doce'?",
    answers: [
      { text: "Amargo", correct: true },
      { text: "Salgado", correct: false },
      { text: "Azedo", correct: false },
      { text: "Frutado", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'tranquilo'?",
    answers: [
      { text: "Agitado", correct: true },
      { text: "Calmo", correct: false },
      { text: "Sereno", correct: false },
      { text: "Pacífico", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'facil'?",
    answers: [
      { text: "Difícil", correct: true },
      { text: "Simples", correct: false },
      { text: "Rápido", correct: false },
      { text: "Prático", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'limpo'?",
    answers: [
      { text: "Sujo", correct: true },
      { text: "Organizado", correct: false },
      { text: "Higienizado", correct: false },
      { text: "Arrumado", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'vivo'?",
    answers: [
      { text: "Morto", correct: true },
      { text: "Ativo", correct: false },
      { text: "Saudável", correct: false },
      { text: "Forte", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'amanhecer'?",
    answers: [
      { text: "Anoitecer", correct: true },
      { text: "Alvorada", correct: false },
      { text: "Crepúsculo", correct: false },
      { text: "Dia", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'calor'?",
    answers: [
      { text: "Frio", correct: true },
      { text: "Temperatura", correct: false },
      { text: "Quente", correct: false },
      { text: "Caloroso", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'sorriso'?",
    answers: [
      { text: "Chorando", correct: true },
      { text: "Felicidade", correct: false },
      { text: "Riso", correct: false },
      { text: "Alegria", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'luz'?",
    answers: [
      { text: "Sombra", correct: true },
      { text: "Claridade", correct: false },
      { text: "Iluminação", correct: false },
      { text: "Brilho", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'fácil'?",
    answers: [
      { text: "Difícil", correct: true },
      { text: "Simples", correct: false },
      { text: "Rápido", correct: false },
      { text: "Prático", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'triste'?",
    answers: [
      { text: "Feliz", correct: true },
      { text: "Contente", correct: false },
      { text: "Satisfeito", correct: false },
      { text: "Alegre", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'são'?",
    answers: [
      { text: "Doente", correct: true },
      { text: "Saudável", correct: false },
      { text: "Forte", correct: false },
      { text: "Normal", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'pouco'?",
    answers: [
      { text: "Muito", correct: true },
      { text: "Menos", correct: false },
      { text: "Algum", correct: false },
      { text: "Pouquíssimo", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'dentro'?",
    answers: [
      { text: "Fora", correct: true },
      { text: "Dentro", correct: false },
      { text: "Interior", correct: false },
      { text: "Oculto", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'humano'?",
    answers: [
      { text: "Desumano", correct: true },
      { text: "Bondoso", correct: false },
      { text: "Gentil", correct: false },
      { text: "Caridoso", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'descer'?",
    answers: [
      { text: "Subir", correct: true },
      { text: "Cair", correct: false },
      { text: "Abaixar", correct: false },
      { text: "Descer", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'simples'?",
    answers: [
      { text: "Complexo", correct: true },
      { text: "Fácil", correct: false },
      { text: "Direto", correct: false },
      { text: "Simples", correct: false }
    ]
  },
  {
    question: "Qual é o antônimo de 'grato'?",
    answers: [
      { text: "Ingrato", correct: true },
      { text: "Agradecido", correct: false },
      { text: "Bondoso", correct: false },
      { text: "Generoso", correct: false }
    ]
  }
];
