const meses = ["Diciembre", "Enero", "Febrero", "Marzo", "Abril"];

// Agregar al final del array

meses.push("Dinamicamente");
//console.table(meses);

const carrito =[];

const producto = {
    nombre: 'Monitor',
    precio: 200
}

const producto2 = {
    nombre: 'Teclado',
    precio: 100
}

const producto3 = {
    nombre: 'Celular',
    precio: 500
}

carrito.push(producto, producto2);
carrito.unshift(producto3);

console.table(carrito);
