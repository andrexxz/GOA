# Classwork 2: Basic List Operations
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(fruits)
print(fruits[0])
print(fruits[-1])
fruits.append("fig")
print(fruits)
fruits.remove("banana")
print(fruits)
fruits[1] = "blueberry"
print(fruits)
print(len(fruits))

# Classwork 3: List Functions and Methods
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers.append(100)
print(numbers)
numbers.insert(0, 5)
print(numbers)
numbers.remove(30)
print(numbers)
numbers.sort()
print(numbers)
numbers.reverse()
print(numbers)
print(numbers.index(50))
print(numbers.count(20))

# Classwork 4: Slicing and List Comprehensions
numbers = list(range(1, 11))
first_half = numbers[:5]
second_half = numbers[5:]
squares = [num ** 2 for num in numbers]
print(first_half)
print(second_half)
print(squares)

# Classwork 5: List Manipulation and Aggregation
temperatures = [72, 68, 75, 70, 78, 74, 71]
print(max(temperatures))
print(min(temperatures))
print(sum(temperatures) / len(temperatures))
above_70 = [temp for temp in temperatures if temp > 70]
print(above_70)
