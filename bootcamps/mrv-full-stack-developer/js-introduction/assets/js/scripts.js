let currentNumber = document.getElementById('currentNumber');
let subtract = document.getElementById('subtract');
let add = document.getElementById('add');

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