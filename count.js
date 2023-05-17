let increase;
let rest;
let decrease;

let num = 0;
Number(num);

document.getElementById('increase-btn').onclick = 
function(){
    num += 1;
    document.getElementById('number').innerHTML = num;
    
    if(num > 0){
        document.getElementById('number').style.color = "blue";
    }
}

document.getElementById('rest-btn').onclick = 
function(){
    num = 0;
    document.getElementById('number').innerHTML = num;
    document.getElementById('number').style.color = "black";
}

document.getElementById('decrease-btn').onclick = 
function(){
    num -= 1;
    document.getElementById('number').innerHTML = num;

    if(num < 0){
        document.getElementById('number').style.color = "red";
    }
}

