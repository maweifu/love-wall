/* 相识时间 */

const start = new Date("2026-03-01 20:00:00");

setInterval(()=>{

const now = new Date();

const diff = now - start;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor(diff/(1000*60*60))%24;
const minutes = Math.floor(diff/(1000*60))%60;

const el = document.getElementById("time");

if(el){

el.innerText =
"我们认识已经 " +
days + " 天 " +
hours + " 小时 " +
minutes + " 分钟";

}

},1000);


/* 点击爱心 */

document.addEventListener("click",function(e){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize="20px";
heart.style.animation="float 1s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});


/* 星空背景 */

const canvas = document.getElementById("star");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(s=>{

ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();

});

}

setInterval(draw,50);

}