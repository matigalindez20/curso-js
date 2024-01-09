"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}

console.log(producto)

producto.marca = "Adidas"
delete producto.marca;

Object.freeze(producto)

//console.log(Object.isFrozen(producto));
