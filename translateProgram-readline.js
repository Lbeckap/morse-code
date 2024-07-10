const input = require('readline-sync');
const utils = require('./utils.js');

function runProgram() {
  console.log(`\nEnter text to translate to Morse code, or enter 'QUIT' when you're done.`);

  while (true) {
    let phrase = input.question('\nEnter text to translate into Morse Code: ');
    if (phrase.toUpperCase() === 'QUIT') {
      console.log('\nThanks for trying out the translator! Goodbye.\n');
      break;
    } else {
      console.log(utils.translateAll(phrase));
    }
  }
}

runProgram();
