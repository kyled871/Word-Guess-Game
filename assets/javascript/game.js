
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
let userLost = false;
let userWon = false;

let wrongLetters = [];
let missedArr = [];
let found = [];


let mainTheme = document.createElement('audio');
mainTheme.src = 'assets/audio/final_fight_selection.mp3'
mainTheme.loop = true;

let punchSound = document.createElement('audio');
punchSound.src = 'assets/audio/punch.mp3'

let loseSound = document.createElement('audio');
loseSound.src = 'assets/audio/lose.mp3'

let oneUpSound = document.createElement('audio');
oneUpSound.src = 'assets/audio/1up.mp3'

let gameOverSound = document.createElement('audio');
gameOverSound.src = 'assets/audio/gameOver.mp3'


// displays current lives and score
let lives = 5;
document.getElementById("lives").innerHTML = lives;
let score = 0;
document.getElementById("score").innerHTML = score;

// press spacebar to start game, supposed to play music



    function startGame() {

        document.getElementById('score').style.animation = 'none';
        
        document.body.onkeydown = function(e){

            e.preventDefault();
            if(e.keyCode == 32 && spacebarPressed === false){

                loseSound.play();

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
        

        userWon = false
        userLost = false;
        mainTheme.play();
        document.getElementById('fightImg').setAttribute('src', 'assets/images/win1.png')

        

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

            setTimeout(function() {
                if (!userWon && !userLost) {
                    document.getElementById('fightImg').setAttribute('src', 'assets/images/win1.png')
                }
            }, 1000)

        // the users guess is converted into uppercase
        guess = event.key.toUpperCase();
        guesskey = event.keyCode
        missedArr = [];

        // the users guess is added on to the board if correct
        for (i = 0; i < currentWord.length; i++) {
            console.log(currentWord)
            console.log(guess)
            console.log(found)
            console.log(userLost)
            console.log(userWon)
    
    

            if (guess === currentWord[i]) {
                
                
                if (guess != found[i]) {
                    found.push(guess);
                    punchSound.play();
                    document.getElementById('fightImg').setAttribute('src', 'assets/images/win2.png')
                }
                
                board[i] = guess;
                document.getElementById("currentWord").innerHTML = board.join(" ");


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
                document.getElementById('fightImg').setAttribute('src', 'assets/images/lose1.png')
                loseSound.play();
                missedArr = [];
                
            }

        }
        
        
        // if the points variable = however long the word is. User gets 1 SCORE point and goes to next round.
        if (board.join("") === currentWord) {

            userWon = true
            score++;
            oneUpSound.play();
            document.getElementById("score").innerHTML = score;
            document.getElementById('fightImg').setAttribute('src', 'assets/images/nextRound.png')
            document.getElementById('nextRoundBanner').style.display = 'block';
            document.getElementById('score').style.animation = 'blink 0.5s linear';
            document.getElementById('score').style.animationIterationCount = '3';

            setTimeout( function() {
                document.getElementById('lives').style.animation = 'none';
                document.getElementById('nextRoundBanner').style.display = 'none';
                document.getElementById('fightImg').setAttribute('src', 'assets/images/win1.png')
                board = [];
                found = [];
                let blanks = ""
                lives = lives + 2;
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
                userWon = false
            }, 2500)
        }



        // gameover - resets page
        if (lives == 0) {
            userLost = true;
            mainTheme.pause()
            gameOverSound.play()
            document.getElementById('gameOverBanner').style.display = "block";
            document.getElementById('fightImg').setAttribute('src', 'assets/images/Loser.png')

            setTimeout( function() {
                document.getElementById('gameOverBanner').style.display = "none";
                resetGame()

            }, 4000)
        }


    }
}


startGame()
