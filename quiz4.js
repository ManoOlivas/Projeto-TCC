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
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
    <button 
        onclick="window.location.href='pagina1.php';" 
        class="button"
      >
        Voltar para a Tela Inicial
      </button>
  `
}


const questions = [
  {
    question: "Qual é o conjunto de estrelas?",
    answers: [
      { text: "Galáxia", correct: false },
      { text: "Constelação", correct: true },
      { text: "Planeta", correct: false },
      { text: "Nebulosa", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de flores?",
    answers: [
      { text: "Jardim", correct: true },
      { text: "Árvore", correct: false },
      { text: "Planta", correct: false },
      { text: "Folha", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de animais de estimação?",
    answers: [
      { text: "Casa", correct: false },
      { text: "Família", correct: false },
      { text: "Pets", correct: true },
      { text: "Rebanho", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de livros?",
    answers: [
      { text: "Biblioteca", correct: true },
      { text: "Estante", correct: false },
      { text: "Revista", correct: false },
      { text: "Periódico", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de árvores?",
    answers: [
      { text: "Floresta", correct: true },
      { text: "Horto", correct: false },
      { text: "Planta", correct: false },
      { text: "Semente", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de notas musicais?",
    answers: [
      { text: "Escala", correct: true },
      { text: "Música", correct: false },
      { text: "Acorde", correct: false },
      { text: "Instrumento", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de países?",
    answers: [
      { text: "Nação", correct: false },
      { text: "Continente", correct: true },
      { text: "Cidades", correct: false },
      { text: "Regiões", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de jogadores de futebol?",
    answers: [
      { text: "Time", correct: true },
      { text: "Torcida", correct: false },
      { text: "Partida", correct: false },
      { text: "Campo", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de células?",
    answers: [
      { text: "Tecido", correct: true },
      { text: "Órgão", correct: false },
      { text: "Corpo", correct: false },
      { text: "Sistema", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de pessoas em uma escola?",
    answers: [
      { text: "Alunos", correct: true },
      { text: "Professores", correct: false },
      { text: "Funcionários", correct: false },
      { text: "Direção", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de países na América do Sul?",
    answers: [
      { text: "Continente", correct: false },
      { text: "Subcontinente", correct: true },
      { text: "Região", correct: false },
      { text: "Nação", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de esportes?",
    answers: [
      { text: "Atividades", correct: false },
      { text: "Modalidades", correct: true },
      { text: "Jogos", correct: false },
      { text: "Lazer", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de objetos de cozinha?",
    answers: [
      { text: "Utensílios", correct: true },
      { text: "Móveis", correct: false },
      { text: "Appliances", correct: false },
      { text: "Comida", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de músicas?",
    answers: [
      { text: "Álbum", correct: true },
      { text: "Artistas", correct: false },
      { text: "Estilos", correct: false },
      { text: "Concertos", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de frutos?",
    answers: [
      { text: "Fruteira", correct: false },
      { text: "Pomar", correct: true },
      { text: "Colheita", correct: false },
      { text: "Planta", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de computadores em uma rede?",
    answers: [
      { text: "Rede", correct: true },
      { text: "Sistema", correct: false },
      { text: "Servidor", correct: false },
      { text: "Dispositivos", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de elementos químicos?",
    answers: [
      { text: "Tabela Periódica", correct: true },
      { text: "Mistura", correct: false },
      { text: "Composto", correct: false },
      { text: "Solução", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de ingredientes de uma receita?",
    answers: [
      { text: "Preparo", correct: false },
      { text: "Receita", correct: true },
      { text: "Menu", correct: false },
      { text: "Prato", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de partes de um livro?",
    answers: [
      { text: "Capítulos", correct: true },
      { text: "Páginas", correct: false },
      { text: "Edição", correct: false },
      { text: "Texto", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de planetas do sistema solar?",
    answers: [
      { text: "Sistema", correct: false },
      { text: "Sistema Solar", correct: true },
      { text: "Galáxia", correct: false },
      { text: "Constelação", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de peças de um quebra-cabeça?",
    answers: [
      { text: "Imagem", correct: false },
      { text: "Puzzle", correct: true },
      { text: "Jogos", correct: false },
      { text: "Montagem", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de letras do alfabeto?",
    answers: [
      { text: "Alfabeto", correct: true },
      { text: "Símbolos", correct: false },
      { text: "Palavras", correct: false },
      { text: "Frases", correct: false }
    ]
  },
  {
    question: "Qual é o conjunto de desenhos animados?",
    answers: [
      { text: "Séries", correct: false },
      { text: "Cartoons", correct: true },
      { text: "Filmes", correct: false },
      { text: "Personagens", correct: false }
    ]
  }
];

