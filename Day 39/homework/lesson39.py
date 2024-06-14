input0 = int(input("no1 number:  "))
input1 = int(input("no2 number:  "))
input2 = int(input("no3 number:  "))
input3 = int(input("no4 number:  "))
input4 = int(input("no5 number:  "))
input5 = int(input("no6 number:  "))
input6 = int(input("no7 number:  "))
input7 = int(input("no8 number:  "))
input8 = int(input("no9 number:  "))
input9 = int(input("no10 number:  "))


numbers = [input0, input1, input2, input3, input4, input5, input6, input7, input8, input9]

for i in range(len(numbers)):
    if numbers[i] > 100:
        print("100ზე მეტი რიცხვია:"+ str(numbers[i]))
    elif numbers[i] < 100:
        print("100ზე ნაკლები რიცხვია:"+ str(numbers[i]))