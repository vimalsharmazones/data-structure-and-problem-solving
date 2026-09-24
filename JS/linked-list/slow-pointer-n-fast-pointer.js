// Find middle of linked list

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Detect cycle in linked list

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function findCycleStart(head) {
  let slow = head;
  let fast = head;

  // Step 1: Detect cycle
  // Note for cylic node fast will never be null
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // this thing does not find the cyclic node
      break;
    }
  }

  // No cycle
  if (fast === null || fast.next === null) {
    return null;
  }

  // Step 2: Find cycle start
  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Find nth node from end
function findNthFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move fast n steps
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  // Move both until fast reaches end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
