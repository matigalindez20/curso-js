// Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}

// Object Constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponbile = true;
}

const producto2 = new Producto("Monitor 30 pulgadas", 300);
console.log(producto2);

const producto3 = new Producto("Table", 500);
console.log(producto3);