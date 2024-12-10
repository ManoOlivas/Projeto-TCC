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
      localStorage.setItem('quiz3Unlocked', 'true'); // Desbloqueia Quiz 3
      break;
    case (performance >= 50):
      message = "Bom";
      break;
    default:
      message = "Pode melhorar :(";
  }

  let quiz3Link = performance >= 70 
    ? `<a href="quiz3.html" class="button">Ir para Quiz 3</a>` 
    : '<span>Você precisa de 70 ou mais para acessar o Quiz 3.</span>';

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
      ${quiz3Link}
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
    question: "Qual é o plural de 'gato'?",
    answers: [
      { text: "gatos", correct: true },
      { text: "gato", correct: false },
      { text: "gatas", correct: false },
      { text: "gatinhos", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'pato'?",
    answers: [
      { text: "patos", correct: true },
      { text: "patas", correct: false },
      { text: "pato", correct: false },
      { text: "patingas", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'mesa'?",
    answers: [
      { text: "mesas", correct: true },
      { text: "mesa", correct: false },
      { text: "mesas", correct: false },
      { text: "meso", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'cachorro'?",
    answers: [
      { text: "cachorros", correct: true },
      { text: "cachorras", correct: false },
      { text: "cachorrinhos", correct: false },
      { text: "cachorrões", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'flor'?",
    answers: [
      { text: "flores", correct: true },
      { text: "flor", correct: false },
      { text: "flors", correct: false },
      { text: "florzinhas", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'carro'?",
    answers: [
      { text: "carros", correct: true },
      { text: "carro", correct: false },
      { text: "carrosinho", correct: false },
      { text: "carrinhos", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'livro'?",
    answers: [
      { text: "livros", correct: true },
      { text: "livro", correct: false },
      { text: "livrinhos", correct: false },
      { text: "livras", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'casa'?",
    answers: [
      { text: "casas", correct: true },
      { text: "casa", correct: false },
      { text: "casazinhas", correct: false },
      { text: "casinhas", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'menino'?",
    answers: [
      { text: "meninos", correct: true },
      { text: "menino", correct: false },
      { text: "meninas", correct: false },
      { text: "meninões", correct: false }
    ]
  },
  {
    question: "Qual é o plural de 'carinho'?",
    answers: [
      { text: "carinhos", correct: true },
      { text: "carinhoso", correct: false },
      { text: "carinhosinhos", correct: false },
      { text: "carinhões", correct: false }
    ]
  }
];


