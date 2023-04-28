// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

function allocateShips(shipPositions, initialBoard) {
  for (i = 0; i < shipPositions.length; i++) {
    const chosenPosition = shipPositions[i];
    // console.log(chosenPosition);
    initialBoard[chosenPosition[0]][chosenPosition[1]] = "S";
  }
  // console.log(initialBoard);
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (i = 0; i < guesses.length; i++) {
    const positionS = guesses[i];
    // console.log(positionS);
    if (mountedBoard[positionS[0]][positionS[1]] == "S") {
      mountedBoard[positionS[0]][positionS[1]] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (i = 0; i < guessedBoard.length; i++) {
    for (j = 0; j < guessedBoard[i].length; j++) {
      const positions = guessedBoard[i][j];
      // console.log(positions);
      if (positions == "S") {
        return false;
      }
    }
  }
  return true;
}
