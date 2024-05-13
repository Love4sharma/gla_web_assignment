let main=document.createElement('div');
main.setAttribute('id','main');
main.style.cssText="width:100% ;height:100%;";

let box=document.createElement('div');
box.style.cssText="width:100% ;height:100%;border:2px solid black";
let id=1;
let cblack="black";
let cwhite="white";
let clss=cblack;
console.log("done");
for ( let i=1;i<=10;i++){
    let row=document.createElement('div');
    row.style.cssText="display:flex;height:100%";
    for(let j=1;j<=10;j++){
        let block=document.createElement('div');
        let num=document.createElement('p');
        num.innerHTML=id;
        block.appendChild(num);
        block.setAttribute('id',`${id}`);
        block.classList.add(`${clss}`);
        id++;
        if(clss!=cblack)
            clss=cblack;
        else
            clss=cwhite;

        block.style.cssText="display:flex;text-align:center;justify-content:center;height:50px;width:10%";
        row.appendChild(block);
    }
    box.appendChild(row);
    if(clss!=cblack)
        clss=cblack;
    else
        clss=cwhite;

}
document.body.appendChild(main);


let dice=document.createElement('button');
dice.innerHTML="Dice";
dice.style.cssText="background-color:blue ; height:70px;width:75px";
let reset=document.createElement('button');
reset.innerHTML="Reset";
reset.style.cssText="background-color:green ; height:70px;width:75px"
let res=document.createElement('p');
let stats=document.createElement('div');
stats.style.cssText="display:flex";
stats.appendChild(dice);
stats.appendChild(reset);
stats.appendChild(res);
main.appendChild(box);
main.appendChild(stats);
let pointer=document.createElement('div');
pointer.style.cssText="background-color:red ; height:70%;width:70%";

document.getElementById(1).appendChild(pointer);
///////////////////////////////////////

let curStep=1;
reset.addEventListener('click',reSet);
dice.addEventListener('click',()=>{
    let num=diceNum();
    res.textContent="Dice-result="+`${num}`;
    
    if(curStep+num<=100){
        curStep+=num;
        pointer.parentNode.removeChild(pointer);
        let curPointer=document.getElementById(curStep);
        curPointer.appendChild(pointer);
    }
    if(curStep===100){
        window.alert("You won");
        reSet();
    }
    

   
    
})

function reSet(){
    curStep=1;
    document.getElementById(1).appendChild(pointer);
}
function diceNum(){
    return Math.floor(Math.random()*6)+1;
}