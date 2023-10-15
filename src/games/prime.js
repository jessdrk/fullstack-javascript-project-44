import playGame from '../index.js';
import getRandomInt from '../functions/randomInt.js';

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
  const question = getRandomInt();
  const correctAnswer = isPrime(question);

  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfPrime, description);
};

export default runGame;
