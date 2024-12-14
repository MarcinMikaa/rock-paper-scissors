let playerScoreCount = 0;
let computerScoreCount = 0;
let roundWinner = '';

const btnRock = document.querySelector('#rockBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnRestart = document.querySelector('#restartBtn');
const btnRestartModal = document.querySelector('#restartBtnModal');

const playerChoiceDisplay = document.querySelector('#playerRoundResult');
const computerChoiceDisplay = document.querySelector('#computerRoundResult');

const playerScoreDisplay = document.querySelector('#playerScoreCount');
const computerScoreDisplay = document.querySelector('#computerScoreCount');

const roundResultMessage = document.querySelector('#roundMessage');
const finalMessageDisplay = document.querySelector('#finalMessage');
const modal = document.querySelector('#finalMessageModal');
const finalMessageTitleDisplay = document.querySelector('#finalMessageTitle');

btnRock.addEventListener('click', () => handlePlayerChoice('rock'));
btnPaper.addEventListener('click', () => handlePlayerChoice('paper'));
btnScissors.addEventListener('click', () => handlePlayerChoice('scissors'));
btnRestart.addEventListener('click', () => resetGame());
btnRestartModal.addEventListener('click', () => resetGame());

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
    player: 'You win!',
    computer: 'Computer win!',
    draw: "It's a draw!",
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
  finalMessageTitleDisplay.textContent = '';
  modal.classList.add('hidden');
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
  let messageTitle;
  let message;
  if (playerScoreCount > computerScoreCount) {
    messageTitle = `Player: ${playerScoreCount} Computer: ${computerScoreCount}`;
    message = 'You are the overall winner!';
  } else if (computerScoreCount > playerScoreCount) {
    messageTitle = `Player: ${playerScoreCount} Computer: ${computerScoreCount}`;
    message = 'Sorry, the computer win this time.';
  }
  showModal(messageTitle, message);
}

function showModal(messageTitle, message) {
  finalMessageTitleDisplay.textContent = messageTitle;
  finalMessageDisplay.textContent = message;
  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}
