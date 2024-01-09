const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
    mostrarInfo: function(){
        console.log(`El precio del ${this.nombre} es de ${this.precio}`) // this se usa para llamar a la variable dentro del objeto
    }
}

producto.mostrarInfo();

