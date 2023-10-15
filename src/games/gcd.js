import playGame from '../index.js';
import getRandomInt from '../functions/randomInt.js';

const findGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } return findGCD(num2 % num1, num1);
};

const getDataOfGCD = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findGCD(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  playGame(getDataOfGCD, description);
};
export default runGame;
