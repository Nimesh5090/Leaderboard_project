let btn = document.querySelector("#btn");
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let select = document.querySelector("#select");
let score = document.querySelector("#score");
let container = document.querySelector("#container");
let players = [];

function activatebtns(){
    let active = document.querySelectorAll(".active");
active.forEach((item,index)=>{
    item.addEventListener("click",function(e){
        
        
        
        if(e.target.classList.contains("minus")){
            let score = parseInt(players[index].score);
            score-=5;
            players[index].score=score;
            updateonUI();
        }
        if(e.target.classList.contains("plus")){
            let score = parseInt(players[index].score);
            score+=5;
            players[index].score=score;
            updateonUI();
        }
        if(e.target.classList.contains("delete")){
          players.splice(index,1);
          updateonUI();
        }
        
    })
})
}

function updateonUI(){
    players.sort((p1,p2)=>{
        return p2.score-p1.score;
    })
    let show = "";
    players.forEach((player)=>{

        show+=`<div class="active">
    <span>${player.first}</span>
    <span>${player.last}</span>
    <span>${player.select}</span>
    <span>${player.score}</span>
    <button class="delete">delete</button>
    <button class="plus">+5</button>
    <button class="minus">-5</button>
</div>`

container.innerHTML=show;
activatebtns();


})




// document.querySelector(".+5").addEventListener("click",function(player){
//     player.score=parseInt(player.score)+5;
// })
    
    //     let div = document.createElement("div");
    //     let div1 = document.createElement("div");
    //     let div2 = document.createElement("div");
    //     let div3 = document.createElement("div");
    //     let div4 = document.createElement("div");
    //     let div5 = document.createElement("button");
    //     let div6 = document.createElement("button");
    //     let div7 = document.createElement("button");
        
    //     div1.innerText=player.first;
    //     div2.innerText=player.last;
    //     div3.innerText=player.select;
    //     div4.innerText=player.score;
    //     div5.innerHTML=`<i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    //     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    //     <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    //   </svg></i> `;
    //     div6.innerText="+5";
    //     div7.innerText="-5";
        
    // div.appendChild(div1);
    // div.appendChild(div2);
    // div.appendChild(div3);
    // div.appendChild(div4);
    // div.appendChild(div5);
    // div.appendChild(div6);
    // div.appendChild(div7);
    
    // div.style.display="flex";
    //     div.style.justifyContent="space-between";
    //     div.style.alignItems="center";
    //     // main.style.border="4px solid black";
    //     div.style.borderTopRightRadius="100px";
    //     div.style.borderBottomRightRadius="100px";
    //     div.style.width="838px";
    //     div.style.padding="30px 10px";
    //     div.style.margin="15px 0px 0px 15px";
    //     div.style.color="white";
    //     div.style.background="rgb(17, 121, 206)";
    
    // container.appendChild(div);
    
        // div6.addEventListener("click" , function(){
        //     score.value = parseInt(score.value)+5;
        //     div4.innerText=score.value;
        // })
    
        // div7.addEventListener("click" , function(){
        //     score.value = parseInt(score.value)-5;
        //     div4.innerText=score.value;
        // })
    
        // div5.addEventListener("click" , function(){
        //     div.style.display="none";
        // })
    
   
   }
function addScore(){

    if(first.value==="" || last.value==="" || select.value==="selcon" || score.value===""){
        alert("All fields are mandatory");

    }
    else{

        let playerobj = {
            first : first.value,
            last : last.value,
            select : select.value,
            score : score.value
        };
        
        players.push(playerobj);

        updateonUI();
     first.value="";
     last.value="";
     select.value="selcon";
     score.value="";

  
    }
      
}

btn.addEventListener("click" , addScore);

