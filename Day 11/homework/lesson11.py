#მომხარებელს შემოატანინეთ მშობლების ასაკი, დედის და მამის ასაკი, შემდეგ თუ დედის ასაკი მეტი იქნება მამის ასაკზე დაგვიბეჭდოს რომ დედა დიდი მამაზე, თუ პირიქით მამის ასაკი მეტი იქნება დედის ასაკზე მაგ შემთხვევაში დაგვიბეჭდოს რომ მამა დიდია დედაზე. მინიშნება დაგჭირდებათ (if)

moms_age = int(input("how old are your mom?:  "))
dads_age = int(input("how old are your dad?:  "))

if moms_age > dads_age:
    print("mom is older than dad")

if moms_age < dads_age:
    print("dad is older than mom")
