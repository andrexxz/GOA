#შექმენი ფუნქცია, რომელიც შემოატანინებს მომხმარებელს რიცხვის და დაუმატებს მას 1-ს.

def plus_one():
    question = int(input("please enter number:  "))
    question = question + 1
    return question
    

print(plus_one())