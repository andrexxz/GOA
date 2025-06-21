function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}