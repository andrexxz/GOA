#მომხმარებელს შემოატანინეთ ორი ბულიან ტიპის მნიშვნელობა, შემდეგ კი დაბეჭდეთ ერკანზე ეს მნიშვნელობე(true, false)ბი      შედარებული ერთმანეთზე, ამისთვის გამოიყენეთ ლოგიკური ოპერატორები (and და or)'


number1 = int(input("number 1:  "))
number2 =  int(input("number 2:  "))
number3 = int(input("number 3:  "))
# answer1 = question1 and question2
# answer2 = question1 or question2

# print(answer1)
# print(answer2)

# print(type(question1))
# print(type(question2))
answer1 = number1 < number2
answer2 = number2 > number3

print(answer1 and answer2)
print(answer1 or answer2)