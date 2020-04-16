
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw', 'kyle', 'fist',
]

// randomizes the words in the array
const currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();

let guess;
let board = [];
let wrongLetters = [];

// displays current lives and score
let lives = 5;
document.getElementById("lives").innerHTML = lives;

points = 0;
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

        guess = event.key.toUpperCase();
        let found = false;

        for (i = 0; i < currentWord.length; i++) {
            if (guess === currentWord[i]) {
            board[i] = guess;
            document.getElementById("currentWord").innerHTML = board.join(" ");
            found = true;
            points++
            }
        }

        if (points === board.length) {
            score++;
            console.log(score)  // cant get to work without having console.log(score)
            document.getElementById("score").innerHTML = score;
        }

        if (found) return;

        if (wrongLetters.indexOf(guess) < 0) {
            wrongLetters.push(guess);
            document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
            lives--;
            document.getElementById("lives").innerHTML = lives;

        }

        if (lives == 0) {
            alert("Better luck next time!");
            resetGame()
        }
    }
}

start()
checkInput()


