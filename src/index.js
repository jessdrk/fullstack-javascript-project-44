import readlineSync from 'readline-sync';
import getDataOfEven from './games/even.js';
import getDataOfCalc from './games/calc.js';
import getDataOfGCD from './games/gcd.js';
import getDataOfProgression from './games/progression.js';
import getDataOfPrime from './games/prime.js';

const switchGames = (game) => {
  let array;
  if (game === 'even') {
    array = getDataOfEven();
  } else if (game === 'calc') {
    array = getDataOfCalc();
  } else if (game === 'gcd') {
    array = getDataOfGCD();
  } else if (game === 'progression') {
    array = getDataOfProgression();
  } else if (game === 'prime') {
    array = getDataOfPrime();
  }

  return array;
};

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log((switchGames(game)[2]));
  for (let i = 0; i < 3; i += 1) {
    const array = switchGames(game);
    const question = array[0];
    const correctAnswer = array[1];
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
