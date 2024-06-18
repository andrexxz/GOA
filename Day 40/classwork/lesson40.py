odds = []
evens = []

for i in range(10):
    num = int(input(f"Enter number {i+1}: "))
    if num % 2 == 0:
        evens.append(num)
    else:
        odds.append(num)

print("Odd numbers:", odds)
print("Even numbers:", evens)
