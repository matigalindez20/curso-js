const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    stock: true,
}

const medidas = {
    peso: "1Kg",
    altura: "1 metro"
}

const resultado = Object.assign(producto, medidas); // assign para unir dos objetos

// Spread Operator o Rest Operator

const resultado2 = {...producto, ...medidas}

console.log(resultado);
console.log(resultado2);