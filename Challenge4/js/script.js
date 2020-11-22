//changing the color of all the buttons

var all_buttons=document.getElementsByTagName('button')
console.log(all_buttons);

var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
  if(buttonThingy.value==='red'){
    ButtonsRed();
  }else if(buttonThingy.value==='yellow'){
    ButtonsYellow();
  }else if(buttonThingy.value==='green'){
    ButtonsGreen();
  }else if(buttonThingy.value==='reset'){
    ButtonsReset();
  }else if(buttonThingy.value==='random'){
    ButtonsRandom();
  }
}

//changing all the buttons to red color
function ButtonsRed(){
  for(let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

//changing all the buttons to green color
function ButtonsGreen(){
  for(let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function ButtonsYellow(){
  for(let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-warning');
  }
}


//resetting the original color of buttons
function ButtonsReset(){
  for(let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}


//setting the colors randomly
function ButtonsRandom(){
  choices=['btn-primary','btn-danger','btn-success','btn-warning'];
  for(let i=0;i<all_buttons.length;i++){
    let randomNumber=Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);

  }
}
