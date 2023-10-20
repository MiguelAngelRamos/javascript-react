/**
 * El método map()
 * * Crea un nuevo array, y el array resultante tiene una modificacion por cada elemento
 * 
 */

const numeros = [10, 20, 30, 40];//* longitud de 4
//numeros[0]; // 10
//*               0, 1,  2,  3

// const resultMap = numeros.map((numero) => {
//   return numero*2;
// });

const resultMap = numeros.map(numero => numero*2);
// console.log(resultMap);

const usuarios = [
  { id: 1, name: 'Pedro'},
  { id: 2, name: 'Fernanda'},
  { id: 3, name: 'Sofia'}
];

const resultadoJsx = usuarios.map((user) => {
  return `<li>${user.name}</li>`;
});
console.log(resultadoJsx);

//* return "<li>"+ user.name + "</li>";
  //* alt + 96