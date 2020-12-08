const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");
btn.addEventListener('click',function(){
  let randomNumber=Math.floor(Math.random(1) *4);
  console.log(randomNumber);
  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent=colors[randomNumber];
});

