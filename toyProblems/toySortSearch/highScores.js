/**
 * Given a list of scores and a highest possible
 * score, sort the list in _less than_ O(n log n) time
 */
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const sortScores = (scores, highScore) => {
  let output = Array(highScore).fill(null);

  // O(n)
  for (let score of scores) {
    // Calculate index for the score
    let index = highScore - score;

    // Handle duplicates by using 2D arrays
    if (output[index]) {
      output[index].push(score);
    } else {
      output[index] = [score];
    }
  }

  // O(<value-of-high-score>) + O(n)
  output = output.filter(el => el !== null).flat();
  return output;
};

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]
