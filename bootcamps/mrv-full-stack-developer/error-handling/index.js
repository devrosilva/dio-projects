//-------------------------------------------------------//
//Error Handling
function validateArray(array, size){

    try{
        if(!array || !size){throw new ReferenceError;}
        if(typeof array !== 'object'){throw new TypeError;}
        if(typeof size !== 'number'){throw new TypeError;}
        if(array.length !== size){throw new RangeError;}
        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){'Invalid Parameters.' + e;}
        else if(e instanceof TypeError){'Invalid Parameter.' + e;}
        else if(e instanceof RangeError){'Invalid array size.' + e;}
    }
}

let anotherArray = [{name: 'Rodrigo'}];
let size = 1;
const validatedArray = validateArray(anotherArray, size);
console.log(validatedArray);