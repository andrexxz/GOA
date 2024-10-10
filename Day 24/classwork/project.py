import random
wins = 0
tries = 10
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
number_to_guess = random.choice(numbers) 
guess = 0 

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")

while guess != number_to_guess and tries > 0:

    guess = int(input("Enter your guess: ")) 
    tries = tries - 1
    print("you have " + str(tries) + " tries")
    if guess < number_to_guess:
        print("Too low! Try again.")
    elif guess > number_to_guess:
        print("Too high! Try again.")
    else:
        tries = tries + 5
        wins = wins + 1
        print("Congratulations! You've guessed the correct number.")
        number_to_guess = random.choice(numbers)

if wins == 1:
    print("you are noob, try harder next time")
elif 1 < wins < 6:
    print("you have done good bro.")
elif 5 < wins < 11:
    print("you are really pro bro")
elif 10 < wins:
    ("are you hacking bro? howw?")
print("eh, Sorry you loose,thank you for playing!")