// # Very Basic — 15 Questions

// ### 1. Reverse a String
// Given a string, reverse the string.

// **Input:** `"hello"`
// **Output:** `"olleh"

// let string="hello"
// let reverse=""

// for(let i=string.length-1;i>=0;i--){
//     reverse=reverse+string[i]
// }
// console.log(reverse)

// ### 2. Check if a String is a Palindrome
// Check whether the given string reads the same forwards and backwards.

// **Input:** `"madam"`
// **Output:** `true`

// let string="madam"
// let reverse=""
// for(let i=string.length-1;i>=0;i--){
//     reverse=reverse+string[i]
// }
// if(reverse==string){
//     console.log(true)
// }else{
//     console.log(false)
// }

// ### 3. Count Vowels and Consonants
// Count the number of vowels and consonants in a given string.

// **Input:** `"javascript"`
// **Output:** `Vowels: 3, Consonants: 7`

//let str="javascript"
// let vowels = 0
// let consonants = 0

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] === "a" ||
//         str[i] === "e" ||
//         str[i] === "i" ||
//         str[i] === "o" ||
//         str[i] === "u"){
//              vowels++;
//     } else {
//         consonants++;
//     }
// }
// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);


// ### 4. Find Factorial of a Number
// Find the factorial of a given number.
// **Input:** `5`
// **Output:** `120`
// let n=5
// let factorial=1

// for(let i=1;i<=n;i++){
//     factorial=factorial*i
// }
// console.log(factorial)


// ### 5. Generate Fibonacci Sequence up to N Generate the Fibonacci sequence containing N numbers.
// **Input:** `6`
// **Output:** `[0, 1, 1, 2, 3, 5]`



// ### 6. Check if a Number is Prime
// Check whether the given number is prime.
// **Input:** `7`
// **Output:** `true`

// let number=7
// let isPrime

// ### 7. Find Largest and Smallest Number in an Array
// Find the largest and smallest numbers in the given array.
// **Input:** `[3, 9, 1, 44, 6]`
// **Output:** `Largest: 44, Smallest: 1`

// ### 8. Find Sum of Elements in an Array
// Calculate the sum of all elements in the array.
// **Input:** `[1, 2, 3, 4]`
// **Output:** `10`

// const arr=[1,2,3,4]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

// ### 9. Find Average of Numbers in an Array
// Calculate the average of all numbers in the array.
// **Input:** `[10, 20, 30]`
// **Output:** `20`
// const array=[10,20,30]
// let sum=0
// for(let i=0;i<array.length;i++){
//     sum=sum+array[i]
// }
// let average=sum/3
// console.log(average)

// ### 10. Swap Two Numbers Without a Third Variable
// Swap the values of two variables without using a third variable.
// **Input:** `a = 5, b = 10`
// **Output:** `a = 10, b = 5`


// ### 11. Find String Length Without `.length`
// Find the length of a string without using the `.length` property.
// **Input:** `"hello"`
// **Output:** `5`

let string="hello"


// ### 12. Find Index of First Occurrence of a Character

// Find the index of the first occurrence of a given character in a string.

// **Input:** `"javascript", "a"`
// **Output:** `1`

// ### 13. Capitalize First Letter of Each Word

// Capitalize the first letter of every word in a given string.

// **Input:** `"i love javascript"`
// **Output:** `"I Love JavaScript"`

// ### 14. Check if a Number is Even or Odd Without `%`

// Determine whether a number is even or odd without using the `%` operator.

// **Input:** `11`
// **Output:** `"Odd"`

// ### 15. Count Digits in a Number

// Count the total number of digits in a given number.

// **Input:** `12345`
// **Output:** `5`

// # Intermediate — 20 Questions

// ### 1. Remove Duplicates from an Array

// Remove all duplicate elements from an array.

// **Input:** `[1, 2, 2, 3, 4, 4, 5]`
// **Output:** `[1, 2, 3, 4, 5]`

// ### 2. Find the Second Largest Number

// Find the second largest number in an array.

// **Input:** `[10, 5, 20, 8]`
// **Output:** `10`

// ### 3. Find the Most Frequent Element

// Find the element that occurs most frequently in an array.

// **Input:** `[1, 2, 2, 3, 3, 3, 4]`
// **Output:** `3`

// ### 4. Find Intersection of Two Arrays

// Find the elements that are present in both arrays.

// **Input:** `[1, 2, 3], [2, 3, 4]`
// **Output:** `[2, 3]`

// ### 5. Find Union of Two Arrays

// Combine two arrays and remove duplicate elements.

// **Input:** `[1, 2, 3], [3, 4, 5]`
// **Output:** `[1, 2, 3, 4, 5]`

// ### 6. Find Difference Between Two Arrays

// Find the elements that are present in either array but not in both.

// **Input:** `[1, 2, 3], [2, 3, 4]`
// **Output:** `[1, 4]`

// ### 7. Reverse Words in a String

// Reverse the order of words in a given string.

// **Input:** `"Hello World"`
// **Output:** `"World Hello"`

// ### 8. Find the Longest Word in a String

// Find the longest word from a given sentence.

// **Input:** `"I love programming"`
// **Output:** `"programming"`

// ### 9. Count Occurrences of Each Character

// Count how many times each character occurs in a string.

// **Input:** `"apple"`
// **Output:** `{a:1, p:2, l:1, e:1}`

// ### 10. Check if Two Strings are Anagrams

// Check whether two strings contain the same characters with the same frequency.

// **Input:** `"listen", "silent"`
// **Output:** `true`

// ### 11. Sort an Array Without Using `.sort()`

// Sort an array in ascending order without using the built-in `.sort()` method.

// **Input:** `[5, 3, 8, 1]`
// **Output:** `[1, 3, 5, 8]`

// ### 12. Flatten a Nested Array

// Convert a nested array into a single-level array.

// **Input:** `[1, [2, [3, 4]], 5]`
// **Output:** `[1, 2, 3, 4, 5]`

// ### 13. Remove Falsy Values from an Array

// Remove all falsy values from an array.

// **Input:** `[0, 1, false, 2, "", 3, null]`
// **Output:** `[1, 2, 3]`

// ### 14. Group Objects by Property

// Group objects based on the value of a specific property.

// **Input:** An array of objects containing `name` and `role`.

// **Output:** Objects grouped separately based on their `role`.

// ### 15. Convert String into Title Case

// Convert the first letter of every word to uppercase.

// **Input:** `"hello world"`
// **Output:** `"Hello World"`

// ### 16. Reverse Only Vowels in a String

// Reverse only the vowels in the given string while keeping consonants in their original positions.

// **Input:** `"hello"`
// **Output:** `"holle"`

// ### 17. Maximum Sum Subarray

// Find the contiguous subarray with the maximum possible sum.

// **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
// **Output:** `6`

// ### 18. Find All Pairs with Sum K

// Find all pairs of numbers whose sum is equal to K.

// **Input:** `[1, 2, 3, 4, 5], k = 6`
// **Output:** `[[1, 5], [2, 4]]`

// ### 19. Remove Duplicates from a String

// Remove duplicate characters while maintaining their first occurrence order.

// **Input:** `"programming"`
// **Output:** `"progamin"`

// ### 20. Find the First Non-Repeating Character

// Find the first character that appears only once in the string.

// **Input:** `"swiss"`
// **Output:** `"w"`

// # Advanced — 15 Questions

// **Focus: Strings, Arrays and Objects only**

// ### 1. Rotate an Array by K Steps

// Rotate the elements of an array to the right by K positions.

// **Input:** `[1, 2, 3, 4, 5], k = 2`
// **Output:** `[4, 5, 1, 2, 3]`

// ### 2. Array Chunking

// Divide an array into smaller arrays of a given size.

// **Input:** `[1, 2, 3, 4, 5], size = 2`
// **Output:** `[[1, 2], [3, 4], [5]]`

// ### 3. Flatten an Object

// Convert a nested object into a single-level object using dot notation for nested keys.

// **Input:** `{a:1, b:{c:2,d:3}}`
// **Output:** `{a:1, "b.c":2, "b.d":3}`

// ### 4. Deep Clone an Object

// Create a completely independent copy of an object, including all nested objects.

// **Input:** `{a:1, b:{c:2}}`
// **Output:** A new object that is not a reference to the original.

// ### 5. Check if Two Objects are Equal

// Check whether two objects have the same keys and values using shallow comparison.

// **Input:** `{a:1,b:2}, {a:1,b:2}`
// **Output:** `true`

// ### 6. Sum of All Even Numbers in an Array

// Find the sum of all even numbers in an array.

// **Input:** `[1,2,3,4,5,6]`
// **Output:** `12`

// ### 7. Count Words in a String

// Count the total number of words in a sentence.

// **Input:** `"I love coding in JS"`
// **Output:** `5`

// ### 8. Longest Substring Without Repeating Characters

// Find the longest substring that contains no repeated characters.

// **Input:** `"abcabcbb"`
// **Output:** `"abc"` — Length: `3`

// ### 9. Check if String Has All Unique Characters

// Check whether every character in the string appears only once.

// **Input:** `"abcdefa"`
// **Output:** `false`

// ### 10. Find the Most Occurring Word

// Find the word that occurs most frequently in a sentence.

// **Input:** `"this is a test this is only a test"`
// **Output:** `"this"` or `"is"`

// ### 11. Find Common Characters Between Two Strings

// Find the characters that are present in both strings.

// **Input:** `"hello", "world"`
// **Output:** `["l", "o"]`

// ### 12. Find Missing Number in an Array

// Given numbers from `1` to `N` with one number missing, find the missing number.

// **Input:** `[1, 2, 4, 5], n = 5`
// **Output:** `3`

// ### 13. Find Duplicate Elements in an Array

// Find all elements that appear more than once.

// **Input:** `[1,2,3,2,4,5,1]`
// **Output:** `[2,1]`

// ### 14. String Compression

// Compress consecutive repeated characters using run-length encoding.

// **Input:** `"aaabbcddd"`
// **Output:** `"a3b2c1d3"`

// ### 15. Remove Duplicates In-Place from a Sorted Array

// Remove duplicate elements from a sorted array without creating another array.

// **Input:** `[1,1,2,2,3,3,4]`
// **Output:** `[1,2,3,4]`, New Length: `4`
