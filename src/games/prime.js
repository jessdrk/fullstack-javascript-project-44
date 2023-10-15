import playGame from '../index.js';
import getRandomInt from '../functions/randomInt.js';

const isPrime = (num) => {
  const number = Number(num);
  if (number === 1 || number === 2) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getDataOfPrime = () => {
  const question = String(getRandomInt());
  const correctAnswer = String(isPrime(question) ? 'yes' : 'no');

  return [question, correctAnswer];
};

const runGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(getDataOfPrime, description);
};

export default runGame;
