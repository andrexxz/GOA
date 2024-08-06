# 3) შექმენით ფუნქცია რომელშიც დააბრუნებს სიაში არსებული რიცხვების საშუალო არითმეტიკულკს
def average():
    sum = 0
    numbers = [10, 2, 9, 8, 10, 10, 10, 10, 9]
    average = 0
    for i in range (len(numbers)):
        sum = sum + numbers[i]
    average = sum / len(numbers)

    print("Average of numbers: " + str(average))

average()