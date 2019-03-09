import treeify from "treeify";
import OAHashBase from "./OAHashBase";

class LinearProbingHash extends OAHashBase {
  constructor() {
    super();
  }

  // The second hash library we're using
  // really doesn't seem great, so this
  // should be simpler
  collisionStrategy(i, key) {
    let iSHA = this.getIndexSHA(key);
    // If SHA % 20 = 0, this doesn't work
    if (iSHA) {
      return i + iSHA;
    }
    // So add 1
    return i + iSHA + 1;
  }
}

const ht = new LinearProbingHash();
ht.insert("blue", 1);
ht.insert("maybe", 2);
ht.insert("yes", 3);
ht.insert("who", 4);
ht.insert("afterall", 5);
ht.insert("overalls", 6);
ht.insert("thenetherworld", 7);
ht.insert("tomorrow", 8);
ht.insert("wistful", 9);
ht.insert("wanderer", 10);
ht.insert("freedom", 11);
ht.insert("afternoon", 12);
ht.insert("mesrine", "daddyfatsax");
ht.insert("blows", 14);
ht.insert("barley", 15);
ht.insert("fields", 16);
ht.insert("forever", 17);
console.log(treeify.asTree(ht, true));
console.log(ht.retrieve("mesrine"));
