# Task 1: Format a String
name = input("Enter your name: ")
age = input("Enter your age: ")
print("Hello, {}! You are {} years old.".format(name, age))

# Task 2: Join a List of Strings
words = ["Python", "is", "fun"]
print(" ".join(words))

# Task 3: Split a String
sentence = input("Enter a sentence: ")
print(sentence.split())

# Task 4: Replace Substrings
sentence = input("Enter a sentence: ")
old_word = input("Word to replace: ")
new_word = input("New word: ")
print(sentence.replace(old_word, new_word))

# Task 5: Convert to Lowercase
mixed_case_string = input("Enter a mixed-case string: ")
print(mixed_case_string.lower())

# Task 6: Convert to Uppercase
sentence = input("Enter a sentence: ")
print(sentence.upper())
