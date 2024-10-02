
let Childbox = document.querySelectorAll(".Childbox");

let ChildBox1 = document.querySelector("#ChildBox1");
let ChildBox2 = document.querySelector("#ChildBox2");
let ChildBox3 = document.querySelector("#ChildBox3");
let ChildBox4 = document.querySelector("#ChildBox4");
let ChildBox5 = document.querySelector("#ChildBox5");
let ChildBox6 = document.querySelector("#ChildBox6");
let ChildBox7 = document.querySelector("#ChildBox7");
let ChildBox8 = document.querySelector("#ChildBox8");
let ChildBox9 = document.querySelector("#ChildBox9");

let playerx1 = document.querySelector("#playerx1");
let player02 = document.querySelector("#player02");

let NewGameBtn = document.querySelector("#NewGameBtn");
let ResetBtn = document.querySelector("#ResetBtn");

let playerx_score = 0;
let player0_score = 0;
 let div1;
 let div2;
 let div3;
 let div4;
 let div5;
 let div6;
 let div7;
 let div8;
 let div9;
 
 let i=1;

 let Score = ()=>{
playerx1.innerText = playerx_score;
player02.innerText = player0_score;
Childbox.forEach((choice)=>{
 choice.style.pointerEvents = "none";
});

 }

function player1func(choice){

  if(div1===1 && div2===1 && div3===1){
    console.log("player x winner");
    ChildBox1.style.color ="red";
    ChildBox2.style.color ="red";
    ChildBox3.style.color ="red";
    playerx_score++;
  Score();
  

   }else if(div4===1 && div5===1 && div6===1){
     console.log("player x winner");
     ChildBox4.style.color ="red";
     ChildBox5.style.color ="red";
     ChildBox6.style.color ="red";
     playerx_score++;
   Score();
 }else if(div7===1 && div8===1 && div9===1){
  console.log("player x winner");
  ChildBox7.style.color ="red";
  ChildBox8.style.color ="red";
  ChildBox9.style.color ="red";
  playerx_score++;
Score();
 }else
 if(div1===1 && div4===1 && div7===1){
  console.log("player x winner");
  ChildBox1.style.color ="red";
  ChildBox4.style.color ="red";
  ChildBox7.style.color ="red";
  playerx_score++;
Score();
 }else if(div2===1 && div5===1 && div8===1){
   console.log("player x winner");
   ChildBox2.style.color ="red";
   ChildBox5.style.color ="red";
   ChildBox8.style.color ="red";
   playerx_score++;
 Score();
}else if(div3===1 && div6===1 && div9===1){
console.log("player x winner");
ChildBox3.style.color ="red";
ChildBox6.style.color ="red";
ChildBox9.style.color ="red";
playerx_score++;
Score();
}else
if(div1===1 && div5===1 && div9===1){
  console.log("player x winner");
  ChildBox1.style.color ="red";
  ChildBox5.style.color ="red";
  ChildBox9.style.color ="red";
  playerx_score++;
Score();
 }else if(div3===1 && div5===1 && div7===1){
   console.log("player x winner");
   ChildBox3.style.color ="red";
   ChildBox5.style.color ="red";
   ChildBox7.style.color ="red";
   playerx_score++;
 Score();


}

}

function player2func(){
  if(div1===2 && div2===2 && div3===2){
    console.log("player 0 winner");
    ChildBox1.style.color ="blue";
      ChildBox2.style.color ="blue";
      ChildBox3.style.color ="blue";
      player0_score++;
     Score();
   }else if(div4===2 && div5===2 && div6===2){
     console.log("player 0 winner");
     ChildBox4.style.color ="blue";
      ChildBox5.style.color ="blue";
      ChildBox6.style.color ="blue";
      
      player0_score++;
     Score();
 }else if(div7===2 && div8===2 && div9===2){
  console.log("player 0 winner");
  ChildBox7.style.color ="blue";
      ChildBox8.style.color ="blue";
      ChildBox9.style.color ="blue";
      player0_score++;
     Score();
 }else
 if(div1===2 && div4===2 && div7===2){
  console.log("player 0 winner");
  ChildBox1.style.color ="blue";
      ChildBox4.style.color ="blue";
      ChildBox7.style.color ="blue";
      player0_score++;
     Score();
 }else if(div2===2 && div5===2 && div8===2){
   console.log("player 0 winner");
   ChildBox2.style.color ="blue";
      ChildBox5.style.color ="blue";
      ChildBox8.style.color ="blue";
      player0_score++;
     Score();
}else if(div3===2 && div6===2 && div9===2){
console.log("player 0 winner");
ChildBox3.style.color ="blue";
      ChildBox6.style.color ="blue";
      ChildBox9.style.color ="blue";
      player0_score++;
     Score();
}else
if(div1===2 && div5===2 && div9===2){
  console.log("player 0 winner");
  ChildBox1.style.color ="blue";
      ChildBox5.style.color ="blue";
      ChildBox9.style.color ="blue";
      player0_score++;
     Score();
 }else if(div3===2 && div5===2 && div7===2){
   console.log("player 0 winner");
   ChildBox3.style.color ="blue";
      ChildBox5.style.color ="blue";
      ChildBox7.style.color ="blue";
      player0_score++;
     Score();
}
}


function myfunc(choice,id){
if(i%2==!0){

choice.innerText = "X";

if("ChildBox1"==id){
  console.log("div1");
    div1 = 1;

}else if("ChildBox2"==id){
  console.log("div2");
    div2 = 1;

}else if("ChildBox3"==id){
  console.log("div3");
    div3 = 1;
  
}else if("ChildBox4"==id){
  console.log("div4");
    div4 = 1;
    
}else if("ChildBox5"==id){
  console.log("div5");
    div5 = 1;
    
}else if("ChildBox6"==id){
  console.log("div6");
    div6 = 1;
    
}else if("ChildBox7"==id){
  console.log("div7");
    div7 = 1;
    
}else if("ChildBox8"==id){
  console.log("div8");
    div8 = 1;
    
}else if("ChildBox9"==id){
  console.log("div9");
    div9 = 1;
    
}
player1func(choice);

}else{
  choice.innerText = "0";
  if("ChildBox1"==id){
    console.log("div1");
      div1 = 2;
  
  }else if("ChildBox2"==id){
    console.log("div2");
      div2 = 2;
  
  }else if("ChildBox3"==id){
    console.log("div3");
      div3 = 2;
    
  }else if("ChildBox4"==id){
    console.log("div4");
      div4 = 2;
      
  }else if("ChildBox5"==id){
    console.log("div5");
      div5 = 2;
      
  }else if("ChildBox6"==id){
    console.log("div6");
      div6 = 2;
      
  }else if("ChildBox7"==id){
    console.log("div7");
      div7 = 2;
      
  }else if("ChildBox8"==id){
    console.log("div8");
      div8 = 2;
      
  }else if("ChildBox9"==id){
    console.log("div9");
      div9 = 2;
      
  }
  player2func(choice);
}
i++;
}

ResetBtn.addEventListener("click",()=>{
Childbox.forEach((choice)=>{
  choice.style.color = "black";
  choice.style.pointerEvents = "auto";
  choice.innerText = "";
});
playerx1.innerText = "0";
player02.innerText = "0";

i=1;

div1=0;
div2=0;
div3=0;
div4=0;
div5=0;
div6=0;
div7=0;
div8=0;
div9=0;
});

NewGameBtn.addEventListener("click",()=>{
  
Childbox.forEach((choice)=>{
  choice.style.color = "black";
  choice.style.pointerEvents = "auto";
  choice.innerText = "";
});
div1=0;
div2=0;
div3=0;
div4=0;
div5=0;
div6=0;
div7=0;
div8=0;
div9=0;

i=1;
});

Childbox.forEach((choice)=>{
  choice.addEventListener("click",()=>{
 choice.style.pointerEvents = "none";
  let id = choice.getAttribute("id");
  console.log("choice was clicked",id);
 myfunc(choice,id);
});
});
