# მომხმარებელს შემოატანინეთ 2 რიცხვი
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# არითმეტიკული ოპერაციები
print(f"ჯამი: {num1 + num2}")
print(f"გამოკლება: {num1 - num2}")
print(f"გამრავლება: {num1 * num2}")
print(f"განაყოფი: {num1 / num2}" if num2 != 0 else "განაყოფი: განაწილება 0-ზე შეუძლებელია")


# მომხმარებლისთვის კალკულატორის ფუნქციები
print("კალკულატორი")
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
operation = input("შეიყვანეთ ოპერაცია (+, -, *, /): ")
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# ოპერაციის ამორჩევა და შედეგის გამოტანა
if operation == "+":
    print(f"შედეგი: {num1 + num2}")
elif operation == "-":
    print(f"შედეგი: {num1 - num2}")
elif operation == "*":
    print(f"შედეგი: {num1 * num2}")
elif operation == "/" and num2 != 0:
    print(f"შედეგი: {num1 / num2}")
else:
    print("არასწორი ოპერაცია ან 0-ზე გაყოფა.")


# მომხმარებლის ასაკის შეყვანა
age = int(input("შეიყვანეთ თქვენი ასაკი: "))
# ასაკის გამოთვლა 10 წლის შემდეგ
print(f"10 წლის შემდეგ თქვენ იქნებით {age + 10} წლის.")

# სხვადასხვა მონაცემთა ტიპების ცვლადები
name = "ნინო"  # ტექსტი (სტრინგი)
age = 25       # მთელი რიცხვი (int)
height = 1.68  # ათწილადი (float)
is_student = False  # ბულეანი (boolean)
hobbies = ["მოგზაურობა", "კითხვა", "ფეხბურთი"]  # სია (list)

# მონაცემთა ტიპების გამოტანა
print(f"name (სახელი) ტიპია: {type(name)}")
print(f"age (ასაკი) ტიპია: {type(age)}")
print(f"height (სიმაღლე) ტიპია: {type(height)}")
print(f"is_student (სტუდენტია) ტიპია: {type(is_student)}")
print(f"hobbies (გატაცებები) ტიპია: {type(hobbies)}")

