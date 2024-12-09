function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  return getRandomElement(computerChoices);
}
