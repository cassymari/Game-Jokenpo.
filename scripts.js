const result = document.querySelector('.result');
const humanScoreSpan = document.getElementById('human-score');
const machineScoreSpan = document.getElementById('machine-score');
const buttons = document.querySelectorAll('.buttons button');

const clickSound = document.getElementById('click-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

let humanScore = 0;
let machineScore = 0;

function playHuman(humanChoice) {
  clickSound.currentTime = 0;
  clickSound.play();

  removeAlexaHighlight();

  const machineChoice = playMachine();
  highlightAlexa(machineChoice);

  if (humanChoice === machineChoice) {
    result.innerText = "Empate 😐";
    result.className = "result draw";
    return;
  }

  if (
    (humanChoice === "rock" && machineChoice === "scirssors") ||
    (humanChoice === "paper" && machineChoice === "rock") ||
    (humanChoice === "scirssors" && machineChoice === "paper")
  ) {
    humanScore++;
    humanScoreSpan.innerText = humanScore;
    result.innerText = "Você venceu! 🎉";
    result.className = "result win";
    winSound.play();
  } else {
    machineScore++;
    machineScoreSpan.innerText = machineScore;
    result.innerText = "Alexa venceu 😈";
    result.className = "result lose";
    loseSound.play();
  }
}

function playMachine() {
  const choices = ["rock", "paper", "scirssors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function highlightAlexa(choice) {
  const button = document.getElementById(choice);
  button.classList.add('alexa-choice');
}

function removeAlexaHighlight() {
  buttons.forEach(btn => btn.classList.remove('alexa-choice'));
}