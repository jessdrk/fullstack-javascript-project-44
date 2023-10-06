import getRandomInt from '../functions/randomInt.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getDescriptionEven = () => {
  const result = 'Answer "yes" if the number is even, otherwise answer "no".';
  return result;
};

export const getQuestionAndAnswerEven = () => {
  const randomNumber = getRandomInt(100);
  const correctAnswer = isEven(randomNumber);
  return [randomNumber, correctAnswer];
};
