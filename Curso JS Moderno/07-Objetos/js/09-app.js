"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}


Object.seal(producto) // seal -> te deja modificar las llaves existentes en un objeto pero no agreagar ni borrar

producto.precio = 300;

console.log(producto)
console.log(Object.isSealed(producto));
