/*Level 121:
ამოცანა 1: arrow function და default parameter
დაწერეთ arrow function, რომელიც მიიღებს ორ რიცხვს პარამეტრად და დააბრუნებს მათ ჯამს. მეორე პარამეტრს მიანიჭეთ default მნიშვნელობა 0.

 
მაგალითი:
თუ ფუნქციას გადავცემთ 5 და 3, ფუნქციამ უნდა დააბრუნოს 8.
თუ ფუნქციას გადავცემთ მხოლოდ 5, ფუნქციამ უნდა დააბრუნოს 5.
მოცანა 2: arrow function და default parameter ობიექტთან
დაწერეთ arrow function, რომელიც მიიღებს ობიექტს პარამეტრად. ობიექტს უნდა ჰქონდეს ორი თვისება: firstName და lastName. თუ lastName არ არის განსაზღვრული, მიანიჭეთ მას default მნიშვნელობა "Doe". ფუნქციამ უნდა დააბრუნოს სრული სახელი.

 
მაგალითი:
თუ ფუნქციას გადავცემთ { firstName: "John", lastName: "Smith" }, ფუნქციამ უნდა დააბრუნოს "John Smith".
თუ ფუნქციას გადავცემთ { firstName: "Jane" }, ფუნქციამ უნდა დააბრუნოს "Jane Doe".
ამოცანა 3: arrow function და default parameter მასივთან
დაწერეთ arrow function, რომელიც მიიღებს მასივს პარამეტრად. თუ მასივი ცარიელია, მიანიჭეთ მას default მნიშვნელობა [1, 2, 3]. ფუნქციამ უნდა დააბრუნოს მასივის ელემენტების ჯამი.

 
მაგალითი:
თუ ფუნქციას გადავცემთ [4, 5, 6], ფუნქციამ უნდა დააბრუნოს 15.
თუ ფუნქციას გადავცემთ ცარიელ მასივს, ფუნქციამ უნდა დააბრუნოს 6.
ამოცანა 4: arrow function და default parameter სტრიქონებთან
დაწერეთ arrow function, რომელიც მიიღებს ორ სტრიქონს პარამეტრად და დააბრუნებს მათ შეერთებულ სტრიქონს. მეორე პარამეტრს მიანიჭეთ default მნიშვნელობა ცარიელი სტრიქონი.

 
მაგალითი:
თუ ფუნქციას გადავცემთ "Hello" და "World", ფუნქციამ უნდა დააბრუნოს "HelloWorld".
თუ ფუნქციას გადავცემთ მხოლოდ "Hello", ფუნქციამ უნდა დააბრუნოს "Hello".
 
ამოცანა 5: arrow function და default parameter ფუნქციებთან
დაწერეთ arrow function, რომელიც მიიღებს სხვა ფუნქციას პარამეტრად და დააბრუნებს მის შედეგს. თუ პარამეტრი არ არის განსაზღვრული, მიანიჭეთ მას default მნიშვნელობა ფუნქცია, რომელიც აბრუნებს 10-ს.

 
მაგალითი:
თუ ფუნქციას გადავცემთ ფუნქციას, რომელიც აბრუნებს 5-ს, ფუნქციამ უნდა დააბრუნოს 5.
თუ ფუნქციას პარამეტრი არ გადაეცემა, ფუნქციამ უნდა დააბრუნოს 10. */
// 1. arrow function და default parameter
const addNumbers = (a, b = 0) => a + b;
console.log(addNumbers(5, 3)); // 8
console.log(addNumbers(5)); // 5
// 2. arrow function და default parameter ობიექტთან
const getFullName = ({ firstName, lastName = "Doe" }) => `${firstName} ${lastName}`;
console.log(getFullName({ firstName: "John", lastName: "Smith" })); // "John Smith"
console.log(getFullName({ firstName: "Jane" })); // "Jane Doe"  
// 3. arrow function და default parameter მასივთან
const sumArray = (arr = [1, 2, 3]) => arr.reduce
((acc, curr) => acc + curr, 0);
console.log(sumArray([4, 5, 6])); // 15 
console.log(sumArray()); // 6
// 4. arrow function და default parameter სტრიქონებთან
const concatenateStrings = (str1, str2 = "") => str1 + str2;
console.log(concatenateStrings("Hello", "World")); // "HelloWorld"
console.log(concatenateStrings("Hello")); // "Hello"
// 5. arrow function და default parameter ფუნქციებთან
const executeFunction = (func = () => 10) => func();
console.log(executeFunction(() => 5)); // 5
console.log(executeFunction()); // 10
