#1) Print all integers from 0 to 20 inclusive. for loop ის გამოყენებით
for num in range(21):
    print(num)

#2) Print the first 10 natural numbers. for loop ის გამოყენებით
for num in range(1, 11):
    print(num)

#3) Print even numbers separately and odd numbers separately from 0 to 100 inclusive for loop ის გამოყენებით
print("Even numbers:")
for num in range(0, 101, 2):
    print(num)

print("Odd numbers:")
for num in range(1, 101, 2):
    print(num)

#4) Write a program that calculates and prints the sum of numbers from 1 to 10 using a for loop.
#sum = 0
#for i in range (11):
#    sum += i
#print(sum)
#5) Enter a number to the user and then using a for loop output the sum of all the numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).
user_input = int(input("Enter a positive integer: "))
total_sum = 0
for num in range(1, user_input + 1):
    total_sum += num
print("Sum of numbers up to", user_input, "is:", total_sum)

#6) Print the squares of numbers from 1 to 15. (edited)
for num in range(1, 16):
    print(f"{num} squared is {num**2}")
