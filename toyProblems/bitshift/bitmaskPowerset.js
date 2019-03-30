const combinations = s => {
  const output = [];

  const intToBinString = n => {
    let string = (n >>> 0).toString(2);

    while (string.length < s.length) {
      string = "0" + string;
    }

    return string;
  };

  // Remember the shorthand for Math.pow(n, 2),
  // used below: 2 << n
  for (let i = 1; i < 2 << (s.length - 1); i++) {
    let comb = "";
    const bin = intToBinString(i);

    for (let j = 0; j < s.length; j++) {
      if (bin[j] === "1") {
        comb += s[j];
      }
    }

    output.push(comb);
  }

  return output;
};

console.log(combinations("abcd"));

/**
 * And now with even more bitwise operators!
 */
const powerSetBetter = arr => {
  const output = [];
  for (let i = 1; i < 2 << (arr.length - 1); i++) {
    let comb = "";
    for (let j = 0; j < arr.length; j++) {
      console.log(1 << j);
      if (i & (1 << j)) {
        comb += arr[j];
      }
    }
    output.push(comb);
  }
  return output;
};

console.log(powerSetBetter(["a", "b", "c"]));
