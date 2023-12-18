const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  rl.question(question, (answer) => {
    console.log(`Your name is:  ${answer}`);
    console.log('This important software is now closing');
    exit();
  });
}

ask('Welcome to Holberton School, what is your name?\n');
