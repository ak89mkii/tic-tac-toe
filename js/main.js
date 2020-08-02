// /*------Constants------*/

// 1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
const squareColor =  {
    // The numbers assingned: 0 = white, 1 = grey, and 2 = blue.
    null: 0,
    playerX: 1,
    playerO: 2
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




/*------Variables (state)------*/

// Variables might include (board/turn/winner).

// 2.1) Use a board array to represent the squares.
let boardArray = ['sq0', 'sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8']




/*------Cached Element References------*/

// You might choose to put your game status here

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/


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