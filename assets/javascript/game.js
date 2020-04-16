
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw', 'kyle', 'fist',
]

// randomizes the words in the array
const currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();


let board = [];
let wrongLetters = [];

// displays curent lives and score
let lives = 5;
document.getElementById("lives").innerHTML = lives;

let score = 0;
document.getElementById("score").innerHTML = score;





// finds random word in gameWords array and outputs new word every click
function newGame() {

    for (let i = 0; i < currentWord.length; i++) {
    board[i] = " _ ";
    }

    document.getElementById("currentWord").innerHTML = board.join("");
    console.log(currentWord);

    // removed commas in array with .join:
    // https://stackoverflow.com/questions/12835621/removing-commas-from-javascript-array
    
}


function checkInput() {
    document.onkeyup = function(event) {

        guess = event.key.toUpperCase();
        let found = false;
        for (i = 0; i < currentWord.length; i++) {
            if (guess === currentWord[i]) {
            board[i] = guess;
            document.getElementById("currentWord").innerHTML = board.join(" ");
            found = true;
            }
        }
        if (found) return;

        if (wrongLetters.indexOf(guess) < 0) {
            wrongLetters.push(guess);
            document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
        }
    }
}
checkInput()

