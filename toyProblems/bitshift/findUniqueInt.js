/**
 * Given the array of IDs, which contains many duplicate
 * integers and one unique integer, find the unique integer.
 */
const findUnique = arr => {
  const seen = {};

  for (let el of arr) {
    if (seen[el]) {
      delete seen[el];
    } else {
      seen[el] = true;
    }
  }

  return Object.keys(seen);
};

const arr = [1, 4, 5, 6, 2, 6, 5, 4, 1];
console.log(findUnique(arr));

/**
 * Way more clever bitwise solution...
 */
function findUniqueDeliveryId(deliveryIds) {
  var uniqueDeliveryId = 0;

  // We use the XOR operator, which will
  // cancel itself out if the same number
  // has already been seen before
  deliveryIds.forEach(deliveryId => {
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

console.log(findUniqueDeliveryId(arr));
