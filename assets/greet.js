import {Fireworks} from "fireworks-js";

const fireworksContainer=document.querySelector("#fireworks");
const fireworks=new Fireworks(fireworksContainer,{})
fireworks.start();


// logics



const greeterName=document.querySelector("span#greeterName");
    const url=new URL(window.location.href);
const name=url.searchParams.get('name');


if(name){
greeterName.innerText=name;
}
else{
    window.location.href="/festive-greeting-app/index.html";  
}












