let a;
function generate(){
a = Math.floor(Math.random()*3);
}

let comp = 0;
let you = 0;


let result=document.getElementsByClassName('result')
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')
let title = document.getElementById('title')
let title2= document.getElementById('title2') 
function youwinn(){
    r1.textContent='YOU WIN'
    r2.textContent=`${yt} beats ${ct}`
}

function compwinn(){
    r1.textContent='COMP WIN'
    r2.textContent=`${ct} beats ${yt}`
}
function tie(){
    r1.textContent='ITS A TIE'
    r2.textContent=`its a tie with ${yt}`
}



document.getElementById('rock').onclick = function(){
    yourtext.textContent = "✊"; 
    yt='rock'
    generate();
    dice()
    point()
    changeresult()

}
let yourtext=document.getElementById('you')
let yt
document.getElementById('paper').onclick = function(){
    yourtext.textContent = "🖐️";
    yt='paper'
    generate();
    dice()
    point()

}

document.getElementById('sci').onclick = function(){
    yourtext.textContent = "✌️";
    yt='scissor'
    generate();
    dice()
    point()
}


let comptext = document.getElementById('comp')
let ct
function dice(option){
if(a===0){
    comptext.textContent ='✊' ;

    ct='rock'
}
else if (a===1){
    comptext.textContent = '🖐️';
    ct='paper'
}
else{
    comptext.textContent = '✌️';
    ct='scissor'
} 
}

function point(){

let p = document.getElementById('you').textContent
    if((a===0 && p==='🖐️') || (a===1 && p==='✌️') || (a===2 && p==='✊')){
        you++;
        youwinn()
    }
    else if ((a===0 && p==='✌️') || (a===1 && p==='✊') || (a===2 && p==='🖐️')){
        comp++;
        compwinn()
    }
    else{
        tie()
    }
    title2.textContent=`YOUR-SCORE:${you}`
    title.textContent=`COMP-SCORE:${comp}`
}

document.getElementById('reset').onclick = function(){
    title.textContent = 'COMP-SCORE:0'
    title2.textContent = 'YOUR-SCORE:0'
    comptext.textContent= '❔'
    yourtext.textContent= '❔'
    you=0
    comp=0
}




  