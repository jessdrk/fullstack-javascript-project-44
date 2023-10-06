import readlineSync from 'readline-sync';
import { getDescriptionEven, getQuestionAndAnswerEven } from './games/even.js';
import { getDescriptionCalc, getQuestionAndAnswerCalc } from './games/calc.js';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let description;
  switch (game) {
    case 'even': {
      description = getDescriptionEven();
      break;
    }
    case 'calc': {
      description = getDescriptionCalc();
      break;
    }
    default: {
      console.log('error');
    }
  }
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    let question;
    let correctAnswer;

    switch (game) {
      case 'even': {
        [question, correctAnswer] = getQuestionAndAnswerEven();
        break;
      }
      case 'calc': {
        [question, correctAnswer] = getQuestionAndAnswerCalc();
        break;
      }
      default: {
        console.log('error');
      }
    }

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      const endOfGame = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(endOfGame);
      return endOfGame;
    }
  }

  const happyEnd = `Congratulations, ${userName}!`;
  console.log(happyEnd);

  return happyEnd;
};

export default playGame;
