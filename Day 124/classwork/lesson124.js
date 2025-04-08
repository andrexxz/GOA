const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 50 },
    { name: "Charger", price: 25 }
];

// 1. Use map() to create an array of product names
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

// 2. Use filter() to create an array of affordable products (price < $100)
const affordableProducts = products.filter(product => product.price < 100);
console.log("Affordable Products:", affordableProducts);

// 3. Use reduce() to calculate the total price of all products
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice);

// 4. Use reduceRight() to concatenate product names in reverse order
const productNamesReversed = products.reduceRight((acc, product) => acc + (acc ? " - " : "") + product.name, "");
console.log("Product Names Reversed:", productNamesReversed);