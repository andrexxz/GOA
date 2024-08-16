# Python Syntax

# 1)Write a Python script that prints "Hello, World!"
print("Hello, World!")

# 2)Create a script that takes user input and prints it.
user_input = input("Enter something: ")
print("You entered:", user_input)

# 3)Write a script that uses both single-line and multi-line comments.

# This is a single-line comment

"""
This is a multi-line comment
that spans multiple lines.
"""

print("Comments are useful!")

# 4)Write a script that demonstrates indentation in Python.
def greet(name):
    if name:
        print(f"Hello, {name}!")
    else:
        print("Hello, World!")

greet("Alice")

# 5)Write a script that shows how to break lines in Python.
long_string = ("This is a very long string "
               "that we want to break into "
               "multiple lines for better readability.")
print(long_string)

# Python Comments

# 6)Add comments to explain each line of a given script.

def add(a, b):
    return a + b

result = add(5, 3)
print(result)

# 7)Write a script and use comments to explain a function's purpose.

# Function to calculate the factorial of a number
def factorial(n):
    """
    This function takes a positive integer n
    and returns its factorial.
    """
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Calculate the factorial of 5
print(factorial(5))

# 8)Add a block comment to describe the script's overall functionality.
"""
This script demonstrates basic arithmetic operations
and prints the results.
"""

# Addition
print(5 + 3)

# Subtraction
print(10 - 2)

# Multiplication
print(4 * 7)

# Division
print(20 / 4)

# 9)Use comments to disable a part of the script and re-enable it.
# print("This line is enabled")
# print("This line is disabled")
print("This line is enabled again")

# 10)Write a script with intentional errors and comment on why they occur.

# This will cause a SyntaxError because of the missing closing parenthesis
# print("Hello, World!"

# This will cause a NameError because 'x' is not defined
# print(x)

# This will cause a TypeError because you can't add a string and an integer
# print("Number: " + 5)

# Python Variables

# 11)Create and initialize multiple variables of different data types.
integer_var = 10
float_var = 10.5
string_var = "Hello"
boolean_var = True

# 12)Swap the values of two variables.
a = 5
b = 10
a, b = b, a
print(a, b)  # Output: 10 5

# 13)Create a script that takes user input to assign values to variables.
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Name: {name}, Age: {age}")

# 14)Write a script that uses both global and local variables.
global_var = "I am global"

def my_function():
    local_var = "I am local"
    print(global_var)
    print(local_var)

my_function()
print(global_var)
# print(local_var)  # This will cause an error because local_var is not accessible here

# 15)Demonstrate variable naming conventions in Python.
my_variable = 10
anotherVariable = 20
_private_var = 30
CONSTANT_VAR = 40

# Python Data Types

# 16)Create variables of types: integer, float, string, and boolean.
integer_var = 10
float_var = 10.5
string_var = "Hello"
boolean_var = True

# 17)Write a script to convert between different data types.
int_var = 10
float_var = float(int_var)
str_var = str(int_var)
bool_var = bool(int_var)
print(float_var, str_var, bool_var)

# 18)Demonstrate the use of type() function to check variable types.
var = 10
print(type(var))  # Output: <class 'int'>
var = 10.5
print(type(var))  # Output: <class 'float'>
var = "Hello"
print(type(var))  # Output: <class 'str'>
var = True
print(type(var))  # Output: <class 'bool'>

# 19)Perform basic arithmetic operations on different data types.
a = 10
b = 5
print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division

# 20)Write a script to compare different data types using relational operators.
a = 10
b = 5
print(a > b)   # True
print(a < b)   # False
print(a == b)  # False
print(a != b)  # True

# Python Numbers

# 21)Write a script to perform arithmetic operations.
a = 10
b = 5
print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division

# 22)Create a script that generates a random number.
import random
print(random.randint(1, 100))

# 23)Write a script that calculates the square root of a number.
import math
number = 16
print(math.sqrt(number))

# 24)Demonstrate the use of math functions like ceil() and floor().
import math
number = 10.7
print(math.ceil(number))  # Output: 11
print(math.floor(number))  # Output: 10

# 25)Write a script to find the greatest common divisor (GCD) of two numbers.
import math
a = 48
b = 18
print(math.gcd(a, b))  # Output: 6

# Python Casting

# 26)Write a script to convert integers to floats and vice versa.
int_var = 10
float_var = float(int_var)
print(float_var)  # Output: 10.0

float_var = 10.5
int_var = int(float_var)
print(int_var)  # Output: 10

# 27)Create a script to convert strings to integers and floats.
str_var = "10"
int_var = int(str_var)
float_var = float(str_var)
print(int_var)  # Output: 10
print(float_var)  # Output: 10.0

# 28)Demonstrate casting between lists and tuples.
list_var = [1, 2, 3]
tuple_var = tuple(list_var)
print(tuple_var)  # Output: (1, 2, 3)

tuple_var = (4, 5, 6)
list_var = list(tuple_var)
print(list_var)  # Output: [4, 5, 6]

# 29)Write a script to handle casting errors.
str_var = "abc"
try:
    int_var = int(str_var)
except ValueError:
    print("Cannot convert string to integer")

# 30)Create a script to convert a string representing a number to an integer.
str_var = "123"
int_var = int(str_var)
print(int_var)  # Output: 123
