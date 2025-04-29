
let oldObject = {
    name: "John",
    age: 30,
    city: "New York"
};

// 1. გაუმჯობესებული ტიპის ობიექტი
let improvedObject = {
    name: "andria",
    age: 14,
    city: "gori",
    country: "georgia",
    arestudying: true,
    greet: function() { // დამატებულია ფუნქცია
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    },
    languages: ["css", "js"], // დამატებულია ახალი ველი
    where_i_live: { // ობიექტი შიგნით
        street: "tamar mefis street",
        address: "gori"
    }
};