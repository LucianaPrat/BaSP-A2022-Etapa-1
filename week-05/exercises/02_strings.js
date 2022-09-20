console.log('------> EXERCISE 2: Strings <------');

/* a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('------ EXERCISE 2.a ------');

var upperCaseTextOne = 'never stop dreaming'.toUpperCase();

console.log(upperCaseTextOne);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los primeros 5 caracteres guardando el resultado en una 
nueva variable (utilizar substring). */

console.log('------ EXERCISE 2.b ------');

var textFiveWords = ('progress over perfection'.substring(0, 5));

console.log(textFiveWords);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring). */

console.log('------ EXERCISE 2.c ------');

var threeWords = ('good thing take time'.substring(17));

console.log(threeWords);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el 
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase 
y el operador +). */

console.log('------ EXERCISE 2.d ------');

var text = 'focus on the good'

var textUpperCase = text.toUpperCase();

var firstWord = textUpperCase.substring(0, 1);

var nextsWords = text.substring(1,17);

var newText = firstWord + nextsWords;

console.log(newText);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y 
guardarla en una variable (utilizar indexOf). */

console.log('------ EXERCISE 2.e ------');

var sentence = 'be positive';

var emptyPosition = sentence.indexOf(' ');

console.log(emptyPosition);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar 
un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás 
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('------ EXERCISE 2.f ------');

var twoWords = 'green mountains';

var indexFirstCharFirstWord = 0;

var indexFirstCharSecondWord = twoWords.indexOf(" ") + 1;

var upperCasefirstWord = (twoWords.substring(indexFirstCharFirstWord, 1)).toUpperCase();

var upperCaseSecondWord = (twoWords.substring(indexFirstCharSecondWord, indexFirstCharSecondWord + 1)).toUpperCase();

var restFirstWord = twoWords.substring(1, indexFirstCharSecondWord);

var restSecondWord = twoWords.substring(indexFirstCharSecondWord + 1);

var newWords = upperCasefirstWord + restFirstWord + upperCaseSecondWord + restSecondWord;

console.log(newWords);


