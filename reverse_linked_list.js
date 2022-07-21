/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let current = {};
  current.val = head.val;
  current.next = null;
  let temp = {};
  temp.next = {};
  while (head.next !== null) {
    temp.val = head.next.val;
    temp.next = current;
    current = temp;
    head = head.next;
    temp = {};
  }
  return current;
};
