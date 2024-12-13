let playerScoreCount = 0;
let computerScoreCount = 0;
let roundWinner = '';

const btnRock = document.querySelector('#rockBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnRestart = document.querySelector('#restartBtn');

const playerChoiceDisplay = document.querySelector('#playerRoundResult');
const computerChoiceDisplay = document.querySelector('#computerRoundResult');

const playerScoreDisplay = document.querySelector('#playerScoreCount');
const computerScoreDisplay = document.querySelector('#computerScoreCount');

const roundResultMessage = document.querySelector('#roundMessage');
const finalMessageDisplay = document.querySelector('#finalMessage');

btnRock.addEventListener('click', () => handlePlayerChoice('rock'));
btnPaper.addEventListener('click', () => handlePlayerChoice('paper'));
btnScissors.addEventListener('click', () => handlePlayerChoice('scissors'));
btnRestart.addEventListener('click', () => resetGame());

function executeRound(playerChoice, computerChoice) {
  roundWinner = determineWinner(playerChoice, computerChoice);
  updateRoundChoices(playerChoice, computerChoice);
  updateRoundMessage();
  refreshScoreDisplay();
  checkGameOver();
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  return getRandomElement(computerChoices);
}

function handlePlayerChoice(playerSelection) {
  const computerSelection = generateComputerChoice();
  executeRound(playerSelection, computerSelection);
}

function determineWinner(player, computer) {
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (player === computer) {
    return 'draw';
  } else if (winConditions[player] === computer) {
    playerScoreCount++;
    return 'player';
  } else {
    computerScoreCount++;
    return 'computer';
  }
}

function updateRoundChoices(player, computer) {
  const choices = {
    rock: '🪨',
    paper: '📜',
    scissors: '✂️',
  };

  playerChoiceDisplay.textContent = choices[player] || '❓';
  computerChoiceDisplay.textContent = choices[computer] || '❓';
}

function updateRoundMessage() {
  const messages = {
    player: 'Player win!',
    computer: 'Computer win!',
    draw: "It's draw!",
  };

  roundResultMessage.textContent = messages[roundWinner];
}

function refreshScoreDisplay() {
  playerScoreDisplay.textContent = 'Player: ' + playerScoreCount;
  computerScoreDisplay.textContent = 'Computer: ' + computerScoreCount;
}

function checkGameOver() {
  let scoreLimit = 5;
  if (playerScoreCount === scoreLimit || computerScoreCount === scoreLimit) {
    finalMessage();
    disableGameButtons();
    return true;
  }
  return false;
}

function resetGame() {
  playerScoreCount = 0;
  computerScoreCount = 0;
  roundWinner = '';
  playerChoiceDisplay.textContent = '❔';
  computerChoiceDisplay.textContent = '❔';
  roundResultMessage.textContent = 'Let the game begin!';
  finalMessageDisplay.textContent = '';
  finalMessageDisplay.classList.add('hidden');
  enableGameButtons();
  refreshScoreDisplay();
}

function disableGameButtons() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}

function enableGameButtons() {
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
}

function finalMessage() {
  let message;
  if (playerScoreCount > computerScoreCount) {
    message = `Final Scores - Human: ${playerScoreCount}, Computer: ${computerScoreCount} Congratulations! You are the overall winner!`;
  } else if (computerScoreCount > playerScoreCount) {
    message = `Final Scores - Human: ${playerScoreCount}, Computer: ${computerScoreCount} Sorry, the computer win this time.`;
  }
  finalMessageDisplay.textContent = message;
  finalMessageDisplay.classList.remove('hidden');
  console.log(message);
}
