import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const createProgression = () => {
  let firstItem = getRandomInt(1, 20);
  const difference = getRandomInt(1, 8);
  const hiddenItem = getRandomInt(1, 10);
  const array = [];

  for (let i = 0; i <= 10; i += 1) {
    array.push(firstItem);
    firstItem += difference;
  }

  const valueOfHiddenItem = array[hiddenItem];
  array[hiddenItem] = '..';
  const arrToStr = array.join(' ');

  return [arrToStr, valueOfHiddenItem];
};

const getDataOfProgression = () => {
  let [question, correctAnswer] = createProgression();
  question = String(question);
  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const runGame = () => {
  const description = 'What number is missing in the progression?';
  playGame(getDataOfProgression, description);
};

export default runGame;
