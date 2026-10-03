/* typing message */

let text="You make my life beautiful every single day ❤️";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

/* love timer */

let startDate = new Date("2025-10-06");

function updateTimer(){

let now = new Date();

let diff = now - startDate;

let days = Math.floor(diff/(1000*60*60*24));

let hours = Math.floor((diff/(1000*60*60))%24);

let minutes = Math.floor((diff/(1000*60))%60);

let seconds = Math.floor((diff/1000)%60);

document.getElementById("timer").innerHTML =
days+" Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds ❤️";

}

setInterval(updateTimer,1000);

/* surprise button */

function surprise(){

alert("I Love You Forever ❤️");

}

/* floating hearts */

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);
