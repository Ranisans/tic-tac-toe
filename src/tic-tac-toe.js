class TicTacToe {
  constructor() {
    this.board = new Array(3);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(3).fill(null);
    }
    this.currentPlayerSymbol = { true: "x", false: "o" };
    this.isCross = true;
    this.winner;
    this.winPositions = [
      [[[0], [0]], [[0], [1]], [[0], [2]]],
      [[[1], [0]], [[1], [1]], [[1], [2]]],
      [[[2], [0]], [[2], [1]], [[2], [2]]],
      [[[0], [0]], [[1], [0]], [[2], [0]]],
      [[[0], [1]], [[1], [1]], [[2], [1]]],
      [[[0], [2]], [[1], [2]], [[2], [2]]],
      [[[0], [0]], [[1], [1]], [[2], [2]]],
      [[[2], [0]], [[1], [1]], [[0], [2]]]
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol[this.isCross];
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex] === null) {
      this.board[rowIndex][columnIndex] = this.currentPlayerSymbol[
        this.isCross
      ];
      this.isCross = !this.isCross;
    }
  }

  isFinished() {
    if (!this.getWinner() && !this.noMoreTurns()) return false;
    return true;
  }

  getWinner() {
    for (let i = 0; i < this.winPositions.length; i++) {
      const winPosition = this.winPositions[i];
      if (
        this.board[winPosition[0][0]][winPosition[0][1]] ===
          this.board[winPosition[1][0]][winPosition[1][1]] &&
        this.board[winPosition[0][0]][winPosition[0][1]] ===
          this.board[winPosition[2][0]][winPosition[2][1]] &&
        this.board[winPosition[0][0]][winPosition[0][1]] !== null
      )
        return this.board[winPosition[0][0]][winPosition[0][1]];
    }
    return null;
  }

  noMoreTurns() {
    for (let row of this.board) {
      if (row.includes(null)) return false;
    }
    return true;
  }

  isDraw() {
    if (this.getWinner() || !this.noMoreTurns()) return false;
    return true;
  }

  getFieldValue(rowIndex, colIndex) {
    const field = this.board[rowIndex][colIndex];
    return field ? field : null;
  }
}

module.exports = TicTacToe;
