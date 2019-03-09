import treeify from "treeify";
import md5 from "md5";
import sha256Obj from "hash.js/lib/hash/sha/512";
const sha256 = val =>
  sha256Obj()
    .digest(val)
    .join("");
import LinkedList from "./linkedList";

class HashTable {
  constructor() {
    this.storageSize = 100;
    this.storage = Array(this.storageSize).fill(null);
  }

  genIndex(val) {
    return parseInt(md5(val), 16) % this.storageSize;
  }

  insert(key, value) {
    const index = this.genIndex(key);
    if (this.storage[index]) {
      this.storage[index].addToTail(value);
    } else {
      this.storage[index] = new LinkedList(value);
    }
  }
}

const ht = new HashTable();
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
ht.insert("mesrine", 13);
ht.insert("blows", 14);
ht.insert("barley", 15);
ht.insert("fields", 16);
ht.insert("forever", 17);
console.log(treeify.asTree(ht, true));
