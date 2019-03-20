/**
 * Find the closest points, in Euclidean distances, to the
 * origin from a list of coordinates
 */
// const kClosest = (points, K) => {
//   const calcDist = coords => {
//     return Math.sqrt(Math.pow(coords[0], 2) + Math.pow(coords[1], 2));
//   };

//   // To quickselect, we divide and conquer
//   // until the length of our left side is K
//   const dAndC = arr => {
//     arr;
//     const pivot = arr[0],
//       pivDist = calcDist(pivot),
//       left = [];

//     pivDist;
//     if (arr.length <= K) {
//       return arr;
//     }

//     arr.forEach(coords => {
//       if (calcDist(coords) < pivDist) {
//         left.push(coords);
//       }
//     });

//     return dAndC(left);
//   };

//   return dAndC(points);
// };

var kClosest = function(points, K) {
  quickSelect(points, K, 0, points.length - 1);
  return points.slice(0, K);
};

function quickSelect(points, K, low, high) {
  if (low >= high) {
    return;
  }

  const partPoint = partition(points, low, high);
  points;
  partPoint;

  if (partPoint === K - 1) {
    return;
  }
  if (partPoint < K - 1) {
    quickSelect(points, K, partPoint + 1, high);
  } else {
    quickSelect(points, K, low, partPoint - 1);
  }
}

function partition(points, low, high) {
  const pivot = points[high];
  let i = low;
  let j = low;
  while (i < high) {
    if (getDist(points[i]) < getDist(pivot)) {
      swap(points, i, j);
      j++;
    }
    i++;
  }
  swap(points, high, j);
  return j;
}

function getDist(point) {
  return point[0] * point[0] + point[1] * point[1];
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// console.log(kClosest([[1, 3], [-2, 2]], 1));
// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));

// Expect: [[-2, 2], [1, 3], [2, 3], [4, 4]]
console.log(
  kClosest(
    [
      [5, 8],
      [1, 3],
      [-2, 2],
      [14, 6],
      [-20, 14],
      [44, 2],
      [2, 3],
      [4, 4],
      [7, 7],
      [8, -8],
      [9, 9],
      [10, -10]
    ],
    8
  )
);
