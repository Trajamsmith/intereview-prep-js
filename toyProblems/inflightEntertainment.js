/**
 * Basic problem demonstrating how to get sums
 * by storing the inverses of values in a hash;
 * this is a very common pattern
 */
const movies = [
  { name: "Feature 1", length: "120" },
  { name: "Feature 1", length: "150" },
  { name: "Feature 1", length: "90" },
  { name: "Feature 1", length: "105" },
  { name: "Short 1", length: "30" },
  { name: "Short 2", length: "45" },
  { name: "Short 3", length: "60" }
];

const programMovies = (duration, movies) => {
  const inverse = {};

  for (let movie of movies) {
    const remainder = duration - movie.length;

    if (inverse[movie.length]) {
      return [movie, inverse[movie.length]];
    } else {
      inverse[remainder] = movie;
    }
  }

  return "No pairing was found";
};

console.log(programMovies(135, movies));
