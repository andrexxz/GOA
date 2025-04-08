// Sample array of student objects
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 64 },
  { name: 'Eve', grade: 95 },
];

// 1. Check if all students have a passing grade (70 or above)
const allPassing = students.every((student) => student.grade >= 70);

// 2. Check if at least one student has a grade below 65
const hasFailing = students.some((student) => student.grade < 65);

// 3. Log the name of each student to the console
students.forEach((student) => {
  console.log(`Student: ${student.name}`);
});

// 4. Create an honorRoll array for students with grades 90 or above
const honorRoll = [];
students.forEach((student) => {
  if (student.grade >= 90) {
    honorRoll.push(student.name);
  }
});
console.log('All Passing:', allPassing);
console.log('Has Failing:', hasFailing);
console.log('Honor Roll:', honorRoll);
