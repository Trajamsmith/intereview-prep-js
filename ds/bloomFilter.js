/**
 * Bloom filters take a set and can
 * definitely say whether an element
 * is _not_ in the set but can only
 * probabilistically say whether an
 * element _is_ in the set
 */
import md5 from "md5";
import sha256Obj from "hash.js/lib/hash/sha/512";
const sha256 = val =>
  sha256Obj()
    .digest(val)
    .join("");

class BloomFilter {
  constructor() {
    // The first step is to create an array
    // of buckets, like with a hash map
    this.filterSize = 1000;
    this.filter = Array(this.filterSize).fill(0);
  }

  // Truncate hash values to fit in the
  // array, using modular arithmetic
  getBucketAddresses(s) {
    const address1 = parseInt(md5(s), 16) % this.filterSize;
    const address2 = sha256(s) % this.filterSize;
    return [address1, address2];
  }

  // Add a string to the filter
  addToFilter(s) {
    const addresses = this.getBucketAddresses(s);
    this.filter[addresses[0]] = 1;
    this.filter[addresses[1]] = 1;
  }

  // Add all strings in an array
  // to the filter
  addAllValuesToFilter(arr) {
    arr.forEach(el => this.addToFilter(el));
  }

  // Check if a value is in the set
  isInSet(s) {
    const addresses = this.getBucketAddresses(s);
    if (addresses.some(a => !this.filter[a])) {
      return "Not in the set";
    } else {
      return "Maybe in the set";
    }
  }
}

const filter = new BloomFilter();
filter.addAllValuesToFilter([
  "nondescript",
  "loose",
  "houses",
  "burn",
  "punishment",
  "rampant",
  "wound",
  "worry",
  "month"
]);
// Try making the filterSize smaller --
// should eventually "Maybe in the set" for both
console.log(filter.isInSet("burn"));
console.log(filter.isInSet("caduceus"));

/**
 * Example use case for a bloom filter:
 * Chrome needs to know what URLs _might_
 * be malicious. Using a bloom filter, it
 * can check whether a given URL is definitely
 * _not_ malicious, then, if the given URL
 * _might_ indeed be malicious (we get a
 * positive return on the filter), it can
 * opt to do a much more expensive check to
 * see the URL is for sure on a blacklist.
 *
 * The operating term with bloom filters is
 * "might"--if you need to see whether
 * something _might_ fit into a certain
 * category, and you're limited on computational
 * resources (or the set is enormous, like the
 * set of all in-use domains), use a bloom filter.
 */
