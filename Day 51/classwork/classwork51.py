my_list = []


my_list.extend([1, 2, 3, 4, 5, 6, 7])


my_list[2] = 42

my_list.insert(4, 99)


my_list[5] = my_list[0]
my_list[0] = my_list[5]

print(my_list)