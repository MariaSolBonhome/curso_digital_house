                    //AVANZANDO CON LAS FUNCIONES

//TIPOS DE FUNCIONES

//FUNCIONES DECLARADAS: pueden ser invocadas antes de su declaracion, antes de crearlas. El codigo suele leerse verticalmente, pero estas funciones puedo llamarlas arriba y desp declararlas y funciona igual.
console.log(suma(2,2));
function suma(num1, num2){
    return num1+num2;
}

/*FUNCIONES EXPRESADAS: son aquellas q se asignan a una variable o se usan como parte de una expresion. No pueden invocarse antes de su definicion xq siguen las reglas normales. Esta funcion no va a exister 
hasta que la compu baje renglon por renglon y llegue hasta esta variable RESTA donde tiene asignada esta funcion.*/
let resta = function(num3, num4){
    return num3 - num4;
}
console.log(resta(10,5));//No puedo poner esta linea mas arriba xq no la va a leer.

//FUNCIONES FLECHA (arrow functions): forma mas breve un concisa de escribir funciones. No tienen su propio contexto THIS. No pueden invocarse antes de su defincion. No usable en sit q necesitemos THIS, xq no funciona.
let multiplicacion = (num5,num6) => { //No se usa FUNCTION, van directo los parametros. => comprende q al ponerlos untos se crea una funcion de tipo flecha/arrow.
    return num5 * num6;
}
console.log(multiplicacion(4,3));



//CALLBACKS: son funciones q se envian por parametro a otras funciones y se ejecutan desp q finalice una tarea asincronica.

//funcion q recorre array ejecuta un callbacks
function procesarArray(array, callbacks){
    for(let i=0;i<array.length;i++){
        callbacks(array[i]);//Callback es una funcion q recibe por parametro todos los elem q estan en el array recibido.
    }
}

//funcion de callbacks q muestre los elem del array
function mostrarElemento(elemento){
    console.log(elemento);
}

function multiplicarPorDos(elemento){
    console.log(elemento*2);
}

function calcularCuadrado(elemento){
    console.log(elemento*elemento);
}

//crear array
let miArray = [1,2,3,4,5];

//llamada a la funcion procesarArray
console.log("Recorrido de array: ");
procesarArray(miArray, mostrarElemento);
console.log("Multiplicacion por 2: ");
procesarArray(miArray, multiplicarPorDos);
console.log("Cuadrado de cada elemento: ");
procesarArray(miArray, calcularCuadrado);



