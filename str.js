// // indexOf()      → first index
// // lastIndexOf()  → last index
// // startsWith()   → checks beginning
// // endsWith()     → checks ending
// // slice()        → extracts part
// // replace()      → replaces first occurrence
// // replaceAll()   → replaces all occurrences
// // trim()         → removes starting & ending spaces
// // padStart()     → adds characters at beginning

// // const string="abcdaef"
// // console.log(string.indexOf("a"))

// // console.log(string.lastIndexOf("a"))

// // console.log(string.startsWith("b"))

// // console.log(string.endsWith("e"))

// // const stringOne="https://acciojob.com"
// // const stringTwo="nitesh@gmail.com"

// // console.log(stringOne.startsWith("https"))
// // console.log(stringTwo.endsWith("gmail.com"))
// // console.log(stringOne.slice(0,6))

// // const firstName="ababab"
// // console.log(firstName.replace("a","b"))
// // console.log(firstName.replaceAll("a","b"))

// // const sentence="   good  good good"
// // const trimmedSentence=sentence.trim()
// // console.log(trimmedSentence.length,trimmedSentence)


// 🎤 Part 1 — Finish your String Methods explanation

// After explaining your methods, say:

// "So these are some commonly used string methods in JavaScript.

// Now I would like to explain one problem based on strings and show how these methods can be used in a real problem.

// The problem I have chosen is Is Palindrome."

// This transition sounds professional but is easy to remember.

// 🎤 Part 2 — Introduce the Palindrome problem

// Say:

// "First, let's understand what a palindrome is.

// A palindrome is a string that reads the same forward and backward.

// For example, madam is a palindrome because when we read it from the front or from the back, we get madam.

// But hello is not a palindrome because its reverse is olleh."

// Write on the board:

// madam → madam → true

// hello → olleh → false

// Then say:

// "So our task is to take a string, reverse it, and compare it with the original string."

// 🎤 Part 3 — Show the code

// Write this:

// function isPalindrome(s) {

//     let reversed = s.split("").reverse().join("");

//     return s === reversed;
// }

// console.log(isPalindrome("madam"));

// Don't immediately explain the whole line.

// Break it into 3 methods.

// 🎤 Part 4 — Explain split()

// Point to:

// s.split("")

// Say:

// "First, I use the split() method.

// split() converts a string into an array.

// Here, I am passing an empty string as the separator, so every character becomes a separate element."

// Write:

// "madam"
//    ↓ split("")
// ["m", "a", "d", "a", "m"]

// Then say:

// "Now our string has become an array."

// 🎤 Part 5 — Explain reverse()

// Point to:

// .reverse()

// Say:

// "Next, I use the reverse() method.

// reverse() reverses the elements of an array."

// Write:

// ["m", "a", "d", "a", "m"]
//               ↓
// ["m", "a", "d", "a", "m"]

// For madam, it looks the same because it is already a palindrome.

// To make the concept clearer, you can say:

// "For example, if the array was ['h','e','l','l','o'], reverse would give ['o','l','l','e','h']."

// 🎤 Part 6 — Explain join()

// Point to:

// .join("")

// Say:

// "Now I use the join() method.

// join() converts the array back into a string."

// Write:

// ["m", "a", "d", "a", "m"]
//              ↓ join("")
// "madam"
// 🎤 Part 7 — Explain the comparison

// Now point to:

// return s === reversed;

// Say:

// "Finally, I compare the original string with the reversed string using the strict equality operator ===.

// If both strings are the same, the function returns true.

// Otherwise, it returns false."

// Example:

// Original:  madam
// Reversed:  madam

// madam === madam
// true

// Then:

// Original:  hello
// Reversed:  olleh

// hello === olleh
// false
// ⭐ Very important point for your instructor

// Your instructor may ask:

// "Is reverse() a string method?"

// You should answer:

// "No. reverse() is an array method. That's why we first use split() to convert the string into an array, then reverse it, and finally use join() to convert it back into a string."

// This is an excellent point to mention. 👍

// 🎤 Complete explanation — You can practice this

// If you want to explain the entire problem continuously, say:

// "Now I would like to explain a problem called Is Palindrome.

// A palindrome is a string that reads the same forward and backward. For example, madam is a palindrome, whereas hello is not.

// My approach is very simple. First, I convert the string into an array using the split() method. Then I reverse the array using the reverse() method. Finally, I convert the array back into a string using the join() method.

// After that, I compare the original string with the reversed string using ===.

// If both are equal, I return true. Otherwise, I return false.

// For example, if the input is madam, after reversing we still get madam, so the result is true.

// If the input is hello, the reversed string is olleh, so the result is false.

// One important point is that reverse() is actually an array method, not a string method. So we need split() before it and join() after it.

// That's how I solve the Is Palindrome problem using JavaScript string and array methods."

// 🎯 If instructor asks "What methods did you use?"

// Answer:

// "I used three methods: split(), reverse(), and join()."

// If they ask what each does:

// "split() converts a string into an array, reverse() reverses the array, and join() converts the array back into a string."

// If they ask the time complexity:

// "The time complexity is O(n), because we go through the characters of the string, and the extra space is O(n) because we create an array."

// You don't need to bring up complexity unless they ask.

// ❤️ For your first seminar, do this

// Don't memorize the complete speech word-for-word.

// Just remember these 5 keywords:

// Palindrome → split → reverse → join → compare

// If you forget what to say, look at the code and explain what each line is doing. That is much better than trying to memorize a speech.

// And speak slowly. A 5-minute presentation does not mean you have to finish quickly. Take small pauses after each example.

// You've already solved many of these string problems. You are prepared. 🌸

// console.log("80" + "5"); //string conacationation
// console.log("80" - "5");
// console.log("80" * "5");
// console.log(3 % 2);

// function countVowels(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         count++
//     }
// }
//     return count
// }
// console.log(countVowels("aeiou"))

// function countSpaces(string){
//     let count=0
//     for(let i=0;i<string.length;i++){
//         if(string[i]===" "){
//             count++
//         }
//     }
//     return count
// }
// console.log(string("Hello this is prashanthika"))

function findLargest(arr){
    largest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest
}
console.log(findLargest([1,2,3,4,5]))