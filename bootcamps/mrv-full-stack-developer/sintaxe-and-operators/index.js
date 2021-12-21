//Exercise
//Create a function that receives two numbers, does some comparison and shows the result.
function compareNumbers(firstNumber, secondNumber){
   
    const isEven = firstNumber === secondNumber ? "are equal" : "are not equal";
    const isLower = firstNumber + secondNumber > 10 ? "greater than" : "less than";
    const isHigher = firstNumber + secondNumber > 20 ? "greater than" : "less than";

    return `The numbers ${firstNumber} and ${secondNumber} ${isEven}. Their sum are ${firstNumber + secondNumber} which are ${isLower} 10 and ${isHigher} 20.`;
}

const randomNumber = () => Math.floor((Math.random() * 100)/5, 0);
const result = compareNumbers(randomNumber(), randomNumber());
console.log(result);
