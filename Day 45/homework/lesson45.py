number1 = int(input("დაწერეთ პირველი რიცხვი: "))
middle = int(input("(1 = მიმატება)(2 = გამოკლება)(3 = გამრავლება)(4 = გაყოფა): "))
number2 = int(input("დაწერეთ მეორე რიცხვი:  "))
question = input("გინდათ კიდევ შეიყვანოთ რიცხვი?")
answer1 = number1 + number2
answer2 = number1 - number2
answer3 = number1 * number2
answer4 = number1 / number2

if middle == 1:
    print(answer1)
elif middle == 2:
    print(answer2)
elif middle == 3:
    print(answer3)
elif middle == 4:
    print(answer4)
else:
    print("error please try again")

while question == "კი":
    
    middle = int(input("(1 = მიმატება)(2 = გამოკლება)(3 = გამრავლება)(4 = გაყოფა): "))    
    number = int(input("დაწერეთ რიცხვი:  "))
    answer1 = number1 + number2
    answer2 = number1 - number2
    answer3 = number1 * number2
    answer4 = number1 / number2

    if middle == 1:
        print(answer1)
    elif middle == 2:
        print(answer2)
    elif middle == 3:
        print(answer3)
    elif middle == 4:
        print(answer4)
    else:
        print("error please try again")
    question = input("გინდათ კიდევ შეიყვანოთ რიცხვი?")   