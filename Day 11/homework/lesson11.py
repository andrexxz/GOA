# სარეგისტრაციო ფორმა
correct_email = "example@example.com"  # სწორი ელფოსტის მაგალითი
correct_password = "password123"       # სწორი პაროლის მაგალითი

# მომხმარებლის მიერ შეყვანილი მონაცემები
email = input("შეიყვანეთ თქვენი ელფოსტა: ")
password = input("შეიყვანეთ თქვენი პაროლი: ")

# მონაცემების შემოწმება
if email == correct_email and password == correct_password:
    print(True)
else:
    print(False)
