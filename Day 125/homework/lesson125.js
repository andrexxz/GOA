/*Level 125:
Task 1: Finding a Specific User by ID
You are given an array of user objects, where each object has an id (number) and a name (string) property. Use the find() method to locate the user object with an id of 3. Store the found user object in a variable called userWithId3.
Task 2: Reversing an Array of Colors
You have an array of color names. Use the reverse() method to reverse the order of the elements in the original colors array directly.
Task 3: Sorting an Array of Product Prices
You are given an array of product prices (numbers). Use the sort() method to sort these prices in descending order (from highest to lowest).
Task 4: Creating an Array of Characters from a String
You have a string. Use the Array.from() method to create a new array where each element is a character from the string. Store the resulting array in a variable called characters.
Task 5: Checking if Data is an Array
You have two variables, data1 (an array of numbers) and data2 (a string). Use the Array.isArray() method to check if each variable is an array. Store the boolean results in variables called isData1Array and isData2Array respectively.
-
Task 6:
JavaScript Comprehensive Data Analysis - The Ultimate Task!
Task:

You are managing data for a student course enrollment system. You have an array of course objects, where each object contains information about a course and the students enrolled in it.
Your Tasks:

Array.isArray(): Check if the courses variable is an array and if the studentNamesString variable is an array. Log the boolean results.

Array.from(): Convert the studentNamesString into an array called allStudentNames by splitting it at the comma.

forEach() (Outer Loop): Iterate through each course in the courses array and log the course ID and name.

map() (Level 1): Create a new array called courseNames containing only the names of all the courses.

map() (Level 2 & Nested reduce()): Create a new array called courseAverages. Each element should be an object with the course id and the average grade of all students enrolled in that course.

filter(): Create a new array called activeCourses containing only the courses where isActive is true.

find(): Find the course with the ID "MA201" and store it in a variable called calculusCourse. Log the calculusCourse object.

every() (Nested): Iterate through each course using forEach(). For each course, check if all enrolled students have at least one grade of 70 or higher. Log a message for each course indicating this.

some(): Check if there is at least one course with a capacity of less than 30. Log the boolean result.

sort(): Create a new array called coursesByCapacity by making a copy of the courses array and sorting it in ascending order based on the capacity. Log the coursesByCapacity array.

reverse(): Reverse the order of the coursesByCapacity array in place. Log the reversed array.

reduce(): Calculate the total number of credits offered by all active courses.

reduceRight(): Create a string containing the names of all active courses, listed in reverse order of their appearance in the activeCourses array, separated by " - ". */
// Task 1: Finding a Specific User by ID
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" }
];
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3); // { id: 3, name: "Charlie" }
// Task 2: Reversing an Array of Colors
const colors = ["red", "green", "blue", "yellow"];
colors.reverse();
console.log(colors); // ["yellow", "blue", "green", "red"]
// Task 3: Sorting an Array of Product Prices
const productPrices = [29.99, 19.99, 49.99, 9.99, 39.99];
productPrices.sort((a, b) => b - a);
console.log(productPrices); // [49.99, 39.99, 29.99, 19.99, 9.99]
// Task 4: Creating an Array of Characters from a String
const myString = "Hello, World!";
const characters = Array.from(myString);
console.log(characters); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']
// Task 5: Checking if Data is an Array
const data1 = [1, 2, 3, 4, 5];
const data2 = "This is a string";
const isData1Array = Array.isArray(data1);
const isData2Array = Array.isArray(data2);
console.log(`data1 is an array: ${isData1Array}`); // true
console.log(`data2 is an array: ${isData2Array}`); // false
// Task 6: JavaScript Comprehensive Data Analysis - The Ultimate Task!
const courses = [
    {
        id: "CS101",
        name: "Introduction to Computer Science",
        isActive: true,
        capacity: 50,
        students: [
            { name: "Alice", grades: [85, 90, 78] },
            { name: "Bob", grades: [88, 92, 80] }
        ]
    },
    {
        id: "MA201",
        name: "Calculus I",
        isActive: true,
        capacity: 25,
        students: [
            { name: "Charlie", grades: [70, 75, 80] },
            { name: "David", grades: [60, 65, 70] }
        ]
    },
    {
        id: "PH301",
        name: "Physics I",
        isActive: false,
        capacity: 30,
        students: [
            { name: "Eve", grades: [90, 95, 85] }
        ]
    }
];  
const studentNamesString = "Alice, Bob, Charlie, David, Eve";
// Array.isArray(): Check if courses and studentNamesString are arrays
const isCoursesArray = Array.isArray(courses);
const isStudentNamesStringArray = Array.isArray(studentNamesString);
console.log(`courses is an array: ${isCoursesArray}`); // true
console.log(`studentNamesString is an array: ${isStudentNamesStringArray}`); // false
// Array.from(): Convert studentNamesString into an array
const allStudentNames = Array.from(studentNamesString.split(", ")); 
console.log(allStudentNames); // ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
// forEach() (Outer Loop): Iterate through each course and log course ID and name
courses.forEach(course => {
    console.log(`Course ID: ${course.id}, Name: ${course.name}`);
}); 
// map() (Level 1): Create a new array called courseNames containing only the names of all the courses
const courseNames = courses.map(course => course.name);
console.log(courseNames); // ['Introduction to Computer Science', 'Calculus I', 'Physics I']
// map() (Level 2 & Nested reduce()): Create a new array called courseAverages
const courseAverages = courses.map(course => {
    const totalGrades = course.students.reduce((acc, student) => {
        return acc + student.grades.reduce((sum, grade) => sum + grade, 0);
    }, 0);
    const totalStudents = course.students.reduce((acc, student) => acc + student.grades.length, 0);
    const averageGrade = totalStudents ? (totalGrades / totalStudents).toFixed(2) : 0;
    return { id: course.id, average: parseFloat(averageGrade) };
}
);
console.log(courseAverages); // [{ id: 'CS101', average: '88.00' }, { id: 'MA201', average: '72.50' }, { id: 'PH301', average: '90.00' }]
// filter(): Create a new array called activeCourses containing only the courses where isActive is true
const activeCourses = courses.filter(course => course.isActive);
console.log(activeCourses); // [{ id: 'CS101', name: 'Introduction to ComputerScience', isActive: true, capacity: 50, students: [...] }, { id: 'MA201', name: 'Calculus I', isActive: true, capacity: 25, students: [...] }]
// find(): Find the course with the ID "MA201" and store it in a variable called calculusCourse
const calculusCourse = courses.find(course => course.id === "MA201");
console.log(calculusCourse); // { id: 'MA201', name: 'Calculus I', isActive: true, capacity: 25, students: [...] }
// every() (Nested): Check if all enrolled students have at least one grade of 70 or higher
courses.forEach(course => {
    const allStudentsHavePassingGrade = course.students.every(student => student.grades.some(grade => grade >= 70));
    console.log(`All students in course ${course.name} have at least one grade of 70 or higher: ${allStudentsHavePassingGrade}`);
});
// some(): Check if there is at least one course with a capacity of less than 30
const hasCourseWithLowCapacity = courses.some(course => course.capacity < 30);
console.log(`Is there at least one course with a capacity of less than 30? ${hasCourseWithLowCapacity}`); // true
// sort(): Create a new array called coursesByCapacity sorted in ascending order based on the capacity
const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log(coursesByCapacity); // Sorted array based on capacity
// reverse(): Reverse the order of the coursesByCapacity array in place
coursesByCapacity.reverse();
console.log(coursesByCapacity); // Reversed array based on capacity
// reduce(): Calculate the total number of credits offered by all active courses
const totalCredits = activeCourses.reduce((acc, course) => acc + (course.capacity || 0), 0);
console.log(`Total credits offered by all active courses: ${totalCredits}`); // Total credits
// reduceRight(): Create a string containing the names of all active courses in reverse order
const activeCourseNamesReversed = activeCourses.reduceRight((acc, course) => {
    return acc ? `${course.name} - ${acc}` : course.name;
}, "");
console.log(`Active courses in reverse order: ${activeCourseNamesReversed}`); // Active courses in reverse order
// Output: Active courses in reverse order: Calculus I - Introduction to Computer Science   
