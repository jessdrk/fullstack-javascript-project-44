import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const result = `Hello, ${userName}!`;
  console.log(result);
  return result;
};

export default askName;
