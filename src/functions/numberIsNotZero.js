import getRandomInt from './randomInt.js';

const numberIsNotZero = () => {
  let number;

  while (number === 0 || number === undefined) {
    number = getRandomInt(100);
  }

  return number;
};

export default numberIsNotZero;
