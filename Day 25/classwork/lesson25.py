#დავალება: შექმენით list და შემდეგ გატესტეთ სლაისინგზე, გამოიტანეთ უკუღმა, თავიდან ბოლომდე და ასე შემდეგ რაც ვისწავლეთ.
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("სია: ", my_list)
print("თავიდან ბოლომდე: ", my_list[:])
print("პირველი 5 ელემენტი: ", my_list[:5])
print("ბოლო 5 ელემენტი: ", my_list[-5:])
print("თითოეული მეორე ელემენტი: ", my_list[::2])
print("სია უკუღმა: ", my_list[::-1])
print("ბოლო სამი ელემენტი უკუღმა: ", my_list[:-4:-1])
