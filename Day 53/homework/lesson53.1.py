#2) შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია და ფუნქცია დააბრუნებს ამ რიცხვების ჯამს
def sum():
    sum = 0
    different_numbers = [3, 7, 12, 18, 25, 30, 42, 50, 63, 77]
    for i in range (len(different_numbers)):
        sum = sum + different_numbers[i]
    print("Sum of different numbers:" + str(sum))

sum()