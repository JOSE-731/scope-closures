//Funcion scope, cuando solo se puede  acceder a valores que esten dentro de la funcion
function saludo(){
    let name = "Jose";

    if(name === 'Jose'){
        console.log(`Hola ${name}`); 
    }
}

saludo();

//Si intetamos lo siguiente dará un error, ya que estamos intentando acceder a una variable cuyo escope no es global
console.log(`Hola ${name}`); 
