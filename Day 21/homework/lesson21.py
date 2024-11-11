import random

def guess_number():

    number = int(input("შეიყვანეთ რიცხვი 1-დან 100-მდე: "))


    guess = random.randint(1, 100)
    attempts = 1

    while guess != number:
        print("კომპიუტერის გამოცნობა:", guess)
        if guess < number:
            guess = random.randint(guess + 1, 100)
        elif guess > number:
            guess = random.randint(1, guess - 1)
        attempts += 1

    print(f"კომპიუტერმა გამოიცნო! რიცხვი იყო {number}. მცდელობები: {attempts}")


def fizz_buzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizz_buzz()

def check_course_status():
    midterm = float(input("შეიყვანეთ შუალედური გამოცდის ქულა (0-100): "))
    final = float(input("შეიყვანეთ დასკვნითი გამოცდის ქულა (0-100): "))
    project = float(input("შეიყვანეთ პროექტის ქულა (0-100): "))

    if midterm < 0 or midterm > 100 or final < 0 or final > 100 or project < 0 or project > 100:
        print("გთხოვთ შეიყვანოთ სწორი ქულები (0-დან 100-მდე).")
        return

    average = (midterm * 0.2) + (final * 0.4) + (project * 0.4)

    if average >= 70:
        print("თქვენ ჩააბარეთ კურსი! საშუალო ქულა არის:", average)
    else:
        print("სამწუხაროდ, ვერ ჩააბარეთ კურსი. საშუალო ქულა არის:", average)

check_course_status()
