//Reasignaciuon ejemplo de como funciona con los tipos de variables, var, let y const.

//var
var nombre;//Cuando declaramos una variable su valor por default es undefined
nombre = "Jose" //Asignamos valor

var nombre = "David"//Declaramos y asignamos
nombre = "Luis" //Reasignamos

var apellido  = "Diaz" //Declaramos y asignamos
var apellido  = "Lopez" //Reasignamos

console.log(apellido) //Lopez

//let
let = test1 = "test1";//Declaramos y asignamos
test1 = "test2"; //Reasignamos

//Si intentamos declarar una nueva variable con let nos saldrá un error ya que este tipo de variable no deja
let test1 = "test";
console.log(test1)

//const
const  animal = "Perro";//Declaramos y asignamos

//no deja reasignar con const
animal = "Gato"; //Reasignamos
console.log(animal)