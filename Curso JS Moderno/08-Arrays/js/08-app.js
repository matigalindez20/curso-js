const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}

/*
const variable = producto.nombre;
console.log(variable);
*/

// Destructuring -> Ademas de extraer crea la variable.

const {nombre, precio} = producto;
console.log(nombre);
//const {precio} = producto;
console.log(precio);

// Destructuring con arrays

const numeros = [10, 20, 30, 40, 50];

const [ primero, , tercero] = numeros; // Si quiero llegar al tercer lugar, y no necesito los anteriores crear espacios vacios para que sea hacer de cuenta que se toma el espacio.
const [pri, ...segundo] = numeros; // Crea un array con los el sobrante de elementos que no se declaró
console.log(segundo);
console.log(pri);
console.log(tercero, primero);