//Day 21
//Strings

// let string="nitesh"
// //vowels=a,e,i,o,u  ==>i,e
// let vowels=[a,e,i,o,u]
// for(let i=0;i<string.length;i++){
//     if(string[i]===vowels){
//         console.log()
//     }
// }

// let string="nitesh"
// string=string.split('')
// string[0]="h"
// console.log(string.includes("e","i"))
// string=string.join("")
// console.log(string)


//remove vowels and print the ntsh
// let string="nitesh"
// function removeVowels(string){
//     const vowels=["a","e","i","o","u"]
//     let result=""

//     for(let i=0;i<string.length;i++){
//         const currentChar=string[i].toLowerCase()
//         if(vowels.includes(currentChar)){
//             continue
//         }
//         result+=currentChar
//     }
//     return result
    
// }
// console.log(removeVowels("niteshAEpas"),"removed vowels")

//  \n==>new line
// \t==>new tab

// let string ='i\'m busy today \ncant make it \tto dinner'
// console.log(string)

//back ticks==> ``
// const marks=99
// const stringOne="nitesh"
// console.log(`${stringOne} scored ${marks} out of 500`)


// function getPercentage(totalScore,scoredScore){
//     //98%
//     return `${scoredScore/totalScore*100}%`

// }
// getPercentage(500,400)

// const newString="This is my sentence"  
// console.log(newString.charAt(1),'char at')

//create a function that should return array with index position of all vowels in sentence
// function getVowelsIndes(string){
//     const vowels="aeiou"
//     const result=[]

//     let i=0
//     while(i<string.length){
//         if(vowels.includes(string[i])){
//             result.push(i)
//         }
//         i++
//     }
//     return result

// }
// console.log(getVowelsIndes("This is my sentence"))


// const string="welcome to OBH Batch"
// const array=string.split("")
// console.log(array.reverse().join(""))


// function reverseWords(){
//     const sentence="Welcome to this Javascript Guide!"
//     const sentenceInArray=sentence.split(" ")
//     console.log(sentenceInArray)
//     let result=""

//     for(let i=0;i<sentenceInArray.length;i++){
//         const char=sentenceInArray[i].split("").reverse().join("")
//         result+=`${char}`
//     }
//     console.log(result)
// }
// reverseWords()
//-----------------------------------------------------------------------------------------------------------------------------------
//Day 22

//ASCII:---

//A-Z==>65-90
//a-z==>97-122
//Difference is=32
//

// const string="A"
// const code=65
// for(let i=65;i<65+26;i++){
//     console.log(i,String.fromCharCode(i))
// }
// for (let i=97;i<97+26;i++){
//     console.log(i,String,fromCharCode(i))
// }
// //console.log(string.charCodeAt(0))
// console.log(String.fromCharCode(65))
// console.log(String.fromCharCode(66))

//Q:--if smallercase charachter "c" is given return charcter code for "C"

// const string="c"
// console.log(string.charCodeAt(0))

// function getCharCodeForUpperCase(string){
//     return string.charCodeAt(0)-32
// }
// console.log(getCharCodeForUpperCase("c"))

//Q :-- Your function should return true if given character is in uppercase else false

//const string="a"

// function isUpperCase(string){
//     const ascii=string.charCodeAt(0)
//     if(ascii<91 && ascii>=65){
//         return true
//     }else{
//         return false
//     }   
// }
// console.log(isUpperCase("b"))

//Q:-- Your function will get string "Hello" you should return "HELLO"

// function toUpperCase(string){
//     console.log(string.toUpperCase(0))
// }
// toUpperCase("Hello")

//OR

// function toUpperCase(string){
//     //Hello
//     let result=""
//     for(let i=0;i<string.length;i++){
//         const currentChar=string[i]
//         const currentCode=currentChar.charCodeAt(0)

//         //if(isUpperCase(currentChar)){
//         if(currentCode>=65 && currentCode<=90){
//             result+=currentChar
//         }else{
//             //"e"
//             const codeInUpperCase=currentChar.charCodeAt(0)-32
//             //getCharCodeForUpperCase(currentChar)
//             //69

//             const charInUpperCase=String.fromCharCode(codeInUpperCase)

//             result+=charInUpperCase
//         }
//     }
//     return result
// }
// console.log(toUpperCase("Hello"))
//---------------------------------------------------------------------------------------------------------------------------
//Day 23

// const customArray=createArray(100,2)
// function createArray(length,fill){
//     console.log(length,fill,'fill in create array')
//     const array=[]
//     for(let i=0;i<length;i++){
//         array.push(fill)
//     }
//     return array
// }
// console.log(customArray.length,customArray)

// //OR

//Creating a new array using new Array
// const array=new Array(100).fill(0)
// console.log(array,array.length)

//Q:--Create an array of length 256 and fill it with -1
//After creating array=> "abcd" after iterating through string update
// array indexes of charcode from given string to 1
//Expected 

// const arrayAscii=new Array(256).fill(-1)

// arrayAscii[97,98,99,100]=1
// console.log(arrayAscii[99])

//function explore(string){
//     //string="abcd"
//     const array=new Array(256).fill(-1) //[-1,-1,-1,-1,...........,-1]

//     for(let i=0;i<string.length;i++){
//         const char=string[i]

//         const code=char.charCodeAt(0)

//         array[code]=1
//         console.log(array[code])
//     }
//     //console.log(array)

// }
// console.log(explore("abcd"))

// function explore(string){
// let result=""
// const array=new Array(256).fill(-1)

// for(let i=0;i<string.length;i++){
//     const char =string[i]

//     const code=char.charCodeAt(0)
    
//     //Visiting character for the first time
//     if(array[code]===-1){
//         array[code]=1
//         result+=char
//     }
// }
// return result
// }
// console.log(explore("hello"))

// String Methods ********************************************************************************************
// new Array()  → creates array
// fill()       → fills array

// charCodeAt()     → character → ASCII 
// fromCharCode()   → ASCII → character

// indexOf()      → first index
// lastIndexOf()  → last index
// startsWith()   → checks beginning
// endsWith()     → checks ending
// slice()        → extracts part
// replace()      → replaces first occurrence
// replaceAll()   → replaces all occurrences
// trim()         → removes starting & ending spaces
// padStart()     → adds characters at beginning

// const string="abcdaef"
// console.log(string.indexOf("a"))
// console.log(string.lastIndexOf("a"))
// console.log(string.startsWith("b"))
// console.log(string.endsWith("e"))

// const stringOne="https://acciojob.com"
// const stringTwo="nitesh@gmail.com"

// console.log(stringOne.startsWith("https"))
// console.log(stringTwo.endsWith("gmail.com"))
// console.log(stringOne.slice(0,6))

// const firstName="ababab"
// console.log(firstName.replace("a","b"))
// console.log(firstName.replaceAll("a","b"))

// const sentence="   good  good good"
// const trimmedSentence=sentence.trim()
// console.log(trimmedSentence.length,trimmedSentence)

// const generateOTP="8909"
// console.log(generateOTP.padStart(6,"0"))
//substring
//padsend

//Q:---create custom methods for startsWith ,endsWith,replce,replaceAll,trim,padStart
//startswith:-- 
// const str="javaScript"
// function myStartsWith(str,search){
//     for(let i=0;i<search.length;i++){
//         if(str[i]!==search){
//             return false
//         }
//     }
//     return true
// }
// console.log(myStartsWith("javaScript","java"))

//endsWith

// function myEndsWith(str, search) {
//     let start = str.length - search.length
//     for (let i = 0; i < search.length; i++) {
//         if (str[start + i] !== search[i]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(myEndsWith("javascript", "script"))


//replace:-- replce the first index
// function customReplace(string,target,newValue){
//     let result=""
//     let isTargetReplaced=false

//     for(let char of string){
//         if(char===target && !isTargetReplaced){
//             result+=newValue
//             isTargetReplaced=true
//         }else{
//             result+=char
//         }
//     }
//     return result
// }
// console.log(customReplace("panan","n","w"))

//replaceAll
// function customReplace(string,target,newValue){
//     let result=""
//     let isTargetReplaced=false

//     for(let char of string){
//         if(char===target){
//             result+=newValue
//             isTargetReplaced=true
//         }else{
//             result+=char
//         }
//     }
//     return result
// }
// console.log(customReplace("aabbaabbaa","a","b"))

//trim()
// function myTrim(str) {
//     let start = 0;
//     let end = str.length - 1;
//     while (str[start] === " ") {
//         start++;
//     }
//     while (str[end] === " ") {
//         end--;
//     }
//     return str.slice(start, end + 1);
// }
// console.log(myTrim("   hello world   "));


//padStart()
// function myPadStart(str, length, char) {
//     let result = "";
//     let count = length - str.length;
//     for (let i = 0; i < count; i++) {
//         result += char;
//     }
//     return result + str;
// }
// console.log(myPadStart("123", 5, "0"));