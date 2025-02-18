correct_age = 14 


for attempt in range(2):
    age = int(input("შეიყვანეთ თქვენი ასაკი: "))
    
    if age == correct_age:
        print(True)
    else:
        if attempt == 0:
            print("არასწორია, კიდევ სცადეთ.")
        else:
            print(False)
