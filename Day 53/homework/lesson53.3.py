# 4) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს და შემდეგ კი დააბრუნებს დაბეჭდავს მომხმარებლის შემოტანილი რიცხვი კენტია თუ ლუწი
def odd_even():
    number = int(input("Enter a number: "))

    if number % 2 == 0:
        print(number," is Even.")
    else:
        print(number, "is Odd.")