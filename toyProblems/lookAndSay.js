/**
 * Generate the "look and say"
 * number sequence, developed
 * by John Conway
 */
const lookAndSay = i => {
  // Split the number strings up
  // into segments, at the points
  // where the digits change
  const parseFullString = string => {
    const output = [];
    let j = 0;
    for (let i = 1; i <= string.length; i++) {
      if (string[i] !== string[i - 1]) {
        output.push(string.slice(j, i));
        j = i;
      }
    }
    return output;
  };

  // Generate the output value based
  // on the "look and say" paradigm,
  // for each individual segment
  const printSection = string => {
    return `${string.length}${string[0]}`;
  };

  // Progressively build the final string up
  // from the initial state until the
  // i-th iteration
  let fullString = "1";
  // (i - 1) so it just returns '1' if i = 1
  while (i - 1 > 0) {
    const parsedString = parseFullString(fullString);
    fullString = parsedString.map(s => printSection(s)).join("");
    i--;
  }

  return fullString;
};

console.log(lookAndSay(3));

/**
 * Fun follow up questions:
 *
 * -- How does the output length scale?
 *        Exponentially, but a relatively low exponent, only 1.3
 *
 * -- What is the max single digit that can exist int he output?
 *        3
 *
 * -- What is the only starting sequence that never grows in length?
 *        '22'
 */
