question = input("სწავლობ გოაში(კი ან არა)?:  ")
answer = "კი"
answer1 = "არა"
answer02 = "13"

if question == answer:
   question1 = input("რომელ ჯგუფში ხარ?:  ")
   if question1 == answer02:
        question02 = input("ბატონი გაბრიელი გასწავლის?:  ")

   if question02 == answer:
        print("სწორია! მეც მასწავლის ბატონი გაბრიელი <3")

   if question02 == answer1:
        print("ნუ ტყუი!")
        question3 = input(" რომელ ჯგუფში ხარ?")
        
        if question3 == int:
           print("ესე არ ჯობია?გოაში არ იტყუებიან!<3")
elif question == answer1:
    print("მაშინ შემოუერთდი გოას")
else:
     print("კარგია")
#by ანდრია ქორჩილავა <3