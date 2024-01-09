const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}

producto.imagen = "imagen.jpg"; // Agregar valor al objecto

delete producto.stock; // Eliminar valor al objecto

console.log(producto);

// Agregar nuevas propiedades al objecto