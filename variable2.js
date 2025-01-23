// 1. Vamos a aprender sobre los tipos de variables en JavaScript: let, const y var

// * LET *
// Se usa para crear variables que pueden cambiar su valor.
let edad = 25; // Declaramos una variable con let
console.log("Edad inicial:", edad);

edad = 30; // Cambiamos el valor de la variable
console.log("Edad después del cambio:", edad);

// * CONST *
// Se usa para variables que NO cambian su valor. Son constantes.
const nombre = "Juan"; // Declaramos una constante
console.log("Nombre:", nombre);

// Si intentamos cambiar el valor de una constante, da un error
// nombre = "Carlos"; // Esto dará un error: TypeError: Assignment to constant variable

// * VAR *
// Este es el método más antiguo para declarar variables (ya casi no se usa).
var ciudad = "Bogotá"; // Declaramos una variable con var
console.log("Ciudad:", ciudad);

ciudad = "Medellín"; // Podemos cambiar su valor, como con let
console.log("Ciudad después del cambio:", ciudad);

// * DIFERENCIAS ENTRE LET, CONST Y VAR *

// 1. Ámbito de las variables
if (true) {
  let variableConLet = "Dentro del bloque";
  const variableConConst = "También dentro del bloque";
  var variableConVar = "Accesible fuera del bloque";

  console.log("Dentro del bloque:");
  console.log("LET:", variableConLet);
  console.log("CONST:", variableConConst);
  console.log("VAR:", variableConVar);
}

// console.log(variableConLet); // Error: variableConLet no está definida fuera del bloque
// console.log(variableConConst); // Error: variableConConst no está definida fuera del bloque
console.log("VAR fuera del bloque:", variableConVar); // Esto funciona porque var ignora los bloques

// 2. ¿Qué pasa si declaramos una variable con el mismo nombre?
let animal = "Perro";
// let animal = "Gato"; // Error: No podemos declarar dos variables let con el mismo nombre en el mismo ámbito
console.log("Animal:", animal);

var fruta = "Manzana";
var fruta = "Banana"; // Esto funciona, pero puede causar problemas si olvidamos que ya existía
console.log("Fruta:", fruta);

// 3. Const también requiere que le asignemos un valor al declararla
// const pais; // Error: Una constante debe ser inicializada al declararse
const pais = "Colombia";
console.log("País:", pais);