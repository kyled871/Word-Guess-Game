
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw',
]

// finds random word in gameWords array and outputs new word every click
function newGame() {

    var currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();

    var board = [];
    for (var i = 0; i < currentWord.length; i++) {
    board[i] = " _ ";
    }

    document.getElementById("currentWord").innerHTML = board;

}

