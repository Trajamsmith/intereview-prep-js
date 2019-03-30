/**
 * Given a board with m by n cells, each cell has an initial
 * state live (1) or dead (0). Each cell interacts with its
 * eight neighbors (horizontal, vertical, diagonal) using the
 * following four rules (taken from the above Wikipedia article):
 *
 * Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 *
 * Write a function to compute the next state (after one update)
 * of the board given its current state. The next state is created
 * by applying the above rules simultaneously to every cell in the
 * current state, where births and deaths occur simultaneously.
 */
const countLiveNeighbors = (board, r, c) => {
  let count = 0;

  const neighbors = [
    board[r - 1] && board[r - 1][c - 1],
    board[r - 1] && board[r - 1][c],
    board[r - 1] && board[r - 1][c + 1],
    board[r][c - 1],
    board[r][c + 1],
    board[r + 1] && board[r + 1][c - 1],
    board[r + 1] && board[r + 1][c],
    board[r + 1] && board[r + 1][c + 1]
  ];

  for (let neighbor of neighbors) {
    if (neighbor === 1) {
      count++;
    }
  }

  return count;
};

const gameOfLife = board => {
  let output = [];

  board.forEach((row, r) => {
    output.push(row);
    row.forEach((cell, c) => {
      const count = countLiveNeighbors(board, r, c);

      if (!board[r][c] && count === 3) {
        output[r][c] = 1;
      } else if (board[r][c]) {
        if (count < 2) {
          output[r][c] = 0;
        } else if (count > 3) {
          output[r][c] = 0;
        } else {
          output[r][c] = 1;
        }
      }
    });
  });

  return output;
};

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//
import { expect } from "chai";

const board1 = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
const output1 = [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]];

// console.log(countLiveNeighbors(board1, 2, 1));
console.log(gameOfLife(board1));
// console.log(expect(gameOfLife(board1)).to.deep.equal(output1));
