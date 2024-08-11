def user_info(name, surname, age, residence):
    return f"გამარჯობა {name} {surname}, შენ ცხოვრობ {residence}-ში და შენი ასაკია {age} წელი."

name = input("შეიყვანეთ თქვენი სახელი: ")
surname = input("შეიყვანეთ თქვენი გვარი: ")
age = input("შეიყვანეთ თქვენი ასაკი: ")
residence = input("შეიყვანეთ თქვენი საცხოვრებელი: ")

print(user_info(name, surname, age, residence))