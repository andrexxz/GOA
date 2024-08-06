#შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცვს და დააბრუნებს "მაგარია!", თუ რიცხვი 10-ზე მეტია.
def number():
    question = int(input("please enter number:  "))
    if question > 10:
        return("magaria")
    else:
        return("try again")    