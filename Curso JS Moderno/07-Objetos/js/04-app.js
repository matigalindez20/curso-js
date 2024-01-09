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
