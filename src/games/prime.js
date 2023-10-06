import getRandomInt from '../functions/randomInt.js';

const isPrime = (num) => {
  let result;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
    result = 'yes';
  }

  return result;
};

const getDataOfPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = getRandomInt(100);
  const correctAnswer = isPrime(question);

  return [question, correctAnswer, description];
};

export default getDataOfPrime;
