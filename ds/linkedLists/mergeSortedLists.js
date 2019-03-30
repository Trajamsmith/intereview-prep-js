//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var nl = new ListNode(),
    prehead = nl;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      nl.next = new ListNode(l1.val);
      l1 = l1.next;
      nl = nl.next;
    } else {
      nl.next = new ListNode(l2.val);
      l2 = l2.next;
      nl = nl.next;
    }
  }

  nl.next = l1 || l2;
  return prehead.next;
};

mergeTwoLists(null, null);
