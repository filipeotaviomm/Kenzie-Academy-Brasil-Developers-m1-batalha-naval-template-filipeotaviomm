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
    const posicaoEscolhida = shipPositions[i];
    // console.log(posicaoEscolhida);
    initialBoard[posicaoEscolhida[0]][posicaoEscolhida[1]] = "S";
  }
  // console.log(initialBoard);
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (i = 0; i < guesses.length; i++) {
    const posicaoS = guesses[i];
    // console.log(posicaoS);
    if (mountedBoard[posicaoS[0]][posicaoS[1]] == "S") {
      mountedBoard[posicaoS[0]][posicaoS[1]] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (i = 0; i < guessedBoard.length; i++) {
    for (j = 0; j < guessedBoard[i].length; j++) {
      const posicoes = guessedBoard[i][j];
      // console.log(posicoes);
      if (posicoes == "S") {
        return false;
      }
    }
  }
  return true;
}
