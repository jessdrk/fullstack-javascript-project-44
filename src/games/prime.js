import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const numberIsNotZero = () => {
  let number;

  while (number === 0 || number === undefined) {
    number = getRandomInt(100);
  }

  return number;
};

const isPrime = (num) => {
  let result;
  if (num === 1 || num === 2) {
    return 'yes';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
    result = 'yes';
  }

  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataOfPrime = () => {
  const question = numberIsNotZero();
  const correctAnswer = isPrime(question);

  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfPrime, description);
};

export default runGame;
