// /*------Constants------*/

// 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
const squareColor =  {
    // The numbers assingned: 0 = white, 1 = grey, and -1 = blue.
    null: 0,
    playerX: 1,
    playerO: -1
};

// 1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const winCon = {
    winTop: [0, 1, 2],
    winRight: [2, 5, 8],
    winD1: [0, 4, 8],
    winD2: [2, 4, 6],
    winLeft: [0, 3, 6],
    winMidV: [1, 4, 7],
    winMidH: [3, 4, 5],
    winBottom: [6, 7, 8]
};
console.log(winCon.winRight[2]);



/*------Variables (state)------*/

// Variables might include (board/turn/winner).

// 2.1) Use a board array to represent the squares.
// 2.2) Use a turn variable to remember whose turn it is.
// 2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
let boardArray, turn, whoWinner;




/*------Cached Element References------*/

// You might choose to put your game status here.

// 	3.1) Store the 9 elements that represent the squares on the page.
const square0 = document.getElementById('sq0');
const square1 = document.getElementById('sq1');
const square2 = document.getElementById('sq2');
const square3 = document.getElementById('sq3');
const square4 = document.getElementById('sq4');
const square5 = document.getElementById('sq5');
const square6 = document.getElementById('sq6');
const square7 = document.getElementById('sq7');
const square8 = document.getElementById('sq8');
const messageEl = document.getElementById('message');



/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/

// 4.1) Initialize the state variables:
init();

// 4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
// FUNCTION 01: Sets and prepares new game (initialaization stage).
function init() {
    boardArray = [square0, square1, ] ;
    // squareColor.null; // Look later (squareColor.null variable).

    // 4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
    turn = squareColor.playerX; // Look later.
    // 4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
    whoWinner === null; // Look later.



    messageEl.innerText = 'Take turns attemting to get three in a row.';
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