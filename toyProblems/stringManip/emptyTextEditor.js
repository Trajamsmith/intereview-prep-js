/**
 * Given two strings S and T, return if they are equal
 * when both are typed into empty text editors.
 * '#' means a backspace character.
 */
const backspaceCompare = (S, T) => {
  const typeOut = s => {
    let output = "";
    for (let char of s) {
      if (char === "#") {
        output = output.slice(0, output.length - 1);
      } else {
        output += char;
      }
    }
    return output;
  };

  return typeOut(S) === typeOut(T);
};

console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a##", ""));
