/**
 * El método Reduce es "acumulador", es decir toma una cantidad de datos y nos retorna el resultado
 * acumulado
 * 
 */
const carrito = [
  { nombre: 'NoteBook MSI', precio: 1600000 },
  { nombre: 'Mouse Razer', precio: 80000 },
  { nombre: 'Audifonos Razer', precio: 80000 },
  { nombre: 'Monitor MSI', precio: 400000 },
];


const resultadoReduce = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultadoReduce);