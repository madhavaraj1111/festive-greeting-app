const inputForm=document.querySelector("form#inputForm");
const inputBtn=document.querySelector("#inputBtn");





inputForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   const inputData=document.querySelector("#inputData");
  
   
window.location.href="/festive-greeting-app/greet.html?name="+inputData.value;
   
   
  
   
})


