#Bank System:

#1.create account
#2.Deposit
#3.Withdraw
#4.Exit

#თქვენი დავალება იქნება გააკეთოთ ბანკის სისტემა მოცემული სექციებით პითონში,რაც აქამდე ისწავლეთ გააკეთეთ იმ მასალით გამოიყენეთ თქვენი მაქსიმალური ცოდნა,მერე კი ჩვენ შევამოწმეთ თუ რა დონის ცოდნა გამოიყენეთ და იმის მიხედვით შეიგიმოწმებთ!!!
balance = 1500
name = input("enter new name:  ")
surname = input("enter new surname:  ")
age = int(input("enter age:  "))
gmail = input("enter new gmail:  ")
print("there must be minimum 8 numbers to enter")
password = input("enter new password:  ")
acception = input("did you accept our rules?:  ")

while acception != "yes":
    print("please accept")
    acception = input("accept our rules(yes): ")

print("you sucsesfully created the accaunt. now log in.")
gmail1 = input("enter gmail:  ")
while gmail1 != gmail:
    print("incorrect")
    gmail1 = input("enter gmail:  ")
password1 = input("enter password:  ")
while password1 != password:
    print("incorrect")
    password1 = input("enter password:  ")

print("hi " , name , surname , ". you have ", balance , "$ on your bank.")
question = input("what do you want?(withdraw/deposit)")
while question == "withdraw":
    question1 = int(input("ho much you want to windraw?:  "))
    while question1 > balance:
        print("you dont have that much money.")
        question1 = int(input("ho much you want to windraw?:  "))
    if question1 <= 0:
        print("ok then long out of the acc, because of safity")
        log_out = input("log out:")
        print("sucsesfully logged out. bie")

    else:
        print("you sucsesfully withdrawed " , question1 , "$.")
        balance -= question1
        question = input("something else?(withdraw/deposit/nothing)")
        if question == "nothing":
            log_out = input("log out:")
            print("sucsesfully logged out. bie")
while question == "deposit":
    deposit = int(input("enter how much you want to deposit:  "))
    balance += deposit
    question = input("something else?(withdraw/deposit/nothing)")
    if question == "nothing":
        print("ok, your balance is " , balance)
        log_out = input("log out:")
        print("sucsesfully logged out. bie")