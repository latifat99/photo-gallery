const one =document.getElementById("one")
const  two=document.getElementById("two")
const three =document.getElementById("three")
const four=document.getElementById("four")
const five =document.getElementById("five")
const six =document.getElementById("six")
const seven=document.getElementById("seven")
const eight =document.getElementById("eight")
change = (event) =>{
    event.target.style.background ="red"
    event.target.style.color ="blue"}
    
    one.addEventListener("click",change)
    two.addEventListener("click",change)
   three.addEventListener("click",change)
    four.addEventListener("click",change)
    five.addEventListener("click",change)
    six.addEventListener("click",change)
    seven.addEventListener("click",change)
    eight.addEventListener("click",change)