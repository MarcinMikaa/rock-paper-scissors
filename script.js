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

let humanScore = 0;
let ComputerChoice = 0;

