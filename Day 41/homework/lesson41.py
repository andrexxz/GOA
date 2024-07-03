#გადმოგვეცემა რიცხვებით სავსე სია, ჩვენ ამ სიიდან უნდა შევკრიბოთ ყველა ხუთის ჯერადი რიცხვი და დავბეჭდოთ მათი ჯამი
numbers = [12,35,66,90,75,54,33,74,42,45]
numbers5 = []
answer = []

for i in range (len(numbers)):
    if numbers[i] % 5 == 0:
        numbers5.append(numbers[i])
print(numbers5)
for m in range (len(numbers5)):
    answer = answer + numbers5[m]
print(answer)