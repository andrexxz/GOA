/*# Level 137:

# 1.  Set task:

1. Create a new set
2. add values to a set
3. chech of a value exist in set
4. Get the size of a Set
5. Delete a value from a Set
6. Clear all values from a Set
7. Iterate over values in a Set using forEach
8. Convert a Set to an Array
9. Find the union of two Sets
10. Find the intersection of two Sets

# - 

# 2. Set Task 2:

1. Create a Set with 5 numbers
Create a new Set that contains the numbers: 1, 2, 3, 4, and 5.

2. Add an item to a Set
Start with a Set of fruits ("apple", "banana") and add "orange" to it.

3. Try to add a duplicate item
Add "apple" again to the same Set and print it. What happens?

4. Check if a Set has a specific value
Check if "banana" exists in the Set.

5. Remove an item from a Set
Remove "banana" from the Set and print the result.

6. Loop through a Set
Use for...of to print every item in a Set of your favorite colors.

7. Convert a Set to an Array
Take a Set of 3 names and convert it into an array using the spread operator.

8. Remove duplicates from an array using Set
Given an array with duplicates, like [1, 2, 2, 3, 3, 4], use a Set to remove duplicates.

9. Count unique items using Set
Given an array ['a', 'b', 'a', 'c', 'b'], how many unique letters are there?

10. Clear all items from a Set
Create a Set, fill it with a few items, then clear it completely.

# -

# 3. Set Task 3:

1. Create an empty Set
 Create a new empty Set and log it.

2. Add items to a Set
 Add "cat", "dog", and "parrot" to a Set.

3. Check if a Set has an item
 Use .has() to check if "dog" exists in the Set.

4. Remove an item from a Set
 Use .delete() to remove "parrot" from the Set.

5. Find the size of a Set
 Log how many items are in the Set using .size.

6. Loop through a Set
 Use for...of to print each item in a Set of numbers.

7. Clear a Set
 Use .clear() to remove all items from a Set.

8. Create a Set from an array
 Convert [1, 2, 2, 3, 4, 4] to a Set and log it.

9. Convert a Set to an array
 Use the spread operator to turn a Set into an array.

10. Check for duplicates using Set
 Write a function that checks if an array has duplicates using a Set.
 
 # - 

# 4. Set Task 4:
 
Medium-Level JavaScript Set Tasks

1. Get unique words from a sentence
 Given a string: "The sun shines and the moon glows", split it into words and use a Set to find all unique words.

2. Find the intersection of two Sets
 Write a function that takes two Sets and returns a new Set containing only the values found in both.

3. Find the difference between two Sets
 Create a function that returns values that are in Set A but not in Set B.

4. Count unique characters in a string
 Write a function that returns how many unique characters are in a given string using a Set.

5. Check if two arrays contain the same unique elements
 Write a function that takes two arrays and returns true if they have the same values (ignoring order and duplicates).

6. Remove duplicates from a 2D array
 Given an array like [[1, 2], [2, 3], [1, 2]], remove duplicate subarrays (hint: serialize subarrays as strings, use Set).

7. Filter out duplicate objects by a key
 Given an array of objects like [{id: 1}, {id: 2}, {id: 1}], filter it so that each id is unique.

8. Track unique visitors to a website
 Simulate a list of usernames visiting a website and use a Set to count how many unique users visited.

9. Create a Set of numbers divisible by both 3 and 5 from an array
 From an array of random numbers, use Set to extract only those divisible by both 3 and 5 (no duplicates).

10. Check if all characters in a word are unique
 Write a function that returns true if all characters in a word are unique (like "lamp"), false if not (like "moon").*/
 // Level 137: Set Tasks

 class SetTasks {
     constructor() {
         this.set = new Set();
     }

     addValue(value) {
         this.set.add(value);
     }

     hasValue(value) {
         return this.set.has(value);
     }

     getSize() {
         return this.set.size;
     }

     deleteValue(value) {
         this.set.delete(value);
     }

     clearSet() {
         this.set.clear();
     }

     iterateValues() {
         this.set.forEach(value => console.log(value));
     }

     convertToArray() {
         return Array.from(this.set);
     }

     union(otherSet) {
         return new Set([...this.set, ...otherSet]);
     }

     intersection(otherSet) {
         return new Set([...this.set].filter(x => otherSet.has(x)));
     }
 }
    // Example usage
    const setTasks = new SetTasks();
    setTasks.addValue(1);
    setTasks.addValue(2);
    setTasks.addValue(3);
    setTasks.addValue(4);
    setTasks.addValue(5);
    console.log("Set contains 3:", setTasks.hasValue(3)); // true
    console.log("Size of set:", setTasks.getSize()); // 5
    setTasks.deleteValue(3);
    console.log("Set after deleting 3:", setTasks.convertToArray()); // [1, 2, 4, 5]
    setTasks.clearSet();
    console.log("Set after clearing:", setTasks.convertToArray()); // []
    setTasks.addValue("apple"); 
    setTasks.addValue("banana");
    setTasks.addValue("orange");
    console.log("Set after adding fruits:", setTasks.convertToArray()); // ["apple", "banana", "orange"]
    setTasks.iterateValues(); // Prints each fruit in the set
    const anotherSet = new Set(["banana", "kiwi", "orange"]);
    const unionSet = setTasks.union(anotherSet);
    console.log("Union of sets:", Array.from(unionSet)); // ["apple", "banana", "orange", "kiwi"]
    const intersectionSet = setTasks.intersection(anotherSet);  
    console.log("Intersection of sets:", Array.from(intersectionSet)); // ["banana", "orange"]
    // Level 137: Set Task 2
    class SetTask2 {
        constructor() {
            this.set = new Set();
        }

        addItem(item) {
            this.set.add(item);
        }

        hasItem(item) {
            return this.set.has(item);
        }

        removeItem(item) {
            this.set.delete(item);
        }

        getSize() {
            return this.set.size;
        }

        iterateItems() {
            for (const item of this.set) {
                console.log(item);
            }
        }

        convertToArray() {
            return Array.from(this.set);
        }

        removeDuplicates(array) {
            return Array.from(new Set(array));
        }

        countUniqueItems(array) {
            return new Set(array).size;
        }
    }
    // Example usage
    const setTask2 = new SetTask2();
    setTask2.addItem(1);
    setTask2.addItem(2);
    setTask2.addItem(3);
    setTask2.addItem(4);
    setTask2.addItem(5);
    console.log("Set after adding numbers:", setTask2.convertToArray()); // [1, 2, 3, 4, 5]
    setTask2.addItem("apple");
    setTask2.addItem("banana");
    setTask2.addItem("orange");
    console.log("Set after adding fruits:", setTask2.convertToArray()); // ["apple", "banana", "orange"]
    setTask2.addItem("apple"); // Adding duplicate
    console.log("Set after adding duplicate apple:", setTask2.convertToArray()); // ["apple", "banana", "orange"]
    console.log("Does set have banana?", setTask2.hasItem("banana")); // true
    setTask2.removeItem("banana");
    console.log("Set after removing banana:", setTask2.convertToArray()); // ["apple", "orange"]
    console.log("Iterating over items in set:");
    setTask2.iterateItems(); // Prints each item in the set
    const namesArray = ["Alice", "Bob", "Alice", "Charlie"];    
    const uniqueNames = setTask2.removeDuplicates(namesArray);
    console.log("Unique names from array:", uniqueNames); // ["Alice", "Bob", "Charlie"]
    const lettersArray = ['a', 'b', 'a', 'c', 'b'];
    const uniqueLettersCount = setTask2.countUniqueItems(lettersArray);
    console.log("Count of unique letters:", uniqueLettersCount); // 3
    const numbersArray = [1, 2, 2, 3, 3, 4];
    const uniqueNumbersSet = new Set(numbersArray);
    console.log("Set from array with duplicates removed:", Array.from(uniqueNumbersSet)); // [1, 2, 3, 4]
    // Level 137: Set Task 3
    class SetTask3 {
        constructor() {
            this.set = new Set();
        }

        addItem(item) {
            this.set.add(item);
        }

        hasItem(item) {
            return this.set.has(item);
        }

        removeItem(item) {
            this.set.delete(item);
        }

        getSize() {
            return this.set.size;
        }

        iterateItems() {
            for (const item of this.set) {
                console.log(item);
            }
        }

        clearSet() {
            this.set.clear();
        }

        convertToArray() {
            return Array.from(this.set);
        }
    }
    // Example usage
    const setTask3 = new SetTask3();    
    setTask3.addItem("cat");
    setTask3.addItem("dog");
    setTask3.addItem("parrot");
    console.log("Set after adding animals:", setTask3.convertToArray()); // ["cat", "dog", "parrot"]
    console.log("Does set have dog?", setTask3.hasItem("dog")); // true
    setTask3.removeItem("parrot");  
    console.log("Set after removing parrot:", setTask3.convertToArray()); // ["cat", "dog"]
    console.log("Size of set:", setTask3.getSize()); // 2
    console.log("Iterating over items in set:");
    setTask3.iterateItems(); // Prints each item in the set 
    setTask3.clearSet();
    console.log("Set after clearing:", setTask3.convertToArray()); // []
    console.log("Set from array with duplicates removed:", Array.from(uniqueNumbersSet)); // [1, 2, 3, 4]
    const setFromArray = new Set(uniqueNumbersSet);
    console.log("Set created from array:", Array.from(setFromArray)); // [1, 2, 3, 4]
    const setToArray = [...setFromArray];
    console.log("Array from set:", setToArray); // [1, 2, 3, 4]
    // Check for duplicates using Set
    function hasDuplicates(array) {
        const uniqueItems = new Set(array);
        return uniqueItems.size !== array.length;
    }
    // Example usage of hasDuplicates
    const arrayWithDuplicates = [1, 2, 2, 3, 3, 4];
    console.log("Does the array have duplicates?", hasDuplicates(arrayWithDuplicates)); // true
    const arrayWithoutDuplicates = [1, 2, 3, 4];
    console.log("Does the array have duplicates?", hasDuplicates(arrayWithoutDuplicates)); // false
    // Level 137: Set Task 4
    class SetTask4 {
        constructor() {
            this.set = new Set();
        }

        addWords(sentence) {
            const words = sentence.split(" ");
            words.forEach(word => this.set.add(word));
        }

        getUniqueWords() {
            return Array.from(this.set);
        }

        intersection(otherSet) {
            return new Set([...this.set].filter(x => otherSet.has(x)));
        }

        difference(otherSet) {
            return new Set([...this.set].filter(x => !otherSet.has(x)));
        }

        countUniqueCharacters(string) {
            return new Set(string).size;
        }

        sameUniqueElements(array1, array2) {
            const set1 = new Set(array1);
            const set2 = new Set(array2);
            return set1.size === set2.size && [...set1].every(item => set2.has(item));
        }
    }
    // Example usage
    const setTask4 = new SetTask4();
    setTask4.addWords("The sun shines and the moon glows");
    console.log("Unique words in sentence:", setTask4.getUniqueWords()); // ["The", "sun", "shines", "and", "the", "moon", "glows"]
    console.log("Intersection of sets:", Array.from(intersectionSet)); // ["sun", "moon"]
    const differenceSet = setTask4.difference(anotherSet);
    console.log("Difference of sets:", Array.from(differenceSet)); // ["The", "shines", "and", "the", "glows"]
    const uniqueCharCount = setTask4.countUniqueCharacters("hello world");
    console.log("Count of unique characters in 'hello world':", uniqueCharCount); // 10
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];
    const sameUnique = setTask4.sameUniqueElements(array1, array2);
    console.log("Do both arrays have the same unique elements?", sameUnique); // true
    const array3 = [1, 2, 3, 4];
    const sameUnique2 = setTask4.sameUniqueElements(array1, array3);
    console.log("Do both arrays have the same unique elements?", sameUnique2); // false
    const arrayWithSubarrays = [[1, 2], [2, 3], [1, 2]];
    const uniqueSubarrays = Array.from(new Set(arrayWithSubarrays.map(JSON.stringify))).map(JSON.parse);
    console.log("Unique subarrays:", uniqueSubarrays); // [[1, 2], [2, 3]]
    const objectsArray = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const uniqueObjects = Array.from(new Set(objectsArray.map(obj => JSON.stringify(obj)))).map(JSON.parse);
    console.log("Unique objects by id:", uniqueObjects); // [{ id: 1 }, { id: 2 }]
    const visitors = new Set(); 
    visitors.add("user1");
    visitors.add("user2");
    visitors.add("user1"); // Duplicate, won't be added
    console.log("Unique visitors:", Array.from(visitors)); // ["user1", "user2"]
    const randomNumbers = [15, 30, 45, 60, 75, 90];
    const divisibleBy3And5 = new Set(randomNumbers.filter(num => num % 3 === 0 && num % 5 === 0));
    console.log("Numbers divisible by both 3 and 5:", Array.from(divisibleBy3And5)); // [15, 30, 45, 60, 75, 90]
    function allUniqueCharacters(word) {
        const charSet = new Set(word);
        return charSet.size === word.length;
    }       
    // Example usage of allUniqueCharacters
    console.log("Are all characters in 'lamp' unique?", allUniqueCharacters("lamp"));
    console.log("Are all characters in 'moon' unique?", allUniqueCharacters("moon")); // false