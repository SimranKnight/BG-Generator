
 var _ = require('lodash');
 let array=[1,2,3,4,5,6,7,8,9]
 console.log('answer',_.without(array,3))
 
let css=document.querySelector("h3")
let color1=document.querySelector(".color1")
let color2=document.querySelector(".color2")
let body=document.getElementById("moosa")




function logic() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
       
    // let i=document.createElement("h2");
    // i.appendChild(document.createTextNode(css.textContent = body.style.background + ";"));
    // body.appendChild(i);

    css.textContent=body.style.background+";";
}

color1.addEventListener("input",logic);
color2.addEventListener("input",logic);






   






