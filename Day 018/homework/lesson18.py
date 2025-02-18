# 1. რიცხვების გამოტანა დიაპაზონში
for i in range(1, 11):
    print(i)

# 2. წყვილი რიცხვების გამოტანა
for i in range(2, 21, 2):
    print(i)

# 3. უცნაური რიცხვების გამოტანა
for i in range(1, 20, 2):
    print(i)

# 4. რიცხვების კვადრატის გამოთვლა
for i in range(1, 11):
    print(i**2)

# 5. სტრიქონის სიმბოლოების გამოტანა
word = "Andria"
for char in word:
    print(char)

# 6. სიის ელემენტების გამოტანა
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    print(num)

# 7. სიის ელემენტების ჯამი
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
print("Total:", total)

# 8. მარტივი რიცხვების გამოტანა დიაპაზონში
for num in range(2, 20):
    for i in range(2, num):
        if num % i == 0:
            break
    else:
        print(num)

# 9. ამოცანების სიის შესრულება
tasks = ["Wake up", "Brush teeth", "Exercise", "Breakfast"]
for task in tasks:
    print(f"Task: {task}")

# 10. სტრიქონის საპირისპირო გამოტანა
word = "Korchliava"
for char in reversed(word):
    print(char)

# While Loop მაგალითები

# 1. რიცხვების გამოტანა დიაპაზონში
i = 1
while i <= 10:
    print(i)
    i += 1

# 2. რიცხვების ჯამი დიაპაზონში
i = 1
total = 0
while i <= 10:
    total += i
    i += 1
print("Total:", total)

# 3. წყვილი რიცხვების გამოტანა
i = 2
while i <= 20:
    print(i)
    i += 2

# 4. ზარის ტონის გამოტანა რამდენჯერმე
count = 5
while count > 0:
    print("Ring!")
    count -= 1

# 5. რიცხვების საპირისპირო გამოტანა
i = 10
while i >= 1:
    print(i)
    i -= 1

# 6. მომხმარებლის სახელი და პაროლი
username = ""
while username != "Andria":
    username = input("Enter username: ")
print("Welcome, Andria!")

# 7. სტრიქონის სიმბოლოების გამოტანა
word = "Hello"
i = 0
while i < len(word):
    print(word[i])
    i += 1

# 8. სტრიქონის სიმბოლოების საპირისპირო გამოტანა
word = "Python"
i = len(word) - 1
while i >= 0:
    print(word[i])
    i -= 1

# 9. რიცხვების გამოტანა მრავალჯერ
number = 3
count = 1
while count <= 5:
    print(number)
    count += 1

# 10. რიცხვების გამოტანა გამოსვლის პირობამდე
number = 1
while number != 0:
    number = int(input("Enter a number (0 to quit): "))
    print(f"You entered: {number}")
