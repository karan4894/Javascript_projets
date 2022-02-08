// Javascript Console API
// console.log("Hello world");
// document.write("karan here check the decode message.")
// console.warn("This is a warning")
// console.assert("This is assert")
// console.error("This is error")


// Javascript Variables
/* Multiline comment */

// var number1 = 34;
// var number2 = 36;
// console.log(number1 + number2)


// Data types in Javascript

var str1 = "This is a string";
var str2 = "This is a string 2";

var number3 = 3.13;

// Now we have seen number and string.

// Now lets look at object

var marks = {
    ravi: 34,
    shubham:44,
    karan:98
}

// Boolean
// var a = true
// var b = false
// console.log(a,b)

// Undefiend 
// var c;

// // Null

// var d = null
// console.log(d);

/*
Recap of data types for java script.

1) Primitive data types - 
    Number
    String
    Boolean
    Undefined 
    null
    symbol

2) Reference data types - 
    object
    array
*/

// array 
// var arr = [1,3,4,5,"Karan"];
// console.log(arr[4]);

// Operators.
// var a = 34
// var b = 33
// console.log(a+b);
// console.log(a*b);

/*
Then here we have assignment operator. = 
Then we have comparison operators. == >= <= > <
Logical operators - && , || , |-bitwise operator, !true,!false
So logical and,or,not --- && || !

Operator and operand - 34 + 35 (+ operator)


*/


// function avg(a,b){
//     return (a + b)/2;
// }

// c = avg(2,4) 
// console.log(c)


// Conditional in javascript.

// var age = 34;
// if (age>34){
//     console.log("You are veteran")
// }
// else{
//     console.log("You are not.")
// }


// age = 18
// if (age>23){
//     console.log("1");
// }
// else if(age<19){
//     console.log("2");
// }
// else{
//     console.log("3");
// }


// LOOPS

// var arr = [1,2,4,5,6,6,7]
// for(var i =0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// Using Let 
// let j = 0;
// const ac = 0;
// console.log(ac)

// // while
// var arr = [1,2,3,4,5,6,7]
// // let j = 0
// // while (j < arr.length){
// //     console.log(arr[j]);
// // //     j++;
// // // }

// // do{
// //     console.log(arr[j]);
// //         j++;
// // }while(j<arr.length);

// for (var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i])
// }
// So after loops, break and continue, let and const we are going to study array methods

// array methods

// .pop , push, toString, sort
// let my_arr = ["Fan",true,34,null,2,3,4,5]
// my_arr.shift(2)
// console.log(my_arr)


// String methods

// let myLoveString = "Harry is there and he is good";
// console.log(myLoveString.indexOf("good"))


// Dates 

// let my_date = new Date();
// console.log(my_date.getDate)

// DOM manipulation

// let elementClass = document.getElementsByClassName('container')
// console.log(elementClass);
// elementClass[1].classList.add("container")


// Events is Javascript 
// function clicked(){
//     console.log("Button was clicked")
// }

// firstContainer.addEventListener('click',function(){
//     console.log("karan");
// })

// Arrow function
//---
//------------------
// function summ(a,b){
//     return a+b;
// }

// summ = (a,b)=>{
//     return a+b;
// }

// SetTime out and SetInterval 

// logkaro = ()=>{
//     console.log("You just logged.")
// }
// setTimeout(logkaro,2000);
// clr = setInterval(logkaro,2000)
// clearTimeout(clr)


// Local storage 

//  localStorage.setItem('name','karan');
//  localStorage.getItem('name')

 // JSON

obj = {name:1,age:22}
console.log(typeof(obj))

// Backlist

a = 33
console.log(`karan lets get this package ${a}`)

// JSON only accepts double quotes.