// let name="Prashanthika"

// let score=80
// let updatedscore="80" + "5"

// let sub="80"-"a"

// let multiplication="80" * "5"
// let division="80" / "5"
// let newscoree="80" % "5"

//console.log(sub)


// console.log(2+2*4)  //first 8+2=10

// console.log((2+2)*4/2) //first 4 *2=>8

// console.log((2+2)*4%2)
// console.log((2-2)*4)

// let value=80 // single = means assigning a value to a varible
// console.log(0==0) //Double == means comparing two variables/values
// console.log(0!=0) 

// console.log(3%"2")


// if(3%"2"==0){
//     console.log("Executing if block")
    
// }else{
//     console.log("Executing else block")
// }

//day 2

// let number=10
// number+=5   // or number=number+5=15
//             // number-=5 =>5
//             //number*=5=>50
// console.log(number)


//question 1:-
//10,20 in console 
//1 first number is addition of itself
//2 it should be substraction of givennumber/2

// let firstnumber=10
// let secondnumber=20

// console.log(firstnumber+firstnumber)
// console.log(secondnumber-(secondnumber/2))


//post increment 
// let firstnumber=10
// let secondnumber=20

//console.log(firstnumber++)   ==>10
// console.log(firstnumber++,'first console')
// console.log(firstnumber,'second consloe')

//pre increment
// let firstnumber=10
// let secondnumber=20

//console.log(++firstnumber) ==>11
// console.log(++firstnumber,'first console')
// console.log(--firstnumber,'first console')
// console.log(firstnumber,'second consloe')

// let number=5
// //number = number-1=>4  (preincrement)=>4
// //number= number+`=>5(postincrement)=>5
// console.log(--number + number++) //(4+4)
// console.log(number)


//using let we can't redeclare variable but we can re initialize the variable
// let centerName='Hyd'
// centerName='Noida'
// console.log(centerName)

//Using const we can't redeclare nor re-initialize
//TypeError: Assignment to constant variable
//ReferenceError: phone is not defined
// const phoneNumber=8998852889
// console.log(phoneNumber)


/* Math.round
Math.floor
Math.ceil
Math.toFixed

*/
// round=Return the nearest integer
// let mathRound=Math.round(2.87)
// console.log(mathRound,'Math.round')

// //floor = returns the down number
// let floorNumber=Math.floor(2.99)
// console.log(floorNumber,'Math.floor')

// //ceil=returns the upnumber
// let ceilNumber=Math.ceil(2.01)
// console.log(ceilNumber,'Math.ceil')

// //toFixed
// let number=2.098778
// console.log(toFixed=number.toFixed(10),'.toFixed()')
// console.log(5**5)

// //function
// function add(){
//     console.log(20+30,'inside function')
// }
// add()


//Day 3

//else if conditions

// let studentScore=100

// if(studentScore>50){
//     console.log("Student Passed")
// }else{
//     console.log("Student Failed")
// }

// if(studentScore>=90){
//     console.log("Student grade is A")
// }else if(studentScore>=80){
//     console.log("Student grade is B")
// }else if(studentScore>=70){
//     console.log("Student grade is c")
// }else if(studentScore>=60){
//     console.log("Student grade is D")
// }else if(studentScore>=50){
//     console.log("Student Grade is E")
// }else{
//     console.log("Student grade is F")
// }


// Falsy values
// ''
// ""
// 0
// undefined
// null


// if(-12){
//     console.log("true value")

// }else{
//     console.log("False value")
// }


//q1:-
//first scenario
//step 1: Create a varible for total amount
//step 2: Create a varible isCouponValid: true or flase
//step 3: write a if else condition if coupen valid give discount of 2000 else dont change total amount
//step 4:print toatal amount

//Second scenario: Either coupen is valid or totalAmount is greater than 12000 give 2000 of discount
//third scenario: Both total amount should be greter than 12000 and coupen should be valid then give discount
// && , ||

// let totalAmount=10000
// let isCouponValid=true
// if (isCouponValid){
//     console.log("Give 2000 discount")
// }else{
//     console.log(totalAmount)
// }

// let totalAmount=15000
// let isCouponValid=false

// if(isCouponValid){
//     totalAmount=totalAmount-2000
// }
// else if (totalAmount>12000){
//     console.log("Coupon is not valid")
// }
// console.log(totalAmount)


//second scenario
// let totalAmount=10000
// let isCouponValid=true
// if(isCouponValid || totalAmount>=12000){
//     totalAmount=totalAmount-2000
// }

//third scenario
// let totalAmount=10000
// let isCouponValid=false
// if(isCouponValid && totalAmount>=12000){
//     totalAmount=totalAmount-2000
// }

// console.log(totalAmount)


// let userEnterNumber=10

// let actualNumberOne=10
// let actualNumberTwo=10

// if(actualNumberOne==userEnterNumber||actualNumberTwo==userEnterNumber){
//     console.log("User won....")
// }else{
//     console.log("User lost")
// }


const email= "nitesh@gmail.com"
const phoneNumber=123456789

//if(email && phoneNumber){
//  console.log("executed if")
//}
//console.log(email || phoneNumber)

console.log(email && phoneNumber)


//elseif  


//Day 4
