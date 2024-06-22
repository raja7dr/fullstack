let age=20;
if(age<18){
    document.write("you are not eligible to vote")
}
else
{
    document.write("You are eligible to vote")
}


let course="Artificial Intelligence And DataScience"
let name="raja"
let len=course.length
document.write(len)
document.write(course.slice(7,16))
document.write(course.substring(15,25))
document.write(course.substr(7,19))

// array in javascript

var arr=["tiger ","cat","dog","lion"];
console.log(arr.sort())
console.log(arr.length)

// functions in javascript
function ary(){
    let flower=["rose","jasmine,","lilly"]
    console.log(flower)
}
ary();
// arrow function in js
let fncn =()=>{
    let fruits =["orange","apple,","mango"]
    console.log(fruits)
}
fncn();

var pen={
  penbrand: "rorito",
  price:25,
  shop:"ruby"
    
}
// console.log("I bought a pen from",pen.shop,"and the cost is ",pen.price,"from the brand",pen.penbrand)
console.log(`i bought a pen in ${pen.penbrand}for rs${pen.price}at the ${pen.shop}shop`)
let a="raja";
let b="raja";
// if (a===b)
//     {
//         console.log("yes")
//     }
// else{
//     console.log("no")
// }
// a==b ? window.console.log("yes") : console.log("no");
// alert("Hello Welcome")


// number guessing game
// let guessing_num=7
// let input=prompt("enter a number in range 1 t0 10")
// while(input<10)
//     {
//         if (input==guessing_num)
//         {
//             document.write("congrats")
//             break;
//         }
//         else{
//             input=prompt("enter another number")
//             console.log("try again")
//         }
//     }
let animals=["deer ","rabbit","deer","lion","Elephant"]
animals.splice(2,2,"cow","cat","rat")
document.write(animals)

