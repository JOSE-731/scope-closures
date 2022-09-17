//Nos permite ejecutar de forma estricta reglas particulares.
//Por ejemplo:

//Para mejorar el control de la asignación de las variables y algunos otros elementos 
//claves para que nuestro código cumpla con el mayor de los estándares.

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
  return pi = 3.1416;
}

//Usando el modo 'use strict' nos genera un error ya que estamos accediendo a una variable que no esta declarada 
//con un tipo de variable como ejemplo: let, var y const.
console.log(myFunction());