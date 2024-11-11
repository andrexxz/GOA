import os
import json

# მომხმარებლის მონაცემების შესანახი ფაილი
users_file = "users.json"

# მომხმარებლის მონაცემების შეგროვების ფუნქცია
def register_user():
    username = input("შეიყვანეთ მომხმარებლის სახელი: ")
    password = input("შეიყვანეთ პაროლი: ")

    if not username or not password:
        print("მომხმარებლის სახელი და პაროლი აუცილებელია!")
        return None

    # მომხმარებლის მონაცემების შემოწერა
    user = {
        "username": username,
        "password": password
    }
    return user

# მომხმარებლის რეგისტრაცია
def register():
    print("რეგისტრაციის პროცესი:")
    user = register_user()

    if user:
        if os.path.exists(users_file):
            with open(users_file, "r") as file:
                users = json.load(file)
        else:
            users = []

        users.append(user)

        with open(users_file, "w") as file:
            json.dump(users, file, indent=4)
        print("რეგისტრაცია წარმატებით დასრულდა!")

# მომხმარებლის შესვლა
def login():
    print("შესვლის პროცესი:")
    username = input("მომხმარებლის სახელი: ")
    password = input("პაროლი: ")

    if os.path.exists(users_file):
        with open(users_file, "r") as file:
            users = json.load(file)

        for user in users:
            if user["username"] == username and user["password"] == password:
                print("შესვლა წარმატებით განხორციელდა!")
                return True
        print("მომხმარებლის სახელი ან პაროლი არასწორია!")
    else:
        print("მომხმარებლების მონაცემების ფაილი არ არსებობს!")
    return False

# პროგრამის მთავარ ფუნქციაში მომხმარებლის არჩევანი
def main():
    while True:
        print("\n1. რეგისტრაცია")
        print("2. შესვლა")
        print("3. გამოსვლა")
        choice = input("აირჩიეთ მოქმედება (1/2/3): ")

        if choice == "1":
            register()
        elif choice == "2":
            if login():
                print("თქვენ წარმატებით ჩაატარეთ შესვლა!")
        elif choice == "3":
            print("გამოსვლა...")
            break
        else:
            print("არასწორი არჩევანი, სცადეთ თავიდან.")

if __name__ == "__main__":
    main()
