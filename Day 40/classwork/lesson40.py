#მომხმარებელს შემოვატანინოთ 10 რიცხვი შემდეგ დავამატოთ სიაში, გავფილტროთ ეს სია ორ ნაწილად ლუწებად და კენტებად და დავამატოთ ახალ სიაში ლუწები ცალკე კენტები ცალკე
list0 = []
for i in range (10):
    question = int(input("enter number:  "))
    list0.append(question)

list1 = []
list2 = []
for i in range (len(list0)):
    if list0[i] % 2 == 0:
        list1.append(list0[i])
    else:
        list2.append(list0[i])
print("ლუწებია", list1)
print("კენტებია", list2)