import playGame from '../index.js';
import getRandomInt from '../functions/randomInt.js';

const findGCD = (a, b) => {
  const maxNumber = Math.max(a, b);
  let GCD;
  let value1 = a;
  let value2 = b;

  for (let i = 0; i <= maxNumber; i += 1) {
    if (value1 === value2) {
      GCD = value1;
      break;
    } else if (value1 > value2) {
      value1 -= value2;
    } else if (value1 < value2) {
      value2 -= value1;
    }
  }

  return GCD;
};

const description = 'Find the greatest common divisor of given numbers.';

const getDataOfGCD = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findGCD(randomNumber1, randomNumber2));

  return [question, correctAnswer];
};

const runGame = () => {
  playGame(getDataOfGCD, description);
};
export default runGame;
