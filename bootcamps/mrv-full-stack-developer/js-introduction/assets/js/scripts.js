var currentNumber = document.getElementById('currentNumber');
var subtract = document.getElementById('subtract');
var add = document.getElementById('add');

function decrement(){
    if(currentNumber.innerHTML > 0){
        currentNumber.innerHTML --;
    }
}

function increment(){
    if(currentNumber.innerHTML < 10){
        currentNumber.innerHTML ++;
    }
}

subtract.addEventListener("click", decrement);
add.addEventListener("click", increment);