document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    cells.forEach((cell) => {
      cell.addEventListener("click", () => handleCellClick(cell));
    });
  
    function handleCellClick(cell) {
      const index = cell.dataset.index;
      if (gameBoard[index] === "" && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          alert(`Player ${currentPlayer} wins!`);
        } else if (gameBoard.every((value) => value !== "")) {
          alert("It's a draw!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    function checkWinner() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      return winPatterns.some((pattern) => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
      });
    }
  });
  