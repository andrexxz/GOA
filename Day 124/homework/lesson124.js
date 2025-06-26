/*Task 1: Extracting and Formatting User Emails
You are given an array of user objects, where each object has a name (string) and an email (string) property. Use the map() method to create a new array called formattedEmails. Each element in formattedEmails should be the user's email enclosed in angle brackets (e.g., user@example.com).
-
Task 2: Filtering Even Numbers and Squaring
You have an array of numbers. First, use the filter() method to create a new array containing only the even numbers from the original array. Then, use the map() method on the filtered array to create a new array called squaredEvens where each element is the square of the corresponding even number.
-
Task 3: Calculating the Total Value of Items
You are given an array of item objects, where each object has a name (string), a price (number), and a quantity (number) property. Use the reduce() method to calculate the total value of all items (price multiplied by quantity for each item, then summed up). Store the total value in a variable called totalValue.
-
Task 4: Building a Sentence in Reverse
You have an array of words. Use the reduceRight() method to build a single string that represents a sentence formed by joining the words in reverse order, with a space between each word and a period at the end.
------
Big Task.
Task 5:
JavaScript Student Performance Analysis - The Grand Task!
Task:


You are a data analyst for a school and have been provided with an array of student objects. Each student object contains the following information:

 
id: (number) A unique identifier for the student.

 
name: (string) The name of the student.

 
grades: (object) An object where keys are subject names (e.g., "Math", "Science", "History") and values are arrays of numerical scores for that subject.

 
attendance: (array of booleans) An array representing the student's attendance record (true for present, false for absent).

 
extracurricular: (array of strings) An array of extracurricular activities the student is involved in.

Your mission is to perform a comprehensive analysis of this student data using a variety of JavaScript array methods to gain insights into their performance and engagement.
Your Tasks:


forEach() (Outer Loop): Iterate through each student in the studentData array and log a personalized greeting to the console in the format: "Hello, [student's name]!".

map() (Level 1): Create a new array called studentNames containing only the names of all the students.

map() (Level 2 & Nested reduce()): Create a new array called studentAverages. Each element in this array should be an object containing the student's name and their overall average grade across all subjects. Calculate the average for each student by iterating through their grades object and averaging all the scores.

filter() (Level 1): Create a new array called highPerformingStudents containing only the students whose overall average grade (calculated in Task 3) is 85 or above.

filter() (Level 2 & Nested some()): Create a new array called strugglingStudents. This array should contain students who have at least one subject where all their scores are below 70.

reduce() (Level 1): Calculate the total number of extracurricular activities across all students.
reduce() (Level 2 & Nested reduce()): Determine the subject with the highest average score across all students. This will require iterating through all students and their grades, calculating average scores per subject, and then finding the maximum of these averages. The final result should be a string representing the subject name.

reduceRight(): Create a string containing the names of all students who are part of the "Debate Team", listed in reverse order of their appearance in the original studentData array, separated by " and ".

every(): Check if all students have attended at least 50% of their classes (based on their attendance array). Store the result (a boolean) in a variable called allHaveGoodAttendance.

some(): Check if there is at least one student who is not involved in any extracurricular activities. Store the result (a boolean) in a variable called hasInactiveStudent.

forEach() (Level 2 & Nested forEach()): Iterate through each student. For each student, iterate through their grades object. If a student has a score of 100 in any subject, log a congratulatory message to the console in the format: "Congratulations, [student's name], for achieving a perfect score in [subject]!". */
// Task 1: Extracting and Formatting User Emails
const users = [
    { name: "Alice", email: "#######@gmail.com" },
    { name: "Bob", email: "#######@yahoo.com" },
    { name: "Charlie", email: "#######@hotmail.com" }
];
const formattedEmails = users.map(user => `<${user.email}>`);
console.log(formattedEmails); // ["<#######@gmail.com>", "<#######@yahoo.com>", "<#######@hotmail.com>"]
// Task 2: Filtering Even Numbers and Squaring
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredEvens = evenNumbers.map(num => num * num);
console.log(squaredEvens); // [4, 16, 36, 64, 100]
// Task 3: Calculating the Total Value of Items 
const items = [
    { name: "Book", price: 10, quantity: 2 },
    { name: "Pen", price: 2, quantity: 5 },
    { name: "Notebook", price: 5, quantity: 3 }
];  
const totalValue = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(totalValue); // 45
// Task 4: Building a Sentence in Reverse
const words = ["JavaScript", "is", "fun"];
const reversedSentence = words.reduceRight((acc, word) => acc + " " + word, "").trim() + ".";
console.log(reversedSentence); // "fun is JavaScript."
// Task 5: JavaScript Student Performance Analysis
const studentData = [
    {
        id: 1,
        name: "Alice",
        grades: { Math: [90, 85, 88], Science: [92, 95], History: [80, 78] },
        attendance: [true, true, false, true],
        extracurricular: ["Debate Team", "Chess Club"]
    },
    {
        id: 2,
        name: "Bob",
        grades: { Math: [70, 75], Science: [80, 82], History: [60, 65] },
        attendance: [true, false, true, true],
        extracurricular: []
    },
    {
        id: 3,
        name: "Charlie",
        grades: { Math: [100], Science: [95], History: [90] },
        attendance: [true, true, true, true],
        extracurricular: ["Debate Team"]
    }
];
// Task 1: Greeting Each Student
studentData.forEach(student => {
    console.log(`Hello, ${student.name}!`);
});
// Task 2: Extracting Student Names
const studentNames = studentData.map(student => student.name);
console.log(studentNames); // ["Alice", "Bob", "Charlie"]
// Task 3: Calculating Student Averages 
const studentAverages = studentData.map(student => {
    const grades = student.grades;
    let totalScore = 0;
    let totalSubjects = 0;
    for (const subject in grades) {
        const subjectScores = grades[subject];
        totalScore += subjectScores.reduce((acc, score) => acc + score, 0);
        totalSubjects += subjectScores.length;
    }
    return { name: student.name, average: totalScore / totalSubjects };
});
console.log(studentAverages); // [{ name: "Alice", average: 86.33 }, { name: "Bob", average: 70 }, { name: "Charlie", average: 95 }]
// Task 4: Filtering High-Performing Students
const highPerformingStudents = studentAverages.filter(student => student.average >= 85);
console.log(highPerformingStudents); // [{ name: "Alice", average: 86.33 }, { name: "Charlie", average: 95 }]
// Task 5: Filtering Struggling Students
const strugglingStudents = studentData.filter(student => {
    return Object.values(student.grades).some(subjectScores => subjectScores.every(score => score < 70));
}); 
console.log(strugglingStudents); // [{ id: 2, name: "Bob", ... }]
// Task 6: Calculating Total Extracurricular Activities
const totalExtracurriculars = studentData.reduce((acc, student) => acc + student.extracurricular.length, 0);
console.log(totalExtracurriculars); // 3
// Task 7: Finding Subject with Highest Average Score
const subjectAverages = {};
for (const student of studentData) {
    for (const subject in student.grades) {
        if (!subjectAverages[subject]) {
            subjectAverages[subject] = { total: 0, count: 0 };
        }
        const scores = student.grades[subject];
        subjectAverages[subject].total += scores.reduce((acc, score) => acc + score, 0);
        subjectAverages[subject].count += scores.length;
    }
}
const highestAverageSubject = Object.entries(subjectAverages).reduce((max, [subject, { total, count }]) => {
    const average = total / count;
    return average > max.average ? { subject, average } : max;
}, { subject: "", average: 0 });
console.log(`Subject with highest average score: ${highestAverageSubject.subject}`); // "Math" or "Science" or "History"
// Task 8: Listing Debate Team Members in Reverse Order
const debateTeamMembers = studentData
    .filter(student => student.extracurricular.includes("Debate Team"))
    .map(student => student.name)
    .reduceRight((acc, name) => acc + (acc ? " and " : "") + name, "");
    console.log(`Debate Team Members: ${debateTeamMembers}`); // "Charlie and Alice"
// Task 9: Checking Attendance
const allHaveGoodAttendance = studentData.every(student => {
    const attendanceCount = student.attendance.filter(attended => attended).length;
    return attendanceCount >= student.attendance.length / 2;
});
console.log(`All students have good attendance: ${allHaveGoodAttendance}`); // true or false
// Task 10: Checking for Inactive Students
const hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0);
console.log(`There is at least one inactive student: ${hasInactiveStudent}`); // true   
// Task 11: Congratulating Students with Perfect Scores
studentData.forEach(student => {
    for (const subject in student.grades) {
        if (student.grades[subject].includes(100)) {
            console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
        }
    }
}
);