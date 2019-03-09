import treeify from "treeify";
import OAHashBase from "./OAHashBase";

class LinearProbingHash extends OAHashBase {
  constructor() {
    super();
    this.count = 0;
  }

  collisionStrategy(i) {
    return (i + Math.pow(this.count++, 2)) % this.size;
  }

  insert(key, val, store = this.store) {
    super.insert(key, val, store);
    this.count = 0;
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
// ht.insert("fields", 16);
// ht.insert("forever", 17);
console.log(treeify.asTree(ht, true));
console.log(ht.retrieve("mesrine"));
