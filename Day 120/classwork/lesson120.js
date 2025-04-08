const car = {
    brand: "Toyota",
    model: "Corolla",
    color: "Blue"
};

console.log("Properties:");
console.log(Object.keys(car));

console.log("Values:");
console.log(Object.values(car));
console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი.`);
const fruits = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];

for (const index in fruits) {
    console.log(`ეს არის ${fruits[index]} მნიშვნელობა და ეს არის მისი ინდექსი ${index}`);
}