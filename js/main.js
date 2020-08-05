// /*------Constants------*/

// 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
const squareColor =  {
    // The numbers assingned: 0 = white, 1 = bule, and -1 = orange.
    'null': 'white',
    '1': 'blue',
    '-1': 'orange'
};

// 1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const winCon = [
    [0, 1, 2],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(winCon);



/*------Variables (state)------*/

// Variables might include (board/turn/winner).

// 2.1) Use a board array to represent the squares.
// 2.2) Use a turn variable to remember whose turn it is.
// 2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
let boardArray, turn, whoWinner;
let turnCount = 1;
let isWinner = false;




/*------Cached Element References------*/

// You might choose to put your game status here.

// 	3.1) Store the 9 elements that represent the squares on the page.

const allSquares = document.querySelectorAll('div');
const message = document.querySelector('h1');

/*----- event listeners -----*/
document.querySelector('section').addEventListener('click', theClick);
document.querySelector('button').addEventListener('click', init);


/*------Functions------*/

// 4.1) Initialize the state variables:
init();

function theClick(evt) {
    let squareIdx = (evt.target.id.replace('sq', ''));
        if (boardArray[squareIdx] || whoWinner) return;
        boardArray[squareIdx] = turn;
        turn *= -1;
        whoWinner = getWinner();
        render();
        // console.log(onClick());
}


// 4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
// FUNCTION 01: Sets and prepares new game (initialaization stage).
function init() {
    boardArray = [null, null, null, null, null, null, null, null, null];
    
    // 4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
    turn = 1; // squareColor.playerX; // Look later.
    whoWinner === null; // Look later.
    message.innerText = 'Take turns attemting to get three in a row.';
    render();
}
// 4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
function getWinner() {
    for (let i = 0; i < winCon.length; i++) {
        if (Math.abs(boardArray[winCon[i][0]] +boardArray[winCon[i][1]] +boardArray[winCon[i][2]]) === 3) return boardArray[winCon[i][0]];
    }
 if (boardArray.includes(null)) return null;
 return 'T';
}

// 4.2) Render those state variables to the page:
// FUNCTION 02:
// 		4.2.1) Render the board:
// 4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
// 				4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).
// 		4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
//     4.3) Wait for the user to click a square.

function render() {
    boardArray.forEach(function(sq, squareIdx) {
        allSquares[squareIdx].style.background = squareColor[sq];
    });
    if (whoWinner === 'T') {
        message.innerHTML = 'Yikes, another stalemate!';
    } else if (whoWinner) {
        message.innerHTML = `Congrats ${squareColor[whoWinner].toUpperCase()}!`;
    } else {
        message.innerHTML = `${squareColor[whoWinner].toUpperCase()}'s Turn`;
    }
 }

 // Set turn to 10 to render no winner.




/*------Guidance------*/

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is




// OTHER CODE:
    
// winTop: [0, 1, 2],
// winRight: [2, 5, 8],
// winD1: [0, 4, 8],
// winD2: [2, 4, 6],
// winLeft: [0, 3, 6],
// winMidV: [1, 4, 7],
// winMidH: [3, 4, 5],
// winBottom: [6, 7, 8]

// function render(squareIdx) {
//     if (isWinner === false) {
//         setLetter =  document.getElementById(`sq${squareIdx}`);
//         board[squareIdx] = turn;
//     }
//  }

// const square0 = document.getElementById('sq0');
// const square1 = document.getElementById('sq1');
// const square2 = document.getElementById('sq2');
// const square3 = document.getElementById('sq3');
// const square4 = document.getElementById('sq4');
// const square5 = document.getElementById('sq5');
// const square6 = document.getElementById('sq6');
// const square7 = document.getElementById('sq7');
// const square8 = document.getElementById('sq8');

// const allSquares = document.querySelectorAll('theSquares');

// Solution: const squares + document.quertySelectorAll('div');
// const messageEl = document.getElementById('message');
// const resetB = document.getElementById('reset');


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
// allSquares.addEventListener('click', theClick);
// document.getElementById('sq0').addEventListener('click', theClick);
// resetB.addEventListener('click', init);