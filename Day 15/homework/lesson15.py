#1)
for i in range(2, 51, 4):
    print(i)
#2)
for i in range(10):
    print(f"{i} GOA")
#3)
# ლუწი რიცხვები
print("ლუწი რიცხვები:")
for i in range(2, 51, 2):
    print(i)

# კენტი რიცხვები
print("\nკენტი რიცხვები:")
for i in range(1, 51, 2):
    print(i)
#4)
secret_number = 25  # ეს იქნება რიცხვი, რომელიც უნდა გამოიცნოს

while True:
    guess = int(input("შეიყვანეთ რიცხვი: "))
    if guess == secret_number:
        print("გილოცავთ! სწორად გამოიცანით რიცხვი.")
        break
    else:
        print("არასწორია, სცადეთ ისევ.")
