import getRandomInt from '../functions/randomInt.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getDataOfEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomInt(100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer, description];
};

export default getDataOfEven;
