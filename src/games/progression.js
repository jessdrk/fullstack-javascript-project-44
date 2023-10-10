import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const createProgression = () => {
  let firstItem = getRandomInt(20);
  const difference = getRandomInt(8);
  const hiddenItem = getRandomInt(10);
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

const description = 'What number is missing in the progression?';

const getDataOfProgression = () => {
  const [question, correctAnswer] = createProgression();

  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfProgression, description);
};

export default runGame;
