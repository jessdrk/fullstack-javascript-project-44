import getRandomInt from '../functions/randomInt.js';

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

const getDataOfProgression = () => {
  const description = 'What number is missing in the progression?';
  const array = createProgression();
  const question = array[0];
  const correctAnswer = String(array[1]);

  return [question, correctAnswer, description];
};

export default getDataOfProgression;
