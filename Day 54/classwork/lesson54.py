#1) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს და დააბრუნებს მათ ჯამს
def sum_of_two_numbers(a, b):
    return a + b
#2) მომხმარებელს შეეკითეთ სახელი, გვარი, ასაკი, საცხოვრებელი, შემდეგ შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ მონაცემებს და ეს ფუნქცია დააბრუნებს ერთ გრძელ წინადადებას მომხმარებლის შესახებ მაგ. hello {სახელი} {გვარი} შენ ცხოვრობ {საცხოვრებელი}
def greet_user(name, surname, age, location):
    return f"Hello, {name} {surname}! You are {age} years old and currently living in {location}."

user_info = {
    "გიორგი",
    "მარინაშვილი",
    30,
    "თბილისი"
}

result = greet_user(user_info)
print(result)
