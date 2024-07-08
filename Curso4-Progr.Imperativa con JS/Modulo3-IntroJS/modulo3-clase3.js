                                //CONTROLANDO EL FLUJO DE LA APLICACION

let edad = 4;

if(edad >= 18){
console.log("La persona es mayor de edad");
}
else{
    console.log("La persona es menor de edad")
}

//CONDICIONALES MULTIPLES Y ANIDADOS
let clima = "soleado";
let temperatura = 28;
let mensaje = "";

// el dia es caluroso si el dia esta soleado o si la temp es mayor a 25. La o se hace con ||, si fuese and va &&
if(clima == "soleado" || temperatura >= 25){
    console.log("El dia esta caluroso")
}
else{
    console.log("El dia no esta caluroso")
}



let puntuacion = 75;

if(puntuacion >= 90){
    console.log("Nota: A");
}
else if(puntuacion >= 80){
    console.log("Nota B");
}
else if (puntuacion >= 70){
    console.log("Nota C");
}
else{
    console.log("Nota D");
}


//No siempre le cargamos nosotros la nota. Y si nos la envian, puede que la info este mal, asi que hay que validar. Si nos mandan -78, esta mal, xq puede ser del 1 al 10.
let nota = 8;
if(nota >= 1 && nota <= 10){ //Valido con este if, si no cumple la condicion entre (), else La nota es erronea.
    if(nota >= 7 && nota <= 10){//Una vez validado, continuo dentro del if haciendo este if para ver si la persona aprobo.
        console.log("Aprobaste la materia"); //Anidado xq hay un IF dentro de otro IF.
    }
    else{
        console.log("Deberas recursar la materia");
    }
}
else {
    console.log("La nota enviada es erronea. Debe ser un nro del 1 al 10");
}

//IF TERNARIO: escribir un if en una linea de codigo. Hay 3 modos.

//Tradicional vs ternario
let numero = -10;

if(numero > 0){ //Tradicional
    console.log("Es positivo");
}
else{
    console.log("Es negativo");
}

//Ternario
(numero > 0) ? console.log("Es positivo"): console.log("Es negativo");//Entre ? y : van las instrucciones dentro del bloque del if. Entre : y ; va lo q iria en el else.

//Asignacion de variable
let age = 30;
let message = "";

if(age >= 18){
    message = "Es mayor"; //A la variable mensaje le estamos cargando el dato "Es mayor", if/si la edad es mayor o igual a 18.
}
else{
    mensaje = "Es menor";
}
console.log(message)


message = (age >= 18) ? "Es mayor": "Es menor";//If ternario
console.log(message)

//Mas de una instruccion.
let agee = 20;
let msje = "";
let category = "";

if(agee >= 18){
    msje = "Es mayor de edad";
    category = "Adulto";
    console.log ("Felicidades! Eres mayor de edad");
}
else{
    msje = "Es menor de edad";
    category = "Menor";
    console.log ("Felicidades! Eres menor de edad");
}

(agee >= 18) ? (msje = "Es mayor de edad", category = "Adulto", console.log ("Felicidades! Eres mayor de edad")) : (msje = "Es menor de edad", category = "Menor", console.log ("Felicidades! Eres menor de edad")); //ternario con 3 instrucciones





/*SWITCH: para controlar el flujo de la aplicacion, como el IF. Pero la dif es q con el SWITCH no vamos a estar decidiendo cual instruccion realizar en base a si una condicion se cumple o no, sino q vamos a decidirlo en base a 
lo q contiene una variable, o en base al valor de una expresion. Permite evaluar una expresion, lo q contiene una variable, y ejecutar un bloque de codigo basada en dif opciones: o sea q voy a tener una variable q va a contener un
valor especifico (o la cantidad de valores q queramos) y vamos a elegir un camino o un accionar dif acorde a cada una de esas situaciones.*/

let diaSemana = 6;
let mnsje = "";
//No se usa if xq quedaria muy repetitivo. Por eso mejor usar SWITCH.
switch(diaSemana){//El valor de la variable diaSemana puede ser del 1 al 7, entonces analizo los 7 caminos posibles, contemplo que hacer en esos 7 casos/valores.
    case 1:
        mnsje = "Hoy es Lunes";//Acciones a ejecutarse si la var diaSemana tiene valor 1
        break;//Indica que si la variable tiene valor 1, y ejecuta el mensaje de q hoy es lunes, ya no tiene q seguir ejecutando lo de abajo.
    case 2:
        mnsje = "Hoy es martes";
        break;
    case 3:
        mnsje = "Hoy es miercoles";
        break;
    case 4:
        mnsje = "Hoy es jueves";
        break;
    case 5:
        mnsje = "Hoy es viernes";
        break;
    case 6:
        mnsje = "Hoy es sabado";
        break;
    case 7:
        mnsje = "Hoy es domingo";
        break;
    default://Si el valor que vino no es ninguno de los analizados en el case, por defecto se va a ejecutar x cosa.    
        mnsje = "Ingreso un numero incorrecto";
}
console.log(mnsje)



let fruta = "manzana";
let mje = " ";

switch (fruta) {//Coloco entre () el nombre de la variable que quiero analizar.
    case "manzana":
        mensajeFruta = "Es una manzana";
        break;
    case "banana":
        mensajeFruta = "Es una banana";
        break;
    case "naranja":
        mensajeFruta = "Es una naranja";
        break;

    default:
        mensajeFruta = "Ha ingresado una fruta incorrecta!";
        break;
}
console.log(mensajeFruta)