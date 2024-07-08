#For Loop:

#1) Print all integers from 0 to 20 inclusive.

for i in range (0,21):
    print(i)

#2) Print the first 10 natural numbers.

for i in range (0,10):
    print(i)

#3) Print even numbers separately and odd numbers separately from 0 to 100 inclusive.
for i in range (0,100):
    if i % 2 == 0:
        print("the even is " + str(i))
    else:
        print("the odd is " + str(i))    
#4) Enter a number to the user and then using a for loop output the sum of all the numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).
sum_of_numbers = 0
number = int(input("შეიყვანეთ რიცხვი: "))
for i in range(number):
    sum_of_numbers += i
print("რიცხვების ჯამი: " + str(sum_of_numbers))

#5) Write an algorithm that prints multiples of 5 (numbers divisible by 5) from 1 to 50 inclusive

for i in range(1, 51):
    if i % 5 == 0:
        print(i)

# While Loop:

#1) Print even numbers up to 20.

num = 0
while num <= 20:
    if num % 2 == 0:
        print(num)
    num += 1
#2) calculate the sum of numbers from 1 to 10.

i = 0
total_sum = 0

while i <= 10:  
    total_sum += i
    i += 1

print("The sum of numbers from 1 to 10 is:" + str(total_sum))

#3) Write a while loop that asks the user to guess a number between 1 and 10 until they get it right. The correct number is 7.

correct_answer = 7
question = int(input("enter number from 1 to 10:  "))
while question != correct_answer:
    print("try again")
    question = int(input("enter number from 1 to 10:  "))
print("you gess the number finally")

#4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.

numbers = [1, 2, 3, 4, 5]
doubled_numbers = []
index = 0

while index < len(numbers):
    doubled_numbers.append(numbers[index] * 2)
    index += 1

print("Doubled numbers:", doubled_numbers)

#5)Write a while loop that repeatedly asks the user to enter a password until the correct password "password123" is entered.

correct_password = "password123"
password_question = input("enter password:  ")

while password_question != correct_password:
    print("incorect")
    password_question = input("enter password:  ")
else:
    print("correct!come in.")
#If - Else:

#1) Write an if-else statement that prints "Good morning!" if the current hour is less than 12 and "Good afternoon!" otherwise.

time = int(input("please enter the time(12;01x. 12v/ 1x. 13v):  "))
if time < 12:
    print("good morning")
else:
    print("good afternoon")
#2) Write an if-else statement that checks if a number is even or odd. If the number is even, print "Even"; otherwise, print "Odd."

number = int(input("Enter a number: "))

if number % 2 == 0:
    print(number," is Even.")
else:
    print(number, "is Odd.")

#3) Create an if-else statement to check if the temperature is above 30 degrees. If it is, print "It's hot outside!"; otherwise, print "It's not too hot."

temperature = int(input("enter temperature:"))
if temperature < 30:
    print("its not too hot")
else:
    print("its hot outside!")    

#4) Create an if-else statement that determines if a person is a teenager. If the age is between 13 and 19 (inclusive), print "You are a teenager!"; otherwise, print "You are not a teenager."     

age = int(input("enter your age:  "))
if 13 < age < 19:
    print("you are a teenager")
else:
    print("you are not a teenager")    