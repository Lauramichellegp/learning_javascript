// 1. TIPOS DE DATOS PRIMITIVOS
// --- Number ---
let edad = 30; // Un número entero
let precio = 19.99; // Un número decimal
console.log("Número entero:", edad);
console.log("Número decimal:", precio);

// --- String ---
let nombre = "Mario"; // Una cadena de texto
let saludo = "¡Hola, " + nombre + "!";
console.log("Texto o String:", saludo);

// --- Boolean ---
let estaAprendiendo = true; // Puede ser true (verdadero) o false (falso)
console.log("¿Está aprendiendo?:", estaAprendiendo);

// --- Null ---
let valorNulo = null; // Representa la ausencia de valor
console.log("Valor nulo:", valorNulo);

// --- Undefined ---
let sinDefinir; // No se ha asignado un valor
console.log("Sin definir:", sinDefinir);

// --- BigInt ---
let numeroGrande = 1234567890123456789012345678901234567890n; // Número muy grande
console.log("Número muy grande (BigInt):", numeroGrande);

// --- Symbol ---
let simbolo = Symbol("identificador único");
console.log("Símbolo:", simbolo);

// 2. TIPOS DE DATOS NO PRIMITIVOS
// --- Object ---
let persona = {
  nombre: "Mario",
  edad: 30,
  profesion: "Desarrollador",
};
console.log("Objeto persona:", persona);

// --- Array ---
let colores = ["rojo", "verde", "azul"];
console.log("Arreglo de colores:", colores);

// --- Function ---
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log("Función de saludo:", saludar("Carlos"));

// 3. PRÁCTICA: COMBINAR TIPOS DE DATOS
let usuario = {
  nombre: "Ana",
  edad: 25,
  hobbies: ["leer", "bailar", "cocinar"], // Un array dentro de un objeto
  estaOnline: true, // Un booleano dentro de un objeto
};

console.log("Información del usuario:");
console.log("Nombre:", usuario.nombre);
console.log("Hobbies:", usuario.hobbies);
console.log("¿Está online?:", usuario.estaOnline);