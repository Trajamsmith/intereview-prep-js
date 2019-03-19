const string = "abcd";

// This function will get all subsets
// of characters adjacent in the string
const getAdjCombs = s => {
  const combs = new Set();

  const traverse = sub => {
    if (!sub.length) return;

    traverse(sub.slice(0, -1));
    traverse(sub.slice(1));
    combs.add(sub);
  };

  traverse(s);
  return combs;
};

console.log(getAdjCombs(string));

// Let's try this using bit masks
const getAllCombs = s => {
  const combs = new Set();

  console.log(1 << s.length);

  return combs;
};

console.log(getAllCombs(string));
