document.getElementById("heading")


let animal=["dog","lion","deer","cat"]
fun();

function fun()
{
    // const animals=["lion","tiger","deer"]
for (let i=0;i<animals.length;i++)
    {
        document.getElementsByClassName("para")[i].innerHTML=animals;
    }
}
// let n=document.querySelector("#heading")
// let n1=document.querySelectorAll(".para")
// document.write(n,n1)