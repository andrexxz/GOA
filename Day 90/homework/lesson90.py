# 3) რისთვის გვჭირდება Tuple და Set

# Tuple (ტუფლი)
# - Tuple არის immutable (გაუმჯობესებელი), ანუ მისი ელემენტები არ იცვლება მასში შესვლის შემდეგ.
# - გამოიყენება, როდესაც არ გვინდა მონაცემების შეცვლა.
# - მაგალითად: (3, 'apple', 5.6)

# Set (სეტა)
# - Set არის კოლექცია უნიკალური ელემენტებით, რომელშიც არ შეიძლება დუპლიკატების არსებობა.
# - გამოიყენება მაშინ, როდესაც არ გვინდა რეპეტიცია.
# - Set არ ინახავს ელემენტების რიგს.

# 4) Tuple Destructuring:

# პირველი მაგალითი
my_tuple = (1, 2, 3)
a, b, c = my_tuple
print(a)  # 1
print(b)  # 2
print(c)  # 3

# მეორე მაგალითი
my_tuple = (10, 20)
x, y = my_tuple
print(x)  # 10
print(y)  # 20

# მესამე მაგალითი (მოხმარება _ უნიშნა ელემენტებზე)
my_tuple = (5, 10, 15, 20)
a, _, c, _ = my_tuple
print(a)  # 5
print(c)  # 15

# 5) List-ი დუპლიკატებით და set() გამოყენება

list1 = [1, 2, 2, 3, 4, 4, 5]
print(set(list1))  # {1, 2, 3, 4, 5}

# კომენტარი:
# set() ავტომatically წყვეტს დუპლიკატებს და ინახავს მხოლოდ უნიკალურ ელემენტებს.
# set() არ ინახავს ელემენტების რიგს, ამიტომ შედეგი შეიძლება განსხვავებული იყოს, მიუხედავად რომელი ელემენტებია პირველ რიგში.