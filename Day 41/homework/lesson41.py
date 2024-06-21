numbers = [12,35,66,90,75,54,33,74,42,45]
numbers5 = []


for i in range (len(numbers)):
    if numbers[i] % 5 == 0:
        numbers5.append(numbers[i])

answer = numbers5[0] + numbers5[1] + numbers5[2] + numbers5[3]
print(answer)        