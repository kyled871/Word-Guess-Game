
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw', 'kyle', 'fist',
]

// randomizes the words in the array
let currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();

let guess;
let board = [];
let spacebarPressed = false;

let wrongLetters = [];
let missedArr = [];
let found = [];


var audio;


// displays current lives and score
let lives = 5;
document.getElementById("lives").innerHTML = lives;
let score = 0;
document.getElementById("score").innerHTML = score;

// press spacebar to start game, supposed to play music



    function startGame() {

        document.body.onkeydown = function(e){

            e.preventDefault();
            if(e.keyCode == 32 && spacebarPressed === false){

                start();
                document.getElementById('startBanner').style.display = 'none';
                spacebarPressed = true;
                
            } 


        }
    }
    
    
    
    
    
    
    function resetGame() {
        location.reload();
    }
    
    
    // finds random word in gameWords array and outputs new word every click
    function start() {
        
        let audio = document.createElement('audio');
        audio.src = 'assets/audio/final_fight_selection.mp3'
        audio.loop = true;
        audio.play();
        

    for (let i = 0; i < currentWord.length; i++) {
    board[i] = " _ ";
    }

    document.getElementById("currentWord").innerHTML = board.join("");
    // removed commas in array with .join:
    // https://stackoverflow.com/questions/12835621/removing-commas-from-javascript-array

    checkInput();
    
}


// records input from user. Puts matched letters into currentWord arrat
// puts incorrect letters guessed into Wrong letters array
function checkInput() {

    document.onkeyup = function(event) {

        // the users guess is converted into uppercase
        guess = event.key.toUpperCase();
        guesskey = event.keyCode
        missedArr = [];

        // the users guess is added on to the board if correct
        for (i = 0; i < currentWord.length; i++) {
            console.log(currentWord)
            console.log(board.join(""))

            if (guess === currentWord[i]) {
                board[i] = guess;
                document.getElementById("currentWord").innerHTML = board.join(" ");
                found.push(guess);


            } else if (guesskey < 65 || guesskey > 90 || guess === wrongLetters[i]) {
                return null;
                 
            } else {

                // every guess will return "missed" for the other letters.
                missedArr.push(guess);

            }


            // each guess is checked and inc letters are always added to the missedArr
            // if the missedArr returns the same number as the currentWord then that's a TRUE miss
            if (missedArr.length >= currentWord.length) {

                wrongLetters.push(guess);
                document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
                lives--;
                document.getElementById("lives").innerHTML = lives;
    
                let audio = document.createElement('audio');
                audio.src = 'assets/audio/lose.mp3'
                audio.play();

                missedArr = [];
            }
            
        }
        
        
        // if the points variable = however long the word is. User gets 1 SCORE point and goes to next round.
        if (board.join("") === currentWord) {

            score++;
            document.getElementById("score").innerHTML = score;
            alert("Next round!")

            let audio1 = document.createElement('audio');
            audio1.src = 'assets/audio/1up.mp3'
            audio1.play();

            console.log(audio1)

            found = [];
            board = [];
            let blanks = ""
            lives = 5;
            points = 0;
            document.getElementById("lives").innerHTML = lives;
            currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();
            for (let i = 0; i < currentWord.length; i++) {
                console.log(currentWord)
                board[i] = " _ ";
                }
            blanks = board.join(" ");
            document.getElementById("currentWord").innerHTML = blanks
            wrongLetters = []
            document.getElementById("wrongLetters").innerHTML = wrongLetters
            console.log(currentWord)
            
        }



        // gameover - resets page
        if (lives == 0) {
            alert("Better luck next time!");
            resetGame()
        }
    }
}


startGame()
