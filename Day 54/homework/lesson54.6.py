 #შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცხვს და დააბრუნებს True, თუ ის ლუწია  და False, თუ არა.
def true_false():
    number = int(input("Enter a number: "))

    if number % 2 == 0:
        return("true")
    else:
        return("false")