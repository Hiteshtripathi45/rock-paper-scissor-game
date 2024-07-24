let a;
function generate(){
a = Math.floor(Math.random()*3);
}

let comp = 0;
let you = 0;


document.getElementById('rock').onclick = function(){
    document.getElementById('you').textContent = "rock"; 
    generate();
    dice()
    point()

}

document.getElementById('paper').onclick = function(){
    document.getElementById('you').textContent = "paper";
    generate();
    dice()
    point()

}

document.getElementById('sci').onclick = function(){
    document.getElementById('you').textContent = "scissor";
    generate();
    dice()
    point()
}



function dice(){
if(a===0){
    document.getElementById('comp').textContent = 'rock';
}
else if (a===1){
    document.getElementById('comp').textContent = 'paper';
}
else{
    document.getElementById('comp').textContent = 'scissor';
} 
}

function point(){

let p = document.getElementById('you').textContent
    if((a===0 && p==='paper') || (a===1 && p==='scissor') || (a===2 && p==='rock')){
        you++;
    }
    else if ((a===0 && p==='scissor') || (a===1 && p==='rock') || (a===2 && p==='paper')){
        comp++;
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




  