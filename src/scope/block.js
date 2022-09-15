//Global scope, cuando declaramos una variable y podemos acceder a ella desde cualquier parte.
//Function scope, solo se puede acceder a la variable desde la funcion.
//Block scope, solo podemos acceder desde el bloque de codigo donde se definió la variable.

 function frutas(){
     if(true){
        let fruta1 = "Mango";
        const fruta2 = "Pera";
        var fruta3 = "Manzana";

        console.log(fruta1);
        console.log(fruta2);
    }
    console.log(fruta3);//Como se declaró la variable con var se puede acceder fuera del bloque donde se definió
    console.log(fruta2);//En este caso no se puede acceder, porque se declaró en un bloque y el tipo de variable const respeta el scope
}

frutas();