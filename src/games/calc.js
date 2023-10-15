import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

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

const description = 'What is the result of the expression?';

const getDataOfCalc = () => {
  const operators = ['+', '-', '*'];
  const randomOperand1 = getRandomInt(1, 25);
  const randomOperand2 = getRandomInt(1, 25);
  const randomOperator = operators[getRandomInt(1, 3)];
  const question = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const correctAnswer = countExpression(randomOperand1, randomOperand2, randomOperator);

  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfCalc, description);
};

export default runGame;
