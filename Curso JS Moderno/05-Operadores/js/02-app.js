const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos numeros son iguales

console.log(numero1 == numero2); // == se fija solo en el valor

// Comparador estricto

console.log(numero1 === numero2); // compara tipo de datos tambien
console.log(numero1 === parseInt(numero2));

// Diferente

let pass = "admin";
let pass1 = "Admin";

console.log(pass != pass1); // se fija tambien en el valor
console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2)); // ya se fija en el tipo de dato