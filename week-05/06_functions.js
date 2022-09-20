console.log('------> EXERCISE 6: Functions <------');

// EXERCISE 6.a: 
/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador. */

console.log('------ EXERCISE 6.a ------');

function sum(data1 , data2) {
   return data1 + data2;
};

var newSum = sum(50 , 30); 

console.log(newSum); 

// EXERCISE 6.b: 
/* A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno
de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('------ EXERCISE 6.b ------');

function sumExerciseB(data1 , data2) {
    var result;
    if ((typeof data1 === 'number' && typeof data2 === 'number') === false) {
       alert('One of the parameters has an error');  
       result = NaN;                                      
    } else {    
        result = data1 + data2; 
    }
    return result;        
};

var newSumB = sumExerciseB(5, 30);

console.log(newSumB);

// EXERCISE 6.c: 
/* Aparte, crear una función validate Integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero. */

console.log('------ EXERCISE 6.c ------');

function validateInteger(numberReceived) {
    var result;
    if (Math.round(numberReceived) === numberReceived) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
 
var validation = validateInteger(2.2); 

console.log(validation);

// EXERCISE 6.d: 
/* A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c)
y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con
el error y retornar el número convertido a entero (redondeado). */

console.log('------ EXERCISE 6.d ------');

function sumExerciseD(data1 , data2) {
    var result;
    if ((typeof data1 === 'number' && typeof data2 === 'number') ===  false) {
        alert("One of the parameters is not a number");
        result = NaN;
    } else {
        if (validateInteger(data1) === false) {
            alert('Error: your first number is not an integer, it should be: ' + Math.round(data1));
        } else if (validateInteger(data2) === false) {
            alert('Error: your second number is not an integer, it should be: ' + Math.round(data2));
        }
        result = data1 + data2;
    }
    return result;
} 

var resultSum = sumExerciseD(5, 10);

console.log(resultSum);

// EXERCISE 6.e:
/* Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log('------ EXERCISE 6.e ------');


function typeComparison(number){
   return (typeof number === 'number');
}

function sumExerciseE(data1 , data2) {
    var result;
    if ((typeComparison(data1) && typeComparison(data2)) ===  false)  {
        alert("One of the parameters is not a number")
        result = NaN;
    }else{
        if(validateInteger(data1) === false){
            alert('Error: your first number is not an integer, it should be: ' + Math.round(data1))
        }else if(validateInteger(data2) === false){
            alert('Error: your second number is not an integer, it should be: ' + Math.round(data2))
        }
    var result = data1 + data2;    
    }
    return result;
} 

var resultSum = sumExerciseE(5, 2);

console.log(resultSum);