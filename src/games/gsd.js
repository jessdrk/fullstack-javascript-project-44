import getRandomInt from '../functions/randomInt.js';

const findGSD = (a, b) => {
  const maxNumber = Math.max(a, b);
  let GSD;
  let value1 = a;
  let value2 = b;

  for (let i = 0; i <= maxNumber; i += 1) {
    if (value1 === value2) {
      GSD = value1;
      break;
    } else if (value1 > value2) {
      value1 -= value2;
    } else if (value1 < value2) {
      value2 -= value1;
    }
  }

  return GSD;
};

const getDataOfGSD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findGSD(randomNumber1, randomNumber2));

  return [question, correctAnswer, description];
};

export default getDataOfGSD;
