//intialize the count=0
//when it is clicked increment the value
//change the count value to the given html page
//DOM document object model -how u use java script to modify a website
let count=0;
let str="0";
let countEl = document.getElementById("count-el");
let Inn=document.getElementById("prev");
console.log(countEl)
// console.log(countEl)
let welcomeEl=document.getElementById("welcome-el");
let name1="Karthik";
let greet="Welcome "
welcomeEl.innerText=greet+name1+"👋";
function increment()
{
    // console.log("CLICKED");
    console.log("CLICKED")
    count++;
    countEl.innerText=count;
    // countEl.textContent=count;
}
function save()
{
    str=str+"-"+count;
    console.log(str)
    Inn.innerText=str;
    count=0;
    countEl.innerText=count;
}

// save()
// function log()
// {
//     // console.log(42)
//     let a=10,b=5;
//     console.log(a+b)
//     return "HELLO";
// }
// console.log(log())