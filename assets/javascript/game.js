
// words to guess in game
const gameWords = [
    'drywall', 'monster', 'redbull', 'caffeine', 'punching', 
    'whiteclaw',
]



// finds random word in gameWords array and outputs new word every click
function newGame() {

    const currentWord = gameWords[Math.floor(Math.random() * gameWords.length)].toUpperCase();

    let board = [];
    for (let i = 0; i < currentWord.length; i++) {
    board[i] = " _ ";
    }

    document.getElementById("currentWord").innerHTML = board.join("");

    // removed commas in array with .join:
    // https://stackoverflow.com/questions/12835621/removing-commas-from-javascript-array
    
}

