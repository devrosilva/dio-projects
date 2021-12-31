//-------------------------------------------------------//
//Colections
/*
Exercise 01
1. Create a function named getAdmins which receives a Map.
2. Create a map that fill it with user names and their roles in the system (Ex.: 'Luiz' => 'Admin').
3. Inside getAdmins utilize a loop for...of to get a list with names of users who are admins.
 */

const users = new Map();

users.set('Rodrigo', 'Admin');
users.set('aGuy', 'User');
users.set('Cláudia', 'Admin');

function getAdmins(map){
    if(!(map instanceof Map)){return "Invalid Data.";}
    let admins = [];
    for (p of map){
        p[1] === 'Admin' ? admins.push(p) : console.log(``);
    }
    return admins;
}
console.log(getAdmins(users));

/*
Exercise 02
Given an array return another one that contains only unique values.
 */
let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function getUniqueItemsArray(array){
    let set = new Set(array);
    return Array.from(set);
}

console.log(getUniqueItemsArray(array));
