def simple_calculator(num1, num2, operation):
    if operation == 'დამატება':
        return num1 + num2
    elif operation == 'გამოკლება':
        return num1 - num2
    elif operation == 'გამრავლება':
        return num1 * num2
    elif operation == 'გაყოფა':
        if num2 == 0:
            return 0
        else:
            return num1 / num2
    else:
        return "შეცდომა: დაუშვებელი ოპერაცია"
