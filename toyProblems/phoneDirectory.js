/**
 * Design a Phone Directory which supports the following operations:
 *
 * get: Provide a number which is not assigned to anyone.
 * check: Check if a number is available or not.
 * release: Recycle or release a number.
 */
var PhoneDirectory = function(maxNumbers) {
  // Array where each phone number is the index
  this.directory = Array(maxNumbers).fill(true);
  // Array of available indices in the directory
  this.availNums = [...Array(maxNumbers).keys()];
};

/**
 * Provide a number which is not assigned to anyone.
 * @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  if (this.availNums.length) {
    const availNum = this.availNums.shift();
    this.directory[availNum] = false;
    return availNum;
  } else {
    return -1;
  }
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return this.directory[number];
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  this.directory[number] = true;
  this.availNums.push(number);
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//
const directory = new PhoneDirectory(10);
console.log(directory.get());
console.log(directory.get());
console.log(directory.get());
console.log(directory.get());
console.log(directory.availNums);
console.log(directory.directory);
console.log(directory.check(5));
directory.release(1);
console.log(directory.availNums);
console.log(directory.directory);
