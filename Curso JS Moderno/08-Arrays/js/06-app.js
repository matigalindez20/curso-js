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

let resultado;

resultado = [...carrito, producto, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);


console.table(carrito);
