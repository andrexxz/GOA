numbers = [-10,23,-2,45,34,-62,86,-70]
num_positive = []
num_negative = []

for i in range (len(numbers)):
    if numbers[i] > 0:
        num_positive.append(numbers[i])
    elif numbers[i] < 0:
        num_negative.append(numbers[i])


print(str(num_negative) + "is negative")
print(str(num_positive) + "is positive")