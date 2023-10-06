import getRandomInt from '../functions/randomInt.js';

const countExpression = (number1, number2, operator) => {
  let result;

  switch (operator) {
    case '+': {
      result = number1 + number2;
      break;
    }
    case '-': {
      result = number1 - number2;
      break;
    }
    case '*': {
      result = number1 * number2;
      break;
    }
    default:
      console.log('error');
  }

  return result;
};

export const getDescriptionCalc = () => {
  const result = 'What is the result of the expression?';
  return result;
};

export const getQuestionAndAnswerCalc = () => {
  const operators = ['+', '-', '*'];
  const randomOperand1 = getRandomInt(25);
  const randomOperand2 = getRandomInt(25);
  const randomOperator = operators[getRandomInt(3)];
  const question = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const correctAnswer = String(countExpression(randomOperand1, randomOperand2, randomOperator));

  return [question, correctAnswer];
};