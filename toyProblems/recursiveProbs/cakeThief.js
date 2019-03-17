/**
 * Version of the thief's knapsack problem
 */
const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 }
];

/**
 * Simple recursive solution
 */
const maxDuffelBagValue = capacity => {
  let max = 0;

  const traverse = (weight = 0, value = 0, types = cakeTypes) => {
    if (weight <= capacity) {
      if (value > max) {
        max = value;
      }
    }
    if (weight > capacity || !types.length) {
      return;
    }

    traverse(weight + types[0].weight, value + types[0].value, types);
    traverse(weight, value, types.slice(1));
  };

  traverse();
  return max;
};

console.log(maxDuffelBagValue(20));

// /**
//  * Bottom-up approach
//  */
// const maxDuffelBagValueBottomUp = (cakeTypes, weightCapacity) => {
//   // Store all the max values at different
//   // capacities in an array
//   const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

//   for (
//     let currentCapacity = 0;
//     currentCapacity <= weightCapacity;
//     currentCapacity++
//   ) {
//     // Track the max value for the current capacity
//     let currentMaxValue = 0;

//     // Iterate over cake types
//     for (let j = 0; j < cakeTypes.length; j++) {
//       const cakeType = cakeTypes[j];

//       // If the cake type weighs less than the total
//       // capacity, we can consider it
//       if (cakeType.weight <= currentCapacity) {
//         // Find the max value using this particular cake
//         // type, subtracting it's weight and recursing
//         const maxValueUsingCake =
//           cakeType.value +
//           maxValuesAtCapacities[currentCapacity - cakeType.weight];

//         if (maxValueUsingCake > currentMaxValue) {
//           currentMaxValue = maxValueUsingCake;
//         }
//       }
//     }

//     // Store the max value for the current capacity
//     // in our array
//     maxValuesAtCapacities[currentCapacity] = currentMaxValue;
//   }

//   //
//   console.log(maxValuesAtCapacities);
//   return maxValuesAtCapacities[weightCapacity];
// };

// console.log(maxDuffelBagValueBottomUp(cakeTypes, 7));

/**
 * Bottom-up approach, blind attempt 1
 */
const maxDuffelBagValueBottomUp = (cakeTypes, weightCapacity) => {
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let i = 0; i <= weightCapacity; i++) {
    let maxValueAtCapacity = 0;
    for (let j = 0; j < cakeTypes.length; j++) {
      let currentType = cakeTypes[j];

      if (currentType.weight <= i) {
        const maxValueUsingType =
          currentType.value + maxValuesAtCapacities[i - currentType.weight];

        if (maxValueUsingType > maxValueAtCapacity) {
          maxValueAtCapacity = maxValueUsingType;
        }
      }
    }
    maxValuesAtCapacities[i] = maxValueAtCapacity;
  }

  console.log(maxValuesAtCapacities);
  return maxValuesAtCapacities[weightCapacity];
};

console.log(maxDuffelBagValueBottomUp(cakeTypes, 7));
