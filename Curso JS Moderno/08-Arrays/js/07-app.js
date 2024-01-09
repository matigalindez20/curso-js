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

const producto4 = {
    nombre: 'Iphone',
    precio: 1000
}

const producto5 = {
    nombre: 'Ipad',
    precio: 800
}

carrito.push(producto, producto2);
carrito.unshift(producto3);
carrito.push(producto4, producto5);
console.table(carrito);


//Eliminar ultimo elemento del array...

//carrito.pop();
//console.table(carrito);

//Eliminar el primer elemento del array...

//carrito.unshift();
//console.table(carrito);

// Eliminar algun otro elemento del array...

carrito.splice(1, 2); // Primero se detalla de que posicion se va eliminar y luego que cantidad de elem va borrar
console.table(carrito);
