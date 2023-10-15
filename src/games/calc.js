import getRandomInt from '../functions/randomInt.js';
import playGame from '../index.js';

const countExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const description = 'What is the result of the expression?';

const getDataOfCalc = () => {
  const operators = ['+', '-', '*'];
  const randomOperand1 = getRandomInt(1, 25);
  const randomOperand2 = getRandomInt(1, 25);
  const randomOperator = operators[getRandomInt(0, 2)];
  const question = `${randomOperand1} ${randomOperator} ${randomOperand2}`;
  const correctAnswer = countExpression(randomOperand1, randomOperand2, randomOperator);

  return [String(question), String(correctAnswer)];
};

const runGame = () => {
  playGame(getDataOfCalc, description);
};

export default runGame;
