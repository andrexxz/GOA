# 1) შექმენით კალკულატორის ფუნქცია  რომელიც მომხმარებელს შეეკითხება ორ რიცხვს და მოქმედების ტიპს(მიმატება, გამოკლება, გამრავლება, გაყოფა) შესაბამისად ფუნქცია დააბრუნებს ანუ დაბეჭდავს შედეგს იმისდამიხედვით მომხმარებელს რა სურს და რა რიცხვები შემოიტანა, მაგალითად მომხმარებელმა თუ შემოიტანა 5 და 2 და ასევე მას სურს გამრავლება ფუნქციამ უნდა დააბრუნოს დაბეჭდოს შედეგად 2 * 5 ანუ 10
def calculator():
    #answer0 = 0
    number1 = int(input("დაწერეთ პირველი რიცხვი: "))
    middle = int(input("(1 = მიმატება)(2 = გამოკლება)(3 = გამრავლება)(4 = გაყოფა): "))
    number2 = int(input("დაწერეთ მეორე რიცხვი:  "))
    #question = input("გინდათ კიდევ შეიყვანოთ რიცხვი?")
    answer1 = number1 + number2
    answer2 = number1 - number2
    answer3 = number1 * number2
    answer4 = number1 / number2

    if middle == 1:
        print(answer1)
        #answer0 = answer0 + answer1
    elif middle == 2:
        print(answer2)
        #answer0 = answer0 + answer2
    elif middle == 3:
        print(answer3)
        #answer0 = answer0 + answer3
    elif middle == 4:
        print(answer4)
        #answer0 = answer0 + answer4
    else:
        print("error please try again")

    # while question == "კი":
    
    #     middle = int(input("(1 = მიმატება)(2 = გამოკლება)(3 = გამრავლება)(4 = გაყოფა): "))    
    #     number = int(input("დაწერეთ რიცხვი:  "))
    #     answer1 = answer0 + number
    #     answer2 = answer0 - number
    #     answer3 = answer0 * number
    #     answer4 = answer0 / number
    #     question = input("გინდათ კიდევ შეიყვანოთ რიცხვი?")
    #     if middle == 1:
    #         print(answer1)
    #     elif middle == 2:
    #         print(answer2)
    #     elif middle == 3:
    #         print(answer3)
    #     elif middle == 4:
    #         print(answer4)
    #     else:
    #         print("error please try again")
    



calculator()