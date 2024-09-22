# შევქმნათ სია, შემდეგ მომხმარებელს შემოვატანინოთ 10 რიცხვი, ეს 10 რიცხვი დავამატოთ სიაში, შევქმნათ მეორე სია სადაც დავამტებთ წინა სიიდან ყველა ლუწ რიცხვს, ასევე შევქმნათ მესამე სია სადაც დავამატებთ პირველი სიიდან ველა კენტ რიცხვს
#anime = ["lufi", "naruto", "zoro"]

#anime.append("kakashy")

#anime.append("sangy")

#anime.append("usop")
#print(anime)

list1 = [] 
for i in range(10):
    num = int(input("შემოიყვანეთ რიცხვი: "))
    list1.append(num) 

list2 = [] 
for num in list1:
    if num % 2 == 0:
        list2.append(num) 

list3 = [] 
for num in list1:
    if num % 2 != 0:
        list3.append(num) 

print("პირველი სია: ", list1)

print("ლუწ რიცხვების სია: ", list2)

print("კენტ რიცხვების სია: ", list3)


number = 5
number = 2
number = 7
number = 8
number = 1
number = 6
number = 4
number = 3
number = 9
number = 10

list1 = [5, 2, 7, 8, 1, 6, 4, 3, 9, 10]
list2 = [2, 8, 6, 4, 10]#luwebis sia
list = [5, 7, 1, 3, 9]#kenti ricxvebis sia