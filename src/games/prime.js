import playGame from '../index.js';
import getRandomInt from '../functions/randomInt.js';

const isPrime = (num) => {
  const number = Number(num);
  let result;
  if (number === 1 || number === 2) {
    return 'yes';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
    result = 'yes';
  }

  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataOfPrime = () => {
  const question = String(getRandomInt());
  const correctAnswer = String(isPrime(question));

  return [question, correctAnswer];
};

const runGame = () => {
  playGame(getDataOfPrime, description);
};

export default runGame;
