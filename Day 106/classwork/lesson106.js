function loveCalculator(name1, name2) {
    // Generate a random love percentage between 0 and 100
    const lovePercentage = Math.floor(Math.random() * 101);
    // Create the message
    const message = name1 + " და " + name2 + ", თქვენი სიყვარულის პროცენტია " + lovePercentage + "%";
    alert(message);
}
loveCalculator('ანა', 'გიორგი');