#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const result = `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`;
  console.log(result);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (((randomNumber % 2 === 0) && (answer === 'yes')) || ((randomNumber % 2 !== 0) && (answer === 'no'))) {
      console.log('Correct!');
    } else {
      const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      const endOfGame = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      return endOfGame;
    }
  }
  const happyEnd = `Congratulations, ${userName}!`;
  return happyEnd;
};

console.log(isEven());
