                                            //ARRAYS Y MAS ARRAYS
//METODOS DE ARRAYS AVANZADOS

/*.slice()
Sintaxis: let newArray = arrayOriginal.slice(inicio, fin)
Devuelve una copia superficial de una porcion de un array existente, desde el indice q le indiquiemos hasta el indice q le indiquiemos.
Es un metodo q le aplicar a un array preexistente. Debemos indicarle el nombre de ese array (q tiene los elem q queremos trabajar) y luego .slice y sus respectivos parametros. 
Nos retorna ese recorte del array, entonces igualamos el llamado a otra variable q nos sirva para contener ese recorte. 
El parametro de fin es opcional, y no se incluye en el array de recorte, en el resultado final se incluye hasta el final del array. Si le paso indice de fin 4, se incluye hasta el elem q este en el indice 3.
El parametro de inicio, si se pone un num negativo, comienza desde el final de array hacia atras; si el valor es un num mayor o igual a la longitud del array, retorna un array vacio.*/

let frutas = ["Manzana", "naranja", "banana", "frutilla", "kiwi"];
let primerasTres = frutas.slice(0, 3);
console.log(primerasTres);//Posiciones 0,1,2: manzana, naranja, banana.

let desdeNaranja = frutas.slice(1);//Solo parametro de inicio.
console.log(desdeNaranja);//Imprime desde el elem en posicion1 (naranja) hasta el final.

let ultimasDos = frutas.slice(-2);
console.log(ultimasDos);//Frutilla, kiwi

let entreDosIndices = frutas.slice(-3,4);
console.log(entreDosIndices);//Banana, frutilla.


/* .splice()
Sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...);
Combina el contenido de un array eliminando o reemplazando elem existentes y/o agregando nuevos elem en su lugar. No guardamos el valor en una variable, pero podemos hacerlo si queremos.
Parametro inicio: es el indice desde donde se realizan los cambios. CantidadAEliminar: num de elem q queremos eliminar a partir del indice indicado. Elem 1 y 2 son opcionales, son valores
que queremos cargar en el array comenzando desde la posicion indicada anteriormente.*/

let meses = ["Enero", "febrero", "Marzo", "Abril", "Mayo"];
meses.splice(1,2, "NuevoMes1", "NuevoMes2");//Desde la posicion 1(febrero) elimina 2 elem (febrero y marzo). Ademas, solicitamos agregar 2 elem q fueron agregados desde la posicion 1. El resto del array sigue igual.
console.log(meses);

meses.splice(2,0, "NuevoMes3");//Desde la posicion 2 quiero agregar 0 valores, no quiero cambiar nada, pero agregamos Nuevomes3. El resto del array sigue igual.
console.log(meses);//Si pongo como comentario las lineas 33 y 34, imprime: [ 'Enero', 'febrero', 'NuevoMes3', 'Marzo', 'Abril', 'Mayo' ]


/* .sort()
arrayOriginal.sort()
Ordena los elem de un array devolviendo, retornando, el array ordenado. Permite ordenar num y palabras. Como ordena palabras? Es porque cada caracter esta asociado a un numero mediante algo llamado codico ASCII, que es la
representacion q tiene cada simbolo q ingresamos a un valor numerico con el cual nuestra computadora lo procesa. */
let numeros = [5,4,8,1,6,9];
numeros.sort();//No hace falta parametro.
console.log(numeros);

let palabras = ["perro", "gato", "auto", "zorro"];
palabras.sort();
console.log(palabras);//ordenadas alfabeticamente.


/* .find()
Sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));
Devuelve el primer elem q cumple con una condicion dada en una funcion de prueba. Com retorna un valor, lo guardamos en una variable. Por parametro le enviamos una funcion. */

let edades = [25,18,30,15,22];
let mayorDeEdad = edades.find(edad => 18);//Usamos una funcion flecha, diciendo q buscamos la edad q sea mayor o igual a 18.
console.log(mayorDeEdad);//Retorna el 25 nomas, xq es el primer numero q se encuentra mayor a 18.

let primeraEdadMayor = edades.find(edad => edad >30);//Busca una edad q surja de encontrar aquella edad q sea mayor a 30.
console.log(primeraEdadMayor);//undefined. La condicion es q sea mayor, no mayor o igual, y no tengo ninguna edad q cumpla con esa condicion.




//MAS METODOS DE ARRAYS: veremos metodos q no solo reciben parametros, sino tamb funciones.

/*.map()
Recibe una funcion por parametro. Map recorre el arreglo y devuelve un nuevo array con las modifcaciones q nosotros le indiquemos segun la funcion q le pasemos como callback. Esa funcion podemos
crearla aparte o dentro de los ()*/

let numbers = [2,4,6];
let numerosMultiplicados = numbers.map(function(num){ //Map recorre el array y le aplica la funcion, en este caso multiplicar, y retorna el resultado q lo guardamos en la variable numerosMultiplicados.
    return num*2;
 });//NO ENTENDI POR QUE SE PONE NUM

 console.log(numerosMultiplicados);// [4,8,12]

 /* .filter() 
 Recibe funcion por parametro. Recorre el array y filtra los elem segun la condicion q indiquemos mediante el callback. Devuelve un array q va a contener los elem q hayan cumplido/pasado el filtro de la condicion.*/

 let ages = [22,8,17,14,30];
 let mayores = ages.filter(function(edad){
    return edad > 18
 });//Edades es el nombre generico q le asigno a cada elem del array para q tome el .filter y vaya pasando por ellos.
 console.log(mayores);//[22,30]

 //.map   vs   .filter:   map devuelve un array de la misma longitud, solo q van a sufrir una modif. Pero filter puede no retornar la misma cantidad xq usamos un filtrado especifico.

 /* .reduce() 
 Recorre el array. Pero se dif de los otros 2 xq devuelve un unico valor, no un array. Reduce el array a 1 solo valor bajo la condicion q le indiquemos. Tiene como parametro una funcion q tiene 2 parametros.*/
 let nums = [5,7,16];
 let suma = nums.reduce(function(acum, num){//La funcion tiene 2 parametros: el primero es el q va a usar como acumulador, el segundo es el q va a usar para mencionar cada uno de los elem del array.
    return acum+num;//Retorna dif valores q la funcion va a considerar para ir acumulando esos datos. En este caso, el criterio para reducirt el array es sumarlos.
 });
 console.log(suma);//Muestra 28, q es la suma entre los 3 valores del array.

 /* .forEach()
 Itera sobre un array. La funcion q tiene es recorrer cada elem del array. NO retorna ningun valor. El comportam q queramos darle en cuanto a c/u de los elem del array, lo definimos mediante el callback q le
 enviamos por parametro. */
 let paises = ["Argentina", "Colombia", "Brasil"];
 paises.forEach(function(pais){
    console.log(pais);
 })//Como no retorna nada, no hay q guardar esto en ninguna variable. Asi q llamamos al array paises y le aplicamos forEach.