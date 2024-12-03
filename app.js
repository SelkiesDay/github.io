const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const restartButton = document.querySelector(".restart");
const message = document.querySelector(".message");

const ItemO = "🌻";
const ItemX = "🌼";
let currentPlayer = ItemX;



function handleEventClick(event){
    const cell = event.target;
        if (!cell.textContent) { 
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
            if (checkWin(currentPlayer)) {
                message.textContent = `${currentPlayer} wins!`;
                disableBoard();
            } else if (isDraw()) {
                message.textContent = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === ItemX ? ItemO : ItemX;
                message.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    };


cells.forEach(cell =>{
    cell.addEventListener("click", handleEventClick)})


// Winning combinations
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function checkWin(player) {
    return winCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(player);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => cell.textContent);
}

function disableBoard() {
    cells.forEach(cell => {
        cell.removeEventListener("click", handleEventClick);
    });
}

// Restart button functionality
restartButton.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove(ItemX, ItemO);
    });
    currentPlayer = ItemX;
    message.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell =>{
        cell.addEventListener("click", handleEventClick)})
});











// The first to complete a straight line of 3 wins the game !

// - combining css with javascript
// - arrays
// - creating elements and applying different classes/attributes to them
// - append children to a parent element
// - apply event listeners
// - remove event listeners

// - We are going to use the strategy of putting the letters `x` and `o` inside the divs in order to play the game. 
// (you can do it differently, but you will have to adapt your js)
// - In your js, you can start defining all the winning combinations with an array of arrays :