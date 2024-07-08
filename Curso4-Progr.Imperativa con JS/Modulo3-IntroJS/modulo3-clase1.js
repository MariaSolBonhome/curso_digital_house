            //VARIABLES Y TIPOS DE DATOS
//NODE.JS es un entorno para ejecutar JavaScript fuera del navegador.             

// Creamos variables. Palabras reservadas: palabras clave q vamos a necesitar para q la PC sepa de que instruccion le estoy hablando al mom de darle un accionar.
let numero;

// ASIGNACION DE UNA VARIABLE: Llamo al identificador, y con el = le cargo el dato a ese espacio llamado "numero".
numero = 10;

// Se puede declarar y asignar valor en una misma linea.
let numero2 = 11;

// 2 tipos de datos para guardar en una variable. Si la imprimimos, me sale null en la terminal.
let numero3 = null; //para explicitar q no tiene ningun valor. O para iniciailizarla antes de darle valor.

let numero4; //Variable declarada, sin valor asignado.
console.log(numero4); //En la terminal me aparece UNDEFINED.

//Imprimir
console.log("Bienvenidos!");//Con comillas puedo cargar manualmente lo que quiero que imprima. 
console.log(numero)//Sin comillas le pido q me imprima el valor de tal variable.. Con CLEAR limpioCon.



            //CONCATENACION E INTERPOLACION
 
let nombre = "Sol";
let apellido = "Bonhome";

//Concatenacion: union de 2 o mas cadenas de texto en una sola cadena. Se usa el operador +
console.log("Hola! Mi nombre es: " + nombre + " " + apellido) //imprimir 2 variables. El string vacio en medio evita SolBonhome, sin espacios.

/*Interpolacion: unifica cadenas, pero usando plantillas delimitadas por comillas graves o invertidas.
Permite incrustar valores de variables directamente dentro de una cadena de TextDecoder, usando una sintaxis especifica */
console.log(`Hola! Mi nombre es: ${nombre} ${apellido}`)//Colocamos las variables dentro de la cadena de caracteres, sin cerrar con "" como en la concatenacion.

            //OPERADORES ARITMETICOS

/*Usables solo con numeros reales y enteros*/

//Variables
let resultado; //No le asigno valor xq lo q quiero es ir guardando en ella los resultados de las cuentas q haremos.

//Resta
resultado = 10 - 5; //El resultado de 10-5 se guardara en la variable, a la cual llamamos, y q esta declarada arriba.
console.log("El resultado fue: ", resultado)

//Multiplicacion
resultado = 10 * 10;
console.log("El resultado fue: ", resultado)

let nro = 15;
resultado = 10 * nro
console.log("El resultado fue: ", resultado)

resultado = nro * nro;
console.log("El resultado fue: ", resultado)

//Division
resultado = 100 / 2;
console.log("El resultado fue: ", resultado)

//Suma
resultado = 10 + 10.5;
console.log("El resultado fue: ", resultado)

resultado = "10" + "10.5";//Cambia el tipo de dato a string
console.log("El resultado fue: ", resultado)

//Modulo: devuelve el resto de una operacion.
resultado = 10 % 2 //Hace igual la divison, pero con % guarda el la variable el resto. En este caso es 0 porque no hay resto.
console.log("El resultado fue: ", resultado)

resultado = 11 % 2;
console.log("El resto fue: ", resultado)


            //OPERADORES RELACIONALES

/*Permiten hacer comparaciones en nuestro codigo, ya sea de valores fijos q ingresemos manualm, o de valores q estan contenidos dentro de una variable.
Podemos preg a la compu si dos variables son del mismo valor, distintas, si uno es mayor o menor q el otro; y la compu nos responde con un valor booleano.*/            

resultado = 10 > 5;
console.log(resultado);//Devuelve true, asi q en la variable resultado quedo guardado el valor TRUE (Si, 10 es mayor a 5).


resultado = 10 < 5;
console.log(resultado);//False.


resultado = 10 >= 5;
console.log(resultado);//True. 10 si es = o mayor a 5.


resultado = 10 >= 10;
console.log(resultado);//True. 10 no es mayor que 10, pero si = (se cumple 1 de las 2 condiciones).

resultado = 10 == 10;
console.log(resultado);//True. 10 == a 10.

resultado = "10" == 10//JS compara el contenido, no los tipos de datos.
console.log(resultado);//True. Ambos contenidos son iguales.


resultado = "10" === 10
console.log(resultado);//False. La igualdad estricta, ademas de comparar el valor, compara el tipo de dato.

resultado = "10" != 5;//Ademas de preg si son iguales, puedo preg si NO SON iguales.
console.log(resultado)// True. Si, el 10 es distinto al 5.

resultado = 10 != "10";
console.log(resultado);//False. No es cierto q no son numeros distintos. 

resultado = 10 !== "10";//Con desigualdad estricta !==
console.log(resultado)//True. Si, es cierto q son distintos. Si bien el valor es el mismo, los tipos de datos son diferentes.

/* No solo entre valores fijos, podemos comparar tambien revisar comparaciones entre dif variables*/
let num1 = 10;
let num2 = 5;
resultado = num1 > num2;//Preguntamos si numero 1 es mayor que numero 2.
console.log(resultado)//True. La compu analizo lo q contiene una variable y preg si es mayor q lo q contiene la variable nro2 (el 10 es mayor q 5).


                //OPERADORES LOGICOS
/*Nos permiten llevar las consultas q hagamos mediante operadores relacionales un paso mas alla, ya q van a funcionar para nosotros como 
palabras especiales q nos van a permitir combinar 2 o + consultas o condiciones bajo distintos criterios*/                

let nota1= 7;
let nota2= 9;
let resultadoNotas;

//AND && (tamb devuelve true/false, como los relacionales)
resultadoNotas = (nota1 > 6) && (nota2 > 6);
console.log(resultadoNotas);//Por que me devuelve true? Porq ambas condiciones son verdaderas.

//OR. Da true cuando 1 condicion es true o cuando ambas sean true.
nota1 = 7;
nota2 = 5;
resultadoNotas;
resultado = (nota1 > 9) || (nota2>6) //False ambas.
console.log(resultadoNotas)

//NOT; permite cambiar el valor de verdad q tiene una consulta en especifico. No sirve para consultar 2 cosas a la vez.
resultadoNotas = (nota1 >6);
console.log(resultadoNotas)//TRUE

resultadoNotas = !(nota1 > 6);//Niega lo q esta entre ()
console.log(resultadoNotas)//FALSE.