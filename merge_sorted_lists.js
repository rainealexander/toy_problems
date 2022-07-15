/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
  const head = {};
  Object.assign(head, list1);
  let current = head;
  let node1 = list1.next;
  let node2 = list2;
  while (node1 !== null && node2 !== null) {
    if (node1 !== null && node2 !== null && node1.val <= node2.val) {
      current.next = node1;
      node1 = node1.next;
      console.log('add node 1');
    } else if (node2 !== null && current.val <= node2.val) {
      current.next = node2;
      node2 = node2.next;
      console.log('add node 2');
    } else if (node1 !== null && current.val <= node1.val) {
      current.next = node1;
      node1 = node1.next;
      console.log('add node 1 extra');
    } else if (node2 !== null && current.val <= node2.val) {
      current.next = node2;
      node2 = node2.next;
      console.log('add node 2 extra');
    }
    current = current.next;
    console.log('current: ', current);
    console.log('result: ', head);
  }
  return head;
};
