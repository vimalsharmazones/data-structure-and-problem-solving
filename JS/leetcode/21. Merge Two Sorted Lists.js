// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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
var mergeTwoLists = function (list1, list2) {
  const dummyHeadForMergedSortedList = new ListNode();
  let currentMergedSortedList = dummyHeadForMergedSortedList;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentMergedSortedList.next = list1;
      list1 = list1.next;
    } else {
      currentMergedSortedList.next = list2;
      list2 = list2.next;
    }

    currentMergedSortedList = currentMergedSortedList.next;
  }

  currentMergedSortedList.next = list1 || list2;

  return dummyHeadForMergedSortedList.next;
};
