
//Cuando llamamos una funcion y una variable antes de su declaracion
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perro es ${namePerro}`);
}

// Pero si agregamos o definimos una varible si se ejecuta el codigo
var namePerro;

// "El mejor perro es _undefined_"