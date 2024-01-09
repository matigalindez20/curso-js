const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
    informacion: {
        medidas : {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion : {
            pais: "China",
        }
    }
}

console.log(producto);

console.log(producto.informacion.medidas.peso);
