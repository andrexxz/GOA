# 0
# მოცემულია სია, რომელშიც მოთავასებულია 10 ელემენტი ჩვენ ეს ელემეტები უნდა დავპრინტოთ
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for item in my_list:
    print(item)

# 1
# შევქმნათ ცარიელი სია, მომხმარებელს შევეკითხოთ 1000 ჯერ თუ რისი დამატება სურს სიაში ❤️
for i in range (1000):
    question = input("risi damateba ginda inputsi?:  ")
# 2
# შევქმანათ ცარიელი სია, სადაც დავამატებთ მომხარებლის მიერ არჩეულ სიტყვას მაგრამ ყურადღებით იყავით რომ ეს სიტყვა არ აღემატებოდეს 6 ასოს 
input = input("enter somethng:")
while len(input) <= 6:
    input = input("enter somethng but only 6 words:")

# 3
# შევქმნათ ცარიელი სია, სიაში დავამატოთ, კიდევ 2 სია და გადავატაროთ for loop ში 
empty_list = []

empty_list.append("პირველი ელემენტი")
empty_list.append("მეორე ელემენტი")

another_list = [10, 20, 30]

combined_list = empty_list + another_list

for item in combined_list:
    print(item)

# 4
# შექმნილი არის სია სადაც წერია, ჩვენი სახელი და გვარი, str სახით 
# ჩვენი მიზანია, რომ წამოვიღოთ ეს სტრინგები და შევართოთ ერთ ცვლადში
first_name = "გიო"
last_name = "გრიგოლია"
full_name = first_name + " " + last_name
print(full_name)
#5
#შექმენით ქართული მამაპაპური list დაარქვით S_A_Q_A_R_T_V_E_L_O
#შეეკითხეთ მომხმარებელს ქართველი ფეხბურთელების სახელები 12 ჯერ და დაამატეთ სიაში
# ფეხბურთელების სახელები
georgian_footballers = []
for i in range (12):
    question = input("enter footballer")
    georgian_footballers.append(question)


for player in georgian_footballers:
    print(player)
