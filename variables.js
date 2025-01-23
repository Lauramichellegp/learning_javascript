// 1. Declaramos una variable para guardar información: un nombre
let nombre = "Juan"; // Aquí estamos diciendo que "nombre" es igual a "Juan"
console.log("Hola, " + nombre + "!");

// 2. Cambiamos el valor de la variable
nombre = "María"; // Ahora cambiamos el valor de "nombre" a "María"
console.log("Hola, " + nombre + "!");

// 3. Declaramos otra variable para guardar una edad
let edad = 25; // Guardamos un número en la variable "edad"
console.log(nombre + " tiene " + edad + " años.");

// 4. Realizamos una operación matemática con variables
let aniosHastaCumple = 30 - edad; // Calculamos cuántos años faltan para llegar a 30
console.log("A " + nombre + " le faltan " + aniosHastaCumple + " años para cumplir 30.");

// 5. Una variable puede guardar diferentes tipos de datos
let estaEstudiando = true; // Aquí usamos un valor booleano (verdadero o falso)
if (estaEstudiando) {
  console.log(nombre + " está estudiando JavaScript. ¡Muy bien!");
} else {
  console.log(nombre + " no está estudiando. ¡Anímate a aprender!");
}

// 6. ¡Podemos combinarlo todo para crear algo más dinámico!
nombre = "Carlos";
edad = 20;
estaEstudiando = false;
console.log("Hola, " + nombre + ". Tienes " + edad + " años.");
if (estaEstudiando) {
  console.log("¡Sigue aprendiendo, " + nombre + "!");
} else {
  console.log("¡Es un buen momento para comenzar a programar, " + nombre + "!");
}





