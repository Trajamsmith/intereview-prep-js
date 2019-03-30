/**
 * Given a 01 matrix M, find the longest line of
 * consecutive one in the matrix. The line could
 * be horizontal, vertical, diagonal or anti-diagonal.
 */
const getHor = (matrix, r, c) => {
  let length = 0;

  while (matrix[r][c]) {
    length++;
    c++;
  }

  return length;
};

const getVert = (matrix, r, c) => {
  let length = 0;

  while (matrix[r] && matrix[r][c]) {
    length++;
    r++;
  }

  return length;
};

const getDiag = (matrix, r, c) => {
  let length = 0;

  while (matrix[r] && matrix[r][c]) {
    length++;
    r++;
    c++;
  }

  return length;
};

const getAntiDiag = (matrix, r, c) => {
  let length = 0;

  while (matrix[r] && matrix[r][c]) {
    length++;
    r++;
    c--;
  }

  return length;
};

const longestLine = M => {
  let longest = 0;

  M.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (M[r][c] === 1) {
        longest = Math.max(
          longest,
          getHor(M, r, c),
          getVert(M, r, c),
          getDiag(M, r, c),
          getAntiDiag(M, r, c)
        );
      }
    });
  });

  return longest;
};

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//
const matrix1 = [[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 1]];
console.log(longestLine(matrix1));
