/**
 * You are given two non-empty linked lists representing
 * two non-negative integers. The most significant digit
 * comes first and each of their nodes contain a single
 * digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading
 * zero, except the number 0 itself.
 */
const reverseLL = ll => {
  let prev = null,
    curr = ll;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var addTwoNumbers = function(l1, l2) {
  let output = new ListNode(),
    currNode = output,
    l1R = reverseLL(l1),
    l2R = reverseLL(l2),
    carry = 0;

  while (l1R || l2R) {
    let val1 = l1R ? l1R.val : 0;
    let val2 = l2R ? l2R.val : 0;
    let sum = val1 + val2 + carry;

    if (sum >= 10) {
      currNode.val = sum % 10;
      carry = 1;
    } else {
      currNode.val = sum;
      carry = 0;
    }

    // Advance pointers
    currNode.next = new ListNode();
    currNode = currNode.next;
    l1R = l1R === null ? null : l1R.next;
    l2R = l2R === null ? null : l2R.next;
  }

  output = reverseLL(output);

  if (carry) {
    output.val = 1;
  } else {
    output = output.next;
  }

  return output;
};

//
// ─── TEST ───────────────────────────────────────────────────────────────────────
//
import treeify from "treeify";

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(3);

const l2 = new ListNode(1);
l2.next = new ListNode(1);
l2.next.next = new ListNode(7);
l2.next.next.next = new ListNode(2);

// console.log(treeify.asTree(reverseLL(l1), true));

console.log(treeify.asTree(addTwoNumbers(l1, l2), true));
