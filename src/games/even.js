import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const getDataOfEven = () => {
  const question = String(getRandomInt());
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(getDataOfEven, description);
};

export default runGame;
