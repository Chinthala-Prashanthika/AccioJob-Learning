//Day 15 
//Arrays

// const persons=["Bhanu","jai ram","shankar"]

// // console.log(persons[0])
// // console.log(persons[1])
// // console.log(persons[2])

// //Add value to array at last index
// persons.push("hassan")
// persons.push("sohel")

// persons.pop()
// persons.pop()
// persons.pop()
// console.log(persons)

// for(let i=0;i<persons.length;i++){
//     console.log(persons[i])
// }

//Remove elements from array until the length of array is 2

// const persons=["Bhanu","jai ram","shankar","hassan","sohel"]

// while(persons.length>2){
//     persons.pop()
// }
// console.log(persons)


//const array=[-1] //here array.push(i) which is adding values to array i.e.., [-1,0,1,2.......]

// for(let i=0;i<array.length;i++){
//     console.log(array,"array after push")
//     array.push(i)

// }

//push():-- adds the elements at the  END
//pop():--remove the elements at the from END

//unshift():-- method adds new elements to the beginning of an array.
//shift():---method is used to remove the beginning element of an array (or) removes the first element

// const persons=["Bhanu","jai ram","shankar"]
// persons.unshift("Nitesh")
// persons.unshift("OBH 13")
// persons.shift()
// console.log(persons)

//Day 16

// const arr=["nitesh","bhanu"]

// //pop() method returns the element which is being removed or popping out
// console.log(arr.pop(),'pop')

// //push() method returns the length of the array after adding value / element 
// console.log(arr.push("chikki"),"Push method")


// shift() method returns the element which is being removed or popping out
// console.log(arr.shift(),"return value for shift")

// //unshift() method returns the length of the array adding elemnent 
// console.log(arr.unshift("Prashanthika"),"return the value for Unshift method")

// console.log(arr,"arr")


//const arr=["nitesh","bhanu","priya","chetan","rahul"]

//write a for loop to add elements in new array ,add elements from index
//1 to index 4 (excluded)

// const newArray=[]

// for(let i=1;i<4;i++){
//     newArray.push(arr[i])
// }
// console.log(newArray,arr)

//--------------------------------------------------------------------------

//slice:-returns the new array from start index to last index(excluded)
//(or) using slice :--The slice() method in JavaScript is used to extract a section of an array and return it as a new array. 
// This method does not modify the original array

// const newArray=arr.slice(1,4)
// console.log(newArray,arr)

// const arr=["nitesh","bhanu","priya","chetan","rahul"]

// function customSlice(originalArray,startIndex,lastIndex){
//     //create new empty array
//     const newArray=[]

//     //Iterate through originalArray with i=startIndex ,i<lastIndex

//     for(let i=startIndex;i<lastIndex;i++){
//         //Add values to new array
//         newArray.push(originalArray[i])
//     }
//     //Return newArray
//     return newArray

// }
// console.log(customSlice(arr,1,4))

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","cherry"]
// const myBest = fruits.slice(-4)
// console.log(myBest)


//splice:--The splice() method adds and/or removes array elements. and prints the new array and orginal array

// const arr=["nitesh","bhanu","priya","chetan","rahul"]
// const arrayFromSplice=arr.splice(1)

// console.log(arrayFromSplice,arr)

//write a function to update same array add 2 new values "a" & "b" at last index 
//ex:-["l",c","d","e"]=>["l",c","d","a","b"]

// const arr=["c","d","e"]

// function updateArray(arr,firstNewValue,secondNewValue){
//     arr.splice(arr.length-1,1,firstNewValue,secondNewValue)
//     console.log(arr,'updated array')

//     return arr
// }
// updateArray(["l","c","d","e"],"a","b")



//reverse of array or swap
// const arr=["a","b","c","d"]

// function reverse(arr){
//     let i=0
//     let j=arr.length-1

//     while(i<j){
//         const temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp

//         i++
//         j--

//     }
//     return arr
// }
// console.log(reverse(["a","b","c","d"]))

// console.log(["a","b","c","d"].reverse())


//Day 17
//split():-- it returns the array

// const string="How are you doing today?"
// const stringTwo="nitesh"
// const stringThree="Nitesh, Pawan, Harish, Rahul"

// // console.log(string.split(' '),"split result")
// // console.log(stringTwo.split(''),"second split result")
// console.log(stringThree.split(',',3),"third split result")

// Day 18

// const string="513 704 806 1184 1267 1495 1685 1737 1899 2146 2676 3144 4653 4762 5380 5699 5832 5863 6750 8550 9426 9428 9516 10519 12119 12226 13583 14442 15314 15625 16008 16298 16490 16847 16914 16959 18192 18264 18277 18467 18970 19576 19688 20144 20633 21126 21140 21810 21957 22615 23920 24843 25192 25462 26091 26681 27147 27200 28175 28182 28458 28636 28788 29002 29687 29937 30138 30417 30537 31197 33554 33630 34708 35199 35844 36028 36450 36638 36860 37381 39731 39841 40319 40528 40531 41008 41548 41656 42648 42884 43094 43179 43931 43999 44609 44855 45815 46179 46205 46207 46217 46219 46368 46658 47508 48719 48752 49838 50416 51209 51969 53021 53708 54003 55269 55562 55871 56117 56141 56355 56634 56653 57472 58300 58334 58558 59705 59862 59914 60130 60481 60502 61075 61810 62139 62744 63263 63507 64158 65222 66063 66355 67164 67824 68210 68219 68322 68401 68872 68935 68976 69369 69729 69951 70621 71183 72452 72586 72948 73218 73946 74126 74234 74589 74636 75155 75297 75951 76139 76229 76230 76930 77293 77524 78473 79295 79558 79774 79839 80119 80415 80556 80588 80999 81545 82269 82460 83264 84247 86542 86638 86927 87930 88140 88158 88670 88760 89027 89472 89781 89970 90000 91495 91622 92262 92957 93015 93038 93264 93894 94054 94233 94312 94340 94482 94888 94890 95206 95732 96189 96390 97227 97381 98162 98201 98750 99309"

// const array=string.split(" ")

// console.log(array[array.length-1],array[array.length-2],'last two elements')

// let isIncreasingOrder="YES"
// for(let i=0;i<array.length;i++){
//     const firstNumber=Number(array[i])
//     const secondNumber=Number(array[i+1])

//     if(firstNumber>secondNumber){
//         isIncreasingOrder="NO"
//         break
//     }
// }
// console.log(isIncreasingOrder)


//Day 19

//Create a custom function for index of take two arguments array & target

//Indexof()
// const array=[1,2,3,4,5]

// function customIndexOf(array,target){
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(customIndexOf(array,8))


//Inculdes()
// const names=["nitesh","minhaj","bhanu","priya"]

// function customIncludes(names,target){
//     for(let i=0;i<names.length;i++){
//         if(names[i]===target){
//             return true
//         }
//     }
//     return false
// }

// console.log(customIncludes(names,"chitti"))

//concat()
// const arrOne=[1,2,3]
// const arrTwo=[4,5,6]

// console.log(arrOne.concat(arrTwo))

// function concatArray(arrOne,arrTwo){
//     let arrFinal=[]
//     for(let i=0;i<arrOne.length;i++){
//         arrFinal.push(arrOne[i])
//     }
//     for(let i=0;i<arrTwo.length;i++){
//         arrFinal.push(arrTwo[i])
//     }
//     return arrFinal
// }
// console.log(concatArray(arrOne,arrTwo))

//console.log(arrOne.concat(arrTwo))


// const arrOne=[1,2,3]
// const arrTwo=[4,5,6,7,8]
// const arrThree=[10,20,30,50]
// const target=10

// function findTarget(arrOne,arrTwo,arrThree,target){
//     if(arrOne.includes(target)||(arrTwo.includes(target)||(arrThree.includes(target)))){
//         console.log(true)
//         }else{
//             console.log(false)
//         }   

// }
// findTarget(arrOne,arrTwo,arrThree,target)


//finding the target where it is present at which index it is at and in which array it is

// const arrOne=[1,2,3]
// const arrTwo=[4,5,6,7,8]
// const arrThree=[10,20,30,50]
// const target=8

// function findTarget(arrOne,arrTwo,arrThree,target){
//     if(arrOne.includes(target)){
//         console.log("First array having target at index",arrOne.indexOf(target))
//         //return 
//     }else if (arrTwo.includes(target)){
//         console.log("Second array is having target at index",arrTwo.indexOf(target))
//     }else if(arrThree.includes(target)){
//         console.log("third array is having target at index",arrThree.indexOf(target))
//     }else{
//         console.log("Given target is not present in any of the array")
//     }
// }
// findTarget(arrOne,arrTwo,arrThree,target)

//create a function that should return new array and values should be copied from originala array


// const arr=[10,20,30,40]

// function newArray(arr){
//     let newArray=[]
//     for(let i=0;i<arr.length;i++){
//         newArray.push(arr[i])
//     }
//     return newArray

// }
// console.log(newArray([22,22,33,44,55]))

//copy()
// const copy=[...numbers]
 
// spread operator()==>[...numbers]

//How array is stored


//Day 20

//nested arrays

// const arr=["a","b",["c",["f"]]]
// console.log(arr[2][1][0])

// const nestedArray=[4]
// const arrTwo=[1,2,3,nestedArray]
// const copy=[1,2,3,nestedArray]
// console.log(arrTwo)
// console.log(copy)

// const arr=[1,2,[3,4]]
// const copy=[...arr]  //spread operator
// //copy[2][0]="nitesh"
// copy[2]="n"

// console.log(arr,copy)

// const arr=[1,[2,[3,[4]]]]
// console.log(arr.flat(3),"flat array")
// //const copy=[...arr]
// const copy=structuredClone(arr)
// copy[1][0]="nitesh"
// //copy[1]="n"

// console.log(arr,copy)

//flat():--Create a new array with one sub-array element concatenated (infinity)


// const arr=[1,[2,[3,45]]]
// const arrTwo=[10,[40,[5]]]

// function sumOfArrays(arr,arrTwo){
//     const firstArray=arr[1][1]
//     const secondArray=arrTwo[1][1]
//     let sum=0
//     for(let i=0;i<firstArray.length;i++){
//         sum=sum+firstArray[i]
//     }
//     for(let i=0;i<secondArray.length;i++){
//         sum=sum+secondArray[i]
//     }
//     return sum
//     console.log(firstArray,secondArray)
// }
// console.log(sumOfArrays(arr,arrTwo))

//Destrucutring array

const names=["minhaj","nikil","harsh"]
const[firstName,secondName]=names
console.log(firstName,secondName)



