import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const getHiddenItem = (array, num) => {
  const valueOfHiddenItem = array[num];
  return valueOfHiddenItem;
};

const hideItem = (array, num) => {
  const result = array;
  result[num] = '..';
  const arrToStr = result.join(' ');
  return arrToStr;
};

const getDataOfProgression = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 8);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenItem = getRandomInt(1, 10);
  const correctAnswer = String(getHiddenItem(progression, hiddenItem));
  const question = hideItem(progression, hiddenItem);

  return [question, correctAnswer];
};

const runGame = () => {
  const description = 'What number is missing in the progression?';
  playGame(getDataOfProgression, description);
};

export default runGame;
