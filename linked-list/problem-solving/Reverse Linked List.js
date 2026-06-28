// Given the head of a singly linked list, reverse the list, and return the reversed list.
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
  let current = head;
  let prev = null;

  while (current !== null) {
    let next = current.next; // save next node
    current.next = prev; // reverse pointer

    // Next iteration state
    prev = current; // move prev
    current = next; // move current
  }
  return prev;
};
