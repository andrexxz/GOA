/*Level 132:
. Create a Simple Class
Task: Define a class named Dog with a constructor that takes one argument, name, and assigns it to a property called name.
Add a Method to a Class
Task: Add a method called bark to the Dog class. When called, it should print "Woof!" to the console.

Create an Instance of a Class
Task: Create an instance of the Dog class with the name "Buddy" and store it in a variable called myDog.

Access a Property of an Instance
Task: Print the name property of the myDog instance to the console.

Call a Method of an Instance
Task: Call the bark method of the myDog instance.

Class with Multiple Properties
Task: Define a class named Car with properties make, model, and year. The constructor should take arguments for each of these properties.

Class Method with Parameters
Task: Add a method called displayInfo to the Car class. When called, it should print a sentence like "This is a 2020 Toyota Camry." to the console, using the object's properties.

Create Multiple Instances
Task: Create two instances of the Car class with different makes, models, and years.

Access and Call
Task: For each car instance created in the previous task, print its model and call the displayInfo method.

Class with a Default Value
Task: Define a class named Person. The constructor should take name and age as arguments. If age is not provided, it should default to 30. */
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}

// Create an instance of the Dog class
const myDog = new Dog("Buddy");
// Access the name property
console.log(myDog.name); // Output: Buddy
// Call the bark method
myDog.bark(); // Output: Woof!
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
}
// Create two instances of the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);
// Access and call methods for each car instance
console.log(car1.model); // Output: Camry
car1.displayInfo(); // Output: This is a 2020 Toyota Camry.
console.log(car2.model); // Output: Civic
car2.displayInfo(); // Output: This is a 2021 Honda Civic.
class Person {
    constructor(name, age = 30) {
        this.name = name;
        this.age = age;
    }
}
// Create an instance of the Person class
const person1 = new Person("Alice");
// Access the properties
console.log(`Name: ${person1.name}, Age: ${person1.age}`); // Output: Name: Alice, Age: 30
const person2 = new Person("Bob", 25);
// Access the properties
console.log(`Name: ${person2.name}, Age: ${person2.age}`); // Output: Name: Bob, Age: 25
// Task 17: Class with Static Method
// Define a class named MathUtils with a static method called add that takes two numbers and returns their sum.
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
// Call the static method and print the result
const sum = MathUtils.add(5, 10);
console.log(`Sum: ${sum}`); // Output: Sum: 15
// Task 18: Class with Inheritance
// Define a class named Animal with a method called makeSound that prints "Animal sound".
class Animal {
    makeSound() {
        console.log("Animal sound");
    }
}
// Define a class named Dog that extends Animal and overrides the makeSound method to print "Woof!".
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
// Create an instance of Dog and call the makeSound method
const myDog2 = new Dog();
myDog2.makeSound(); // Output: Woof!
// Task 19: Class with Getters and Setters
// Define a class named Person with a private property _age and a getter and setter for age
class PersonWithAge {
    constructor(name, age) {
        this.name = name;
        this._age = age; // Private property
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative.");
        } else {
            this._age = value;
        }
    }
}
// Create an instance of PersonWithAge and use the getter and setter
const personWithAge = new PersonWithAge("Charlie", 25);
console.log(`Name: ${personWithAge.name}, Age: ${personWithAge.age}`); // Output: Name: Charlie, Age: 25
personWithAge.age = 30; // Set a new age
console.log(`Updated Age: ${personWithAge.age}`); // Output: Updated Age: 30
personWithAge.age = -5; // Attempt to set a negative age (will show an error message)
// Output: Age cannot be negative.