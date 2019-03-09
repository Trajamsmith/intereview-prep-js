import treeify from "treeify";
import md5Hex from "md5";
import sha256Obj from "hash.js/lib/hash/sha/512";
const sha256 = val =>
  sha256Obj()
    .digest(val)
    .join("");
const md5 = val => parseInt(md5Hex(val), 16);

class OAHashBase {
  constructor() {
    // Initial size
    this.size = 20;
    this.store = Array(this.size).fill(null);

    // Load factor
    this.entries = 0;
    this.lambda = 0;
  }

  getIndexMD5(val) {
    return md5(val) % this.size;
  }

  getIndexSHA(val) {
    return sha256(val) % this.size;
  }

  calcLambda() {
    return this.entries / this.size;
  }

  insert(key, val, store = this.store) {
    let i = this.getIndexMD5(key);
    let count = 0;

    // If collission, add to
    // next cell
    while (store[i]) {
      i = this.collisionStrategy(i, key);
      if (count > 100) break;
      count++;
    }

    // Add to cell
    store[i] = [key, val];

    // Calculate load factor
    this.entries++;
    this.lambda = this.calcLambda();

    // Resize if lambda > 0.6
    if (this.lambda > 0.6) {
      this.resize();
    }
  }

  retrieve(key) {
    let i = this.getIndexMD5(key);

    // Linear probing
    while (this.store[i][0] !== key) {
      i = this.collisionStrategy(i, key);
    }

    return this.store[i][1];
  }

  resize() {
    // Create the new store
    this.size *= 2;
    const newStore = Array(this.size).fill(null);

    // Reset lambda and entries values
    this.lambda = 0;
    this.entries = 0;

    // Insert all values into the new store
    this.store.forEach(el => {
      if (el) {
        this.insert(el[0], el[1], newStore);
      }
    });

    // Replace the store
    this.store = newStore;
  }
}

export default OAHashBase;

// const ht = new OAHash();
// ht.insert("blue", 1);
// ht.insert("maybe", 2);
// ht.insert("yes", 3);
// ht.insert("who", 4);
// ht.insert("afterall", 5);
// ht.insert("overalls", 6);
// ht.insert("thenetherworld", 7);
// ht.insert("tomorrow", 8);
// ht.insert("wistful", 9);
// ht.insert("wanderer", 10);
// ht.insert("freedom", 11);
// ht.insert("afternoon", 12);
// ht.insert("mesrine", 13);
// ht.insert("blows", 14);
// ht.insert("barley", 15);
// ht.insert("fields", 16);
// ht.insert("forever", 17);
// console.log(treeify.asTree(ht, true));
