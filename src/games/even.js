import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataOfEven = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question);
  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfEven, description);
};

export default runGame;
