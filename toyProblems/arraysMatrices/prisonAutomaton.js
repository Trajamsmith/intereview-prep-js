/**
 * There are 8 prison cells in a row, and each cell is either
 * occupied or vacant.
 *
 * Each day, whether the cell is occupied or vacant changes
 * according to the following rules:
 *
 * If a cell has two adjacent neighbors that are both occupied or
 * both vacant, then the cell becomes occupied.
 * Otherwise, it becomes vacant.
 * (Note that because the prison is a row, the first and the last
 * cells in the row can't have two adjacent neighbors.)
 *
 * We describe the current state of the prison in the following
 * way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.
 *
 * Given the initial state of the prison, return the state of
 * the prison after N days (and N such changes described above.)
 */
const nextDay = cells => {
  const next = cells.slice();

  cells.forEach((cell, i) => {
    if (cells[i - 1] === cells[i + 1]) {
      next[i] = 1;
    } else {
      next[i] = 0;
    }
  });

  return next;
};

const prisonAfterNDays = (cells, N) => {
  while (N > 0) {
    cells = nextDay(cells);
    N--;
  }

  return cells;
};

console.log(nextDay([0, 1, 0, 1, 1, 0, 0, 1]));
console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));

/**
 * The above works but gives us a TLE exceeded error, so my guess
 * is that there's some way bitwise way to do this--and, well,
 * after writing up this solution I still get a TLE but it works;
 * maybe the array manipulation in nextDayBitwise is too slow, and
 * I really shouldn't need it but bitwise operators are a but to work with
 */
const binArrToInt = arr => {
  const s = arr.join("");
  return parseInt(s, 2);
};

const flipBits = (v, digits) => {
  return ~v & (Math.pow(2, digits) - 1);
};

const nextDayBitwise = cells => {
  const int = binArrToInt(cells),
    sr = int << 1,
    sl = int >> 1;

  const arr = flipBits(sr ^ sl, cells.length + 1)
    .toString(2)
    .split("");

  arr.shift();
  arr[0] = 0;
  arr[arr.length - 1] = 0;
  return arr;
};

const prisonAfterNDaysBitwise = (cells, N) => {
  while (N > 0) {
    cells = nextDayBitwise(cells);
    N--;
  }

  return cells;
};

console.log(binArrToInt([0, 1, 0, 1, 1, 0, 0, 1]));
console.log(nextDayBitwise([0, 1, 0, 1, 1, 0, 0, 1]));
console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
