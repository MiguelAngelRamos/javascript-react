//* const 
/**
 * Cuando se trata de objetos y arrays hay una excepción
 */

const persona = {
  nombre: 'Miguel',
  lenguaje: 'JavaScript'
}
console.log(persona.nombre); //* Miguel
console.log(persona.lenguaje); //* JavaScript

persona.pais = "Chile";
persona.nombre = "Angel";
console.log(persona)