                            //FUNCIONES
/*Tienen 2 etapas: cuando la defino (creacion), cuando decido ponerla en practica.
Sirve para indicar un algoritmo, una tarea, 1 sola vez, y reutilizarlo la cantidad de veces q sea necesario. */

//DEF O DECLARACION 
//Si quiero saludar 4 veces, deberia copiar y pegar el console log 4 veces, pero seria repetir mucho codigo.
console.log("Hola!");
console.log("Hola!");
console.log("Hola!");
console.log("Hola!"); //Esto no. Mejor hagamos una funcion.

//Asi q mejor creamos/declaramos una funcion. 
function saludar(){
    console.log("Hola!");
}

//LLAMAR A LA FUNCION, para que haga las instrucciones que tiene entre llaves.
saludar()
saludar()
saludar()
saludar()

/*Este es el sentido de las funciones, es todo un algoritmo, todo un proceso que nosotros sabemos que en algun otro
momento vamos a RTCPeerConnectionIceErrorEvent, lo escribimos una unica vez. Lo declaramos/definimos una sola vez, bajo el nombre q queramos,
y DecompressionStream, mas adelante en nuestro codigo, podemos solicitar q todo lo q este dentro de las {} se ejecute siempre q llamemos
o invoquemos a nuestro funcion apropiadamente.*/

/*La funcion le dice a la compu "mira, hay un proceso llamado SALUDAR y cuando yo te pida q lo realices quiero q hagas todo lo que 
esta dentro de las {}" */




                        //PARAMETROS
/*Son valores q nosotros podemos brindarle a la funcion para q ella pueda operar con ellos de la manera en q nosotros le indiquiemos,
permitiendo q nuestra funcion sea mucho mas felxible e incluso reutilizable. */   

//Declaramos funcion
function suma1(){
    let resultado1 = 4 + 5;
    console.log("El resultado es: " + resultado1);
}
//Llamamos a la funcion
suma1();


/*Siempre voy a necesitar hacer la suma entre 4 y 5? Podria estar en una sit en la q requiera valores dif? Si. En los () inciare la info externa 
q deberia de recibir nuestra funcion. Le colocaremos el nombre q nos parezca mas descriptivo. num1 es un valor q voy a recibir, y separado con coma
indico q hay otro valor externo a recibir llamado num2. De este modo, cuando sume, ya no voy a sumar 4 y 5, sino q voy a sumar los valores de num1 y num2 */

function suma2(num1, num2){
    let resultado2 = num1 + num2;
    console.log("El resultado es: " + resultado2);
}
/*Ahora, si le indicamos a la funcion q para trabajar tiene q recibir 2 valores externos, entonces al momento de llamarla, para q pueda
trabajar correctamente, debo enviarle 2 valores. Entonces cuando llamo a la funcion, en los parentesis indico los valores, respetando el
orden de los valores */

suma2(10, 5);
suma2(20, 3);//Como las funciones son reutilizables, puedo volver a lamar a la funcion dandole valores dif a esos parametros (info externa) q recibe.
suma2(100, -2)




                    //SCOPE Y RETORNOS
/*Retornos: muchas veces, cuando aplicamos funciones, una vez q terminamos de ejecutar todas las instrucciones q le dimos, llegamos a alcanzar un valor
que por algun motivo necesitamos persistirlo en una variable para a futuro continuar trabajando con el. En estos casos hacemos uso de los retornos.*/

/*Scope de una variable: refiere al alcance que esta variable tiene, xq no en toda ocasion podemos acceder a ellas. Clasificacion: variables locales y globales*/

//>>Variables: globales. Podemos acceder a ella sin ningun problema.
let num = 15;
console.log(num)

//>>Variables locales: creo una funcion, defino alli dentro una variable, y luego, fuera de la funcion, quiero llamar a la variable.
function suma3(){
    let numero = 15;
}
//console.log(numero)//No sabe quien es numero, no puede acceder a ella. Asi que la variable numero es local xq solo existe dentro de la funcion suma.

/*Ejemplo variable local*/
function suma4(nota1, nota2, nota3){
    let resultado3 = nota1+nota2+nota3;
    console.log(resultado3);
}
suma4(7,7,7); //Me muestra sin problema el resultado xq el console.log esta dentro de la funcion. 

//No me alcanza con la suma, necesito sacar de la funcion el valor que tiene la variable resultado. Para estos casos esta el RETURN.
function suma5(nota1, nota2, nota3){
    let resultado4 = nota1+nota2+nota3;
    return resultado4//return y valor de la variable que queremos devolver. Significa q cuando la compu se encuentre con el llamado a esa funcion, nos va a devolver lo q contenga esa variable.
}
let resultadoSuma = suma5(7,9,8); //Capturamos el valor de resultado4 (q se obtiene en suma5(7,9,8), en la variable resultadoSuma, q va a ser igual a 24 si le pongo console.log)
console.log(resultadoSuma);

function promedio(){
    let resultadoSuma = suma5(7,9,8); //en una funcion puedo llamar a otra funcion q esta por fuera. 
    let resultadoPromedio = resultadoSuma / 3; //ResultadoPromedio es una variable local, asi q le pongo return
    return resultadoPromedio;//NOTA: todo lo q este luego del return dentro de la misma funcion, no se ejecutara unca, xq el return corta con la ejecucion de la funcion.
}
let promedioObtenido = promedio();//Guardo el resultado retornable de la funcion promedio, y la guardo en una nueva variable llamada promedioObtenido.
console.log("El promedio de sus notas es: " + promedioObtenido)


