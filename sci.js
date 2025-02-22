let a;
function generate(){
a = Math.floor(Math.random()*3);
}

let comp = 0;
let you = 0;


let result=document.getElementsByClassName('result')
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')
function youwinn(){
    r1.textContent='YOU WIN'
    r2.textContent=`${yourtext.textContent} beats ${comptext.textContent}`
}

function compwinn(){
    r1.textContent='COMP WIN'
    r2.textContent=`${comptext.textContent} beats ${yourtext.textContent}`
}



document.getElementById('rock').onclick = function(){
    document.getElementById('you').textContent = "rock"; 
    generate();
    dice()
    point()
    changeresult()

}
let yourtext=document.getElementById('you')
document.getElementById('paper').onclick = function(){
    yourtext.textContent = "paper";
    generate();
    dice()
    point()

}

document.getElementById('sci').onclick = function(){
    yourtext.textContent = "scissor";
    generate();
    dice()
    point()
}


let comptext = document.getElementById('comp')
function dice(){
if(a===0){
    comptext.textContent = 'rock';
}
else if (a===1){
    comptext.textContent = 'paper';
}
else{
    comptext.textContent = 'scissor';
} 
}

function point(){

let p = document.getElementById('you').textContent
    if((a===0 && p==='paper') || (a===1 && p==='scissor') || (a===2 && p==='rock')){
        you++;
        youwinn()
    }
    else if ((a===0 && p==='scissor') || (a===1 && p==='rock') || (a===2 && p==='paper')){
        comp++;
        compwinn()
    }
    document.getElementById('yp').textContent = you
document.getElementById('cp').textContent = comp
}

document.getElementById('reset').onclick = function(){
    document.getElementById('yp').textContent = 0
    document.getElementById('cp').textContent = 0
    you=0
    comp=0
}




  