#შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს და თუ ის დადებითი იქნება, დააბრუნებს "დადებითი", და თუ უარყოფითი იქნება, "უარყოფითი".
def number():
    question0 = int(input("please enter number:  "))
    if question0 < 0:
        return("uaryofiti")
    elif 0 < question0:
        return("dadebiti")