#1)შექმენით სია, რომელიც თავდაპირველად იქნება ცარიელი შემდეგ კი ამ სიაში ჩაამატეთ 10 ელემენტი 
#empty_list = []
#for i in range (10):
#   empty_list.append(i + 1)
#print(empty_list)

#2) შექმენით ორი სია ერთში თქვენი ხელით ჩაწერეთ ლუწი რიცხვები, მეორეში კენტი რიცხვები შემდეგ კი ეს ორი სია გააერთიანეთ extend ის გამოყენებით 

#combined_list = []
#even_numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
#odd_numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
#combined_list.extend(even_numbers)
#combined_list.extend(odd_numbers)
#print(combined_list)

#3) შექმენით სია რომელშიც იქნება 20 ელემენტი, შემდეგ კი დაბეჭდეთ თითოეული სათითაოდ for loop ის გამოყენებით
#twenty_elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
#for i in range (len(twenty_elements)):
#    print(twenty_elements[i])

#4)შექმენით რიცხვებით სავსე სია რომელშიც იქნება 1 დან 20 მდე ყველა რიცხვი, შემდეგ კი ამ სიიდან ამოშალეთ ყველა კენტი რიცხვი და დაამატეთ ახალ სიაში, ორივე სია დაბეჭდეთ.
#sum = 0
#numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
#for i in range (len(numbers)):
#    sum = sum + numbers[i]
#print("Sum of even numbers from 1 to 20:" + str(sum))

#5)შექმენით სია რომელშიც იქნება 10 განსხვავებული რიცხვი შემდეგ კი დაბეჭდეთ ყველა ლისტის ელემენტის ჯამი 
#sum = 0
#different_numbers = [3, 7, 12, 18, 25, 30, 42, 50, 63, 77]
#for i in range (len(different_numbers)):
#    sum = sum + different_numbers[i]
#print("Sum of different numbers:" + str(sum))

#6) შექმენით რიცხვებით სავსე სია, გამოითვალეთ ამ სიის ელემენტების საშუალო არითმეტიკული 

sum = 0
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
average = 0
for i in range (len(numbers)):
    sum = sum + numbers[i]
average = sum / len(numbers)

print("Average of numbers from 1 to 20: " + str(average))
