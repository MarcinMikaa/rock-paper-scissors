function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  return getRandomElement(computerChoices);
}

function getHumanChoice() {
  const humanChoice = prompt('Please enter your choice: rock, paper or scissors').toLowerCase();
  if (['rock', 'paper', 'scissors'].includes(humanChoice)) {
    return humanChoice;
  } else {
    alert('Invalid choice, please try again.');
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log('Draw!');
    } else if (
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice} `);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log('Congratulations! You are the overall winner!');
  } else if (computerScore > humanScore) {
    console.log('Sorry, the computer win this time.');
  }
}

playGame();
