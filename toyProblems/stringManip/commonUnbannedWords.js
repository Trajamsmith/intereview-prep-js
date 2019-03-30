/**
 * Given a paragraph and a list of banned words, return the
 * most frequent word that is not in the list of banned words.
 * It is guaranteed there is at least one word that isn't
 * banned, and that the answer is unique.
 *
 * Words in the list of banned words are given in lowercase,
 * and free of punctuation.  Words in the paragraph are not
 * case sensitive.  The answer is in lowercase.
 */
var mostCommonWord = (paragraph, banned) => {
  const count = { "": 0 };
  let mostCommon = "";

  // Format the paragraph and split into words
  paragraph = paragraph.replace(/[^a-zA-Z ]/g, " ").toLowerCase();
  let words = paragraph.split(" ");
  words = words.filter(word => word !== "");

  for (let word of words) {
    if (!banned.includes(word)) {
      if (word in count) {
        count[word]++;
      } else {
        count[word] = 1;
      }
    }

    if (count[word] > count[mostCommon]) {
      mostCommon = word;
    }
  }

  return mostCommon;
};

const paragraph1 = "a, a, a, a, b,b,b,c, c",
  bannedWords1 = ["a"];
console.log(mostCommonWord(paragraph1, bannedWords1));
