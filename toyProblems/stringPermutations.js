const genPerms = str => {
  // Using a Set object lets us
  // deal with cases where letters
  // are repeated (without having
  // to check if we've already seen
  // that permutation)
  const output = new Set();
  const arr = str.split("");

  const traverse = (arr, str) => {
    if (arr.length === 0) {
      output.add(str);
      return;
    }

    arr.forEach(char => {
      // We have to copy the array or splicing
      // will just shring the array progressively
      const copy = arr.slice(0);
      copy.splice(arr.indexOf(char), 1);

      // Create a tree from each character to
      // every other character in the array
      traverse(copy, str + char);
    });
  };

  traverse(arr, "");
  return output;
};

console.log(genPerms("cats"));
