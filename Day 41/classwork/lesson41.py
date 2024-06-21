#გადმოგვეცემა რიცხვებით სავსე სია, ჩვენ უნდა შევქმნათ ახალი სია და ამ სიაში უნდა დავამატოთ უკვე არსებული სიის ელემენტები შემოტრიალებული სახით, reverse
numbers = [1,2,3,4,5,6,7,8,9,10]
upsite_down_list = []
for i in range (len(numbers)):
    upsite_down_list.append(numbers[-i-1])
print(upsite_down_list)
