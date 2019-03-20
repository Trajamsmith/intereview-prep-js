/**
 * Not a full min-heap implementation,
 * just enough to do the k select
 */
class MinHeap {
  constructor(harr) {
    // Heap sort on initialization, notice that
    // we can do a trickle down starting from the
    // last element in the heap-array to sort it
    this.harr = harr;
    for (let i = harr.length - 1; i >= 0; i--) {
      this.trickleDown(i);
    }
  }

  getSmallest() {
    const root = this.harr[0];

    // Swap the first and last elements and
    // trickle down to keep the heap sorted
    this.swap(0, this.harr.length - 1);
    this.trickleDown(0);
    this.harr.pop();

    return root;
  }

  getLeft(nodeIndex) {
    return this.harr[2 * nodeIndex + 1];
  }

  getRight(nodeIndex) {
    return this.harr[2 * nodeIndex + 2];
  }

  trickleDown(nodeIndex) {
    const val = this.harr[nodeIndex],
      li = 2 * nodeIndex + 1,
      l = this.getLeft(nodeIndex),
      ri = 2 * nodeIndex + 2,
      r = this.getRight(nodeIndex);

    if (val > l && l < r) {
      this.swap(nodeIndex, li);
      this.trickleDown(li);
    } else if (val > r) {
      this.swap(nodeIndex, ri);
      this.trickleDown(ri);
    } else {
      return;
    }
  }

  swap(i, j) {
    [this.harr[i], this.harr[j]] = [this.harr[j], this.harr[i]];
  }
}

/**
 * K-th Smallest using the heap built above
 */
const kthSmallest = (arr, k) => {
  let smallest = null;
  const mh = new MinHeap(arr);

  while (k > 0) {
    smallest = mh.getSmallest();
    k--;
  }

  return smallest;
};

const ul = [6, 17, 18, 4, 39, 2, 25, 8, 10, 14, 42, 27, 31];

console.log(kthSmallest(ul, 3));
