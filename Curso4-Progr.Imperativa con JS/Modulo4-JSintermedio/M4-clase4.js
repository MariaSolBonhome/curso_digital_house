//DESAFIO PRACTICO
/*
1)Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array. Para esto, averiguar qué hace el método .concat()*/
let array1 = [1,2,3,4]
let array2 = [5,6,7]
function unirArrays(array1, array2){
    return array1.concat(array2);
}
let newArray = unirArrays(array1, array2)
console.log(newArray);//console.log(unirArrays(array1, array2))



//2)Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado.
function eliminarPrimerElemento(array1){
    return array1.shift();
}
let deletedElement = eliminarPrimerElemento(array1);
console.log(deletedElement);//Me muestra el numero 1, q es el elemento q se elimino de array1 y estaba en posicion 0.



/*3)Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar 
qué hacen los métodos de Strings: toUpperCase() y toLowerCase()*/
let saludo = "Hola, como estas?"
function convertirTexto(saludo){
    let upperCase = saludo.toUpperCase();
    let lowerCase = saludo.toLowerCase();
    console.log(upperCase)
    console.log(lowerCase);
}
convertirTexto(saludo)

/*4)Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para 
ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.*/
console.log("============ Ejercicio 4 empieza ================")
let persona = {
    nombre : "Sol",
    edad : 26,
    ocupacion : "docente"
}

function mostrarPropiedadesDePersona(persona){
    console.log(persona);
}
mostrarPropiedadesDePersona(persona)
persona.ocupacion = "programadora";
persona.habilidad = "leer"
mostrarPropiedadesDePersona(persona)

/*5)Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 
Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto. */
console.log("============ Ejercicio 5 empieza ================")

persona.ubicacion = {
    codigoPostal : 1271,
    ciudad : "CABA",
    calle : "Av. Montes de Oca",
    numero : 1540
}

console.log(persona);

function usuarioEliminaPropiedad(persona){
    delete persona.ubicacion.numero
}

usuarioEliminaPropiedad(persona)

console.log(persona);
