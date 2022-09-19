console.log('------> EXERCISE 3: Arrays <------');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('------ EXERCISE 3.a ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
 
console.log(array[4], array[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('------ EXERCISE 3.b ------');

arraySort = array.sort()

console.log(arraySort);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('------ EXERCISE 3.c ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

array.unshift('days');

array.push('months');

console.log(array);

/* d Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('------ EXERCISE 3.d ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

array.shift();

array.pop();

console.log(array);

/* e. Invertir el orden del array (utilizar reverse). */

console.log('------ EXERCISE 3.e ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

array.reverse();

console.log(array);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join). */

console.log('------ EXERCISE 3.f ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(array.join('-'));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta 
Noviembre (utilizar slice). */

console.log('------ EXERCISE 3.g ------');

array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(array.slice(4, 11));


