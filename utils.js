//Utilities

const morseMap = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": ".-.-.-",
    ".": "----.",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "¿": "..-.-",
    "¡": "--...-",

}

//Work from the smallest component first
function translateChar(char) {
    return morseMap[char.toUpperCase()]; //lookup one char by using the char a the key
}

function translateWord(word) {
  let translatedWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() in morseMap) {
            translatedWord += translateChar(word[i]) + ' ';
          }
    }
  return translatedWord;
}

function translateAll(phrase) {
    let phraseArray = phrase.split(" ");
    let tranlatedPhrase = "";
    for (let i = 0; i < phraseArray.length; i++) {
        tranlatedPhrase += translateWord(phraseArray[i]) + "| ";
    }
    return tranlatedPhrase;
}


module.exports = {
    translateChar: translateChar,
    translateWord: translateWord,
    translateAll: translateAll,
}