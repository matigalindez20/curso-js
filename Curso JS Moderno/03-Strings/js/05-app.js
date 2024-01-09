const elemento = "Monitor 24 pulgadas";

console.log(elemento.replace("pulgadas", '"')); // replace -->  modificar texto

// slice --> para cortar partes del texto

const prueba = "Hola soy pollito galindez";
console.log(prueba.slice(0, 10));

// Alternativa a slice

console.log(prueba.substring(0,10));
console.log(prueba.substring(2,1));

const name = "Matias";

console.log(name.substring(0,1));
console.log(name.charAt(0)); // Toma la letra en la posición que elijes