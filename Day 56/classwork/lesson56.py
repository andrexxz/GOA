#შექმენით პროგრამა, რომელიც ბეჭდავს 5-ის ჯერადებს 1-დან 50-ის ჩათვლით for loop-ის გამოყენებით.
for i in range(0,51,5):
    print(i)
#დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 2-დან 20-ის ჩათვლით for loop-ის გამოყენებით.
for i in range(2,21,2):
    print(i)
#დაწერეთ ალგორითმი, რომელიც დაბეჭდავს 5-იდან ათის ჩათვლით რიცხვების ნამრავლს for loop-ის გამოყენებით.
for i in range(5, 11):
    result = i * 10
    print(f"{i} * 10 = {result}")

#დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.
def calculate_number(user_input):
        number = int(user_input)
        if number % 2 == 0:
            return number // 2
        else:
            return (number * 3) + 1


user_input = input("შეიყვანეთ რიცხვი: ")
result = calculate_number(user_input)
print(f"შედეგი: {result}")
#შექმენით ოთხი მათემატიკური ფუნქცია, თითოეულს გადაეცით ორი არგუმენტი და სახელის შესაბამისად მოახდინეთ მუშაობა. ოპერაციები: +, -, *, /.
def add(a, b):
    return a + b
def subtract(a, b):
    return a - b
def multiply(a, b):
    return a * b
def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "გამოყენება შეუძლებელია: ნულით გაყოფა"
    
result = add(5, 3)
print("5 + 3 =", result)
result = subtract(10, 4)
print("10 - 4 =", result)
result = multiply(6, 2)
print("6 * 2 =", result)
result = divide(8, 2)
print("8 / 2 =", result)

#შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის სიგრძესა და სიმაღლეს, გამოითვლით მის ფართობს.
def calculate_area(length, height):
    return length * height
length = 5
height = 3
area = calculate_area(length, height)
print(f"მართკუთხედის ფართობი: {area}")

#შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის ოთხ გვერდს, გამოითვლით მის პერიმეტრს.
def calculate_perimeter(side1, side2, side3, side4):
    return side1 + side2 + side3 + side4
side1 = 3
side2 = 4
side3 = 5
side4 = 6

perimeter = calculate_perimeter(side1, side2, side3, side4)
print(f"მართკუთხედის ოთხ გვერდის პერიმეტრი: {perimeter}")


#შექმენით ფუნქცია, რომელიც მიიღებს არგუმენტად სიას და დაბეჭდეთ სიის რიცხვების ჯამი, არ გამოიყენოთ sum.
def calculate_list_sum(my_list):
    total = 0
    for num in my_list:
        total += num
    return total

my_list = [1, 2, 3, 4]
result = calculate_list_sum(my_list)
print("სიის რიცხვების ჯამი:", result)

#შექმენით ფუნქცია, რომელიც დაბეჭდავს კონკრეტული სიიდან მინიმალურ და მაქსიმალურ რიცხვებს, არ გამოიყენოთ min და max. გამოიყენეთ def, for, if/else, indexing, print.
def print_min_max(numbers):
    if not numbers:
        print("სია ცარიელია.")
        return

    min_num = numbers[0]
    max_num = numbers[0]

    for num in numbers:
        if num < min_num:
            min_num = num
        elif num > max_num:
            max_num = num

    print(f"მინიმუმი: {min_num}")
    print(f"მაქსიმუმი: {max_num}")

my_numbers = [5, 2, 9, 1, 7]
print_min_max(my_numbers)
