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
let fncn =()=>{
    let fruits =["orange","apple,","mango"]
    console.log(fruits)
}
fncn();