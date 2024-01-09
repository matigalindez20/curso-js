const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true
}

producto.stock = false;

delete producto.precio;

console.log(producto);