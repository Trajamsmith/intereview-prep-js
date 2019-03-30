const vals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

const romanToInt = s => {
  let sum = 0;

  while (s.length) {
    const nextTwo = s.slice(0, 2),
      nextOne = s[0];
    if (nextTwo in vals) {
      sum += vals[nextTwo];
      s = s.slice(2);
    } else {
      sum += vals[nextOne];
      s = s.slice(1);
    }
  }

  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
