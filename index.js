const questions = [
  {
    question: "La capital de la France est Paris ?",
    reponse: true,
  },
  {
    question:
      "Le drapeau de la france est composé des couleurs Bleu, blanc et rouge",
    reponse: true,
  },
  {
    question: "Le logo de voiture avec 4 anneaux alignés est Mercedes ?",
    reponse: false,
  },
  {
    question: "Rainbow Six Siege est un jeu sorti en 2015 ?",
    reponse: true,
  },
  {
    question:
      "Le language de programmation qui utilise des balises dans le web est le CSS ?",
    reponse: false,
  },
  {
    question: "Romain est le plus beau ",
    reponse: "true",
  },
  {
    question:
      "La ville de Lyon est dans le département de l'Auvergne Rhône-Alpes ?",
    reponse: true,
  },
];

let questionIndex = Math.floor(Math.random() * questions.length);
let score = 0;
let questionsRestantes = questions.lenght;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");

function afficherQuestion() {
  const question = questions[questionIndex];
  questionElement.textContent = question.question;
}

function verifierReponse() {
  const question = questions[questionIndex];
  if (reponse === question.reponse) {
    score++;
  }
  questionsRestantes--;
  afficherScore();
  if (questionsRestantes === 0) {
    afficherFinJeu();
  } else {
    questionIndex = Math.floor(Math.random() * questions.length);
    afficherQuestion();
  }
}

function afficherScore() {
  scoreElement.textContent = `Score: ${score} / ${questions.lenght}`;
}

function afficherFinJeu() {
  alert(
    `Votre score est de ${score} / ${questions.lenght}. Voulez-vous rejouer ?`
  );
}

afficherQuestion();

document.getElementById("faux").addEventListener("click", () => {
  verifierReponse(true);
});

document.getElementById("vrai").addEventListener("click", () => {
  verifierReponse(false);
});
