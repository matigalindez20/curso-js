const carrito = [
    {producto: "Iphone", precio: 1000},
    {producto: "Ipad", precio: 1200},
    {producto: "Watch", precio: 800},
    {producto: "Tablet", precio: 600},
    {producto: "Wallet", precio: 200},
    {producto: "Ipod", precio: 450},
]


/*
for(i = 0; i < carrito.length; i++){
    console.log(carrito[i].producto); // Se pone .producto en esta caso para acceder a esa propiedad en el momento de i
}
*/
for(i = 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].producto} - Precio: ${carrito[i].precio}`); 
}