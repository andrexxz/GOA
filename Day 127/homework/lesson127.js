/*გააკეთეთ 5 მაგალითი Object Literal enhancment - ზე. */
// 1. Object Literal Enhancement with Properties
const name = "Alice";
const age = 30;
const person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet()); // "Hello, my name is Alice and I am 30 years old."
// 2. Object Literal Enhancement with Computed Property Names
const key = "favoriteColor";
const value = "blue";
const settings = {
    [key]: value,
    theme: "dark",
    getSettings() {
        return `Theme: ${this.theme}, ${key}: ${this[key]}`;
    }
    };
    console.log(settings.getSettings()); // "Theme: dark, favoriteColor: blue"
// 3. Object Literal Enhancement with Shorthand Method Definition   
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getDetails()); // "2020 Toyota Camry"
// 4. Object Literal Enhancement with Dynamic Properties
const dynamicKey = "dynamicProperty";
const dynamicValue = "I am dynamic!";
const dynamicObject = {
    [dynamicKey]: dynamicValue,
    staticProperty: "I am static!",
    showProperties() {
        return `${this.staticProperty}, ${dynamicKey}: ${this[dynamicKey]}`;
    }
};  
console.log(dynamicObject.showProperties()); // "I am static!, dynamicProperty: I am dynamic!"
// 5. Object Literal Enhancement with Nested Objects
const user = {
    username: "john_doe",
    profile: {
        firstName: "John",
        lastName: "Doe",
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    getUsername() {
        return this.username;
    }
};  
console.log(user.profile.getFullName()); // "John Doe"
console.log(user.getUsername()); // "john_doe"