
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw', 'kyle', 'fist',
]

// randomizes the words in the array
let currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();

let guess;
let board = [];
let wrongLetters = [];

// displays current lives and score
let lives = 5;
document.getElementById("lives").innerHTML = lives;
let points = 0;
let score = 0;
document.getElementById("score").innerHTML = score;


function resetGame() {
    location.reload();
}


// finds random word in gameWords array and outputs new word every click
function start() {

    for (let i = 0; i < currentWord.length; i++) {
    board[i] = " _ ";
    }

    document.getElementById("currentWord").innerHTML = board.join("");
    // removed commas in array with .join:
    // https://stackoverflow.com/questions/12835621/removing-commas-from-javascript-array
    
}


// records input from user. Puts matched letters into currentWord arrat
// puts incorrect letters guessed into Wrong letters array
function checkInput() {

    document.onkeyup = function(event) {

        // the users guess is converted into uppercase
        guess = event.key.toUpperCase();
        let found = false;

        // the users guess is added on to the board if correct
        for (i = 0; i < currentWord.length; i++) {
            if (guess === currentWord[i]) {
            board[i] = guess;
            document.getElementById("currentWord").innerHTML = board.join(" ");
            points++
            console.log(points)
            found = true;
            
            }
        }

        // if the points variable = however long the word is. User gets 1 point and goes to next round.
        if (points === currentWord.length) {
            score++;
            document.getElementById("score").innerHTML = score;
            alert("Next round!")
            lives = 5;
            points = 0;
            document.getElementById("lives").innerHTML = lives;
            currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();
            for (let i = 0; i < currentWord.length; i++) {
                board[i] = " _ ";
                }
            document.getElementById("currentWord").innerHTML = board[i];
            console.log(currentWord)
            
        }

        if (found) return;

        // if you guess a wrong letter, lives go down by 1 increment and that letter is shown
        if (wrongLetters.indexOf(guess) < 0) {
            wrongLetters.push(guess);
            document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
            lives--;
            document.getElementById("lives").innerHTML = lives;
        }

        if (found = true) {
        }
        // gameover - resets page
        if (lives == 0) {
            alert("Better luck next time!");
            resetGame()
        }





    }
}
console.log(currentWord)
console.log(currentWord.length)

start()
checkInput()

