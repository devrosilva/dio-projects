//Functions
//Exercise 01
/*
1. Create a function that receives an array of students and a number which represents the minimum average in order to be approved.
2. Create a new array and insert into it only students that reached the average.
3. Utilize object destructuring to manipulate the desired property of each student object.
*/
let students = [];
students.push(
                {name: 'Rodrigo', finalGrade: 90, anotherProperty: "anotherProperty"}, 
                {name: 'Pedro', finalGrade: 95, anotherProperty: "anotherProperty"}, 
                {name: 'Fernando', finalGrade: 100, anotherProperty: "anotherProperty"}, 
                {name: 'aGuy', finalGrade: 55, anotherProperty: "anotherProperty"}
                );

function isApproved(array, average){
    if(!array || !average){return "Invalid Data.";}
    let approvedStudents = [];

    for(let i = 0; i < array.length; i++){
        const {name, finalGrade} = array[i];
        finalGrade >= average ? approvedStudents.push(name) : console.log(`${name} was not approved.`);
    }
    return "Approved Students: " + approvedStudents.toString().split(",").join(", ");
}
console.log(isApproved(students, 60));

//-------------------------------------------------------//

//Exercise 02
//Given the function calculateAge, utilize call and apply methods to change the value of this. Create your own objects for this exercise.

let person = {
    nome: 'Rodrigo',
    idade: 35
}

function calculaIdade(years) {
	return `In ${years} years, ${this.nome} will be ${this.idade + years} years old.`;
}

function generateAge(){
    
    return Math.floor(Math.random() * 100);
}
console.log('Result using call(): ' + calculaIdade.call(person, generateAge()));
console.log('Result using apply(): ' + calculaIdade.apply(person, [generateAge()]));