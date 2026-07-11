// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let frontSandwichIndex = 0;

  while (frontSandwichIndex < sandwiches.length) {
    let frontSandwich = sandwiches[frontSandwichIndex];
    let previousFrontSandwichIndex = frontSandwichIndex;

    for (let i = 0; i < students.length; i++) {
      const student = students.shift();
      if (student === frontSandwich) {
        frontSandwichIndex++;
        break;
      } else {
        students.push(student);
      }
    }

    if (previousFrontSandwichIndex === frontSandwichIndex) {
      return students.length;
    }
  }

  return 0;
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const counts = [0, 0]; // counts[0] for circle, counts[1] for square

  // Count student preferences
  for (const student of students) {
    counts[student]++;
  }

  // Process sandwiches
  for (const sandwich of sandwiches) {
    if (counts[sandwich] === 0) {
      return counts[0] + counts[1]; // Remaining students unable to eat
    }
    counts[sandwich]--;
  }

  return 0; // All students got their sandwiches
};
