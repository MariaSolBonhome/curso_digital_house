                                            //STRINGS Y ARRAYS: trabajando con colecciones

/*INTRO ARRAYS: coleccion ordenada de elementos. Bajo una misma variable vamos a poder cargar dif valores y mantenerlos ordenados en la misma direccion de la memoria.
Cada elemento es como un vagon de tren, y estan ordenados bajo algo llamado INDICE, y siempre comienza en la posicion/indice 0.*/
//Al crear un array se crea un variable(no es primitiva como las q vimos, sino q es mas compleja).
let ejemplo = [];//Variable vacia, nada cargado, pero con [] indicamos q es un array.

//Crear un array
let edades = [24, 37, 18, 59, 7]
let nombres = ["Juana", "Raul", "Roberto"];
let booleanos = [true, false, false, true];
let combinados = [15, "Hola", true]//Array con tipos de datos combinados. Es mas propenso a tener errores.
//Acceder a un elem especifico de un array.
console.log(edades[2]);
//Recorrer un array con un FOR (y no con un while), xq ya sabemos la cantidad de datos q tiene cargados el array.
for(let i = 0; i < edades.length ; i++){//i++ xq las posiciones aumentan de a una. 
    console.log(edades[i]);//i arranca en el indice 0 y me imprime eso, incrementa al indice 1 y me imprime indice 1.
}
// console.log(edades.length)




//ALGORITMOS DE LOS ARRAYS

//Veamos dif situaciones q pueden surgir q necesitemos hacer en un array
let numeros = [10,20,30,40,50];

//Modif cada uno de sus elem a un array e imprimirlos
for(let m=0; m < numeros.length; m++){
    numeros[m] = m+1; //Hicimos q entre a cada posicion y q le cargue un nuevo valor q surge de m+1. Si imprimimos nos da 1,2,3,4,5 (y no 10,20,30,40,50).
}

numeros[1]=44;//Pisar el valor de 1 solo elem

for(let m=0; m < numeros.length; m++){
    console.log(numeros[m]);
}

//Agregar elem a un array
let notas = [8,4,10,6];//Podemos agregarlo manualmente aca, pero si no tenemos acceso, hay un modo dinamico de hacerlo.
notas[notas.length] = 7;//Entre [] coloca la posicion del elem a agregar, pero si no tengo acceso a esa posicion, va notas.length.
for(let i=0; i < notas.length; i++){
    console.log(notas[i]);//Al imprimirlo me suma el 7.
}

//Extraer elem de un array a una variable.
let names = ["Pedro", "Anastasia", "Fabio"];
let nombreSeleccionad = names[1];//El dato del nombre en la posicion 1 hay q guardarlo, y se hace en una variable.
console.log(nombreSeleccionad)

//Extraer todos los elementos del array para algo especifico
let numbers = [10,20,30,40,50];
let sumaNumbers = 0; //Necesito variable acumuladora para guardar la suma de los valores.
for(let i=0; i< numbers.length; i++){
   sumaNumbers = sumaNumbers + numbers[i];//Es lo mismo q la linea 54.
   //sumaNumbers += numbers[i];//Es lo mismo q la linea 53.
}
let promedio = sumaNumbers / numbers.length;
console.log(promedio);


//Encontrar el mayor o el menor
let nmbrs = [10,48,7,52,19];
let menor = nmbrs[0];//Posicion 0 para q revise todos los elem.
for(let i=0; i <nmbrs.length; i++){
    if(nmbrs[i] < menor){
        menor = nmbrs[i];
    }
}
console.log(menor);

var aaa = "pedro"

let message = `Hello my name is ${aaa} and I am a program`
console.log(message);




/*METODOS DE ARRAYS: para manipular la info q tienen. El arreglo proviene de una estructura llamada OBJECT, y al trabajar con objetos, tenemos dif metodos q son acciones q nos permiten trabajar esta info.
Cuando nos referimos a metodos, nos ref a funciones q estan previam def para poder manipular estas estructuras. Veamos los metodos/funciones mas conocidas.*/

/*.push()    agrega 1 o varios elem al final del array. 
En vez de hacerlo a mano, es un modo dinamico. Recibe 1 o mas elem como parametros() con los elem q queremos agregar. Ademas de agregar, esta funcion retorna una nueva longitud de array.*/
let colores = ["Rojo", "naranja", "azul"];
colores.push("violeta", "gris");
console.log(colores);//Me retorna: [ 'Rojo', 'naranja', 'azul', 'violeta', 'gris' ]

//.pop()     Elimina el ultimo elem del array, sin q nos tengamos q preocupar por la longitud del array. No recibe nada x parametro. Nos retorna ese elem q fue eliminado.
let colors = ["red", "blue", "violet"];
let deletedColor = colors.pop();
console.log(colors);
console.log(deletedColor);

//.shift()   Elimina el primer elem del array. No recibe parametros. Devuelve elem eliminado.
let houses = ["Ravenclaw", "Hufflepuff", "Slytherin", "Griffindor"];
let deletedHouse = houses.shift();
console.log(houses);
console.log(deletedHouse);

//.unshift()  agrega 1 o varios elem al ppio del array.
let marcas = ["Audi"];
let nuevaLongitud = marcas.unshift("Ford", "Ferrari");//Capturamos lo q retorna (cantidad de elem cargados en el array) con la variable nuevaLongitud. Me devuelve 3.
console.log(marcas);
console.log(nuevaLongitud);

/*.join()   Une los elem de un array usando el separador q nosotros le especifiquemos. Si no especificamos, usa comas. Recibe valor por parametro y es el separador q le vamos a dar para separar los dias 
mediante ese caracter q le indiquemos. Nos retorna un string con todos estos elem unidos, asi q hay q crear una nueva variable (separadosPorCome) q capture ese valor q retorna.*/
let dias = ["Lunes", "Martes", "Miercoles"];  
let separadosPorComa = dias.join();
console.log(separadosPorComa);//Por default: Lunes,Martes,Miercoles

let separadosPorGuion = dias.join("-");
console.log(separadosPorGuion);//Lunes-Martes-Miercoles

//.indexOf()   Busca en el array el elem q le enviemos por parametro. Retorna el indice de donde encontro ese elem q le pedimos q busque x parametro. Si no lo encuentra, retorna -1, xq los indices arrancan desde 0.
let frutas = ["Manzana", "Banana" , "Frutilla"];
let indiceEncontrado = frutas.indexOf("Bananas");//Creo la variable para capturar el valor del indice.
console.log(indiceEncontrado);

//.lastIndexOf()   Empieza buscando el elem q le enviemos por parametro por el final del array. Busca desde atras hacia adelante. Retorna el indice.
let clubes = ["Racing", "Boca", "Lanus", "Boca"];
let clubEncontrado = clubes.lastIndexOf("Boca");
console.log(clubEncontrado);

//.includes()   En vez de retornas numero, retorna un booleano: true si encontro ele elem q le enviamos x parametro, false si no lo encontro.
let bebidas = ["Coca-Cola", "Pepsi", "7up"];
console.log(bebidas.includes("Coca-Cola"));//Si busco Sprite me da false, si busco Coca-Cola da true.



//METODOS DE STRINGS: asi como hay metodos para manipular arreglos, hay metodos para manipular strings y ver, x ej, la posicion de un caracter de un string (q es una cadena de caracteres).
let saludo = "Hola!";
console.log(saludo[0]);//Me muestra la H, xq es el caracter q esta en la posicion 0.

//.length  Retorna cantidad de caracteres que tiene ese string (incluye los espacios). No recibe parametros.
let miSerie = "Mad Men";
console.log(miSerie.length);//7 caracteres.

let arrayNombres = ["Bart", "Lisa", "Moe"];
console.log(arrayNombres.length);//Me da 3, xq el arreglo contiene 3 strings.
console.log(arrayNombres[0].length);//Ingresa en el array al elem en la posicion 0 (Bart) y me devuelve la cantidad de caracteres: 4.

//.indexOf()  Busca en el string el string q le pasemos x parametro al mom de llamarlo. Retorna el primer indice donde encontro lo q le solicitamos. Si no encuentra, retorna -1.
let saludos = "Hola. Estamos programado";
let indexOfO = saludos.indexOf("o")

console.log(indexOfO);//Retorna la primera o que encontro, q es en hola: indice de posicion 1.
console.log(saludos.indexOf("Estamos"));//Retorna 6, xq la cadena de string Estamos existe a partir del indice de posicion 6.
console.log(saludos.indexOf("Vamos"));//Retorna -1 xq esta subcadena no existe.

//.slice()  Corta el string y nos devuelve una parte donde le indicamos. Se envia por parametro 2 valores: donde iniciar el corte y donde finalizar el corte.
let frase = "Hola! Como estas?"
//Opcion1
console.log(frase.slice(6,11));//Lo q esta en posicion 6 es tenido en cuenta, se toma. La posicion 11 no xq es justo un espacio.
//Opcion 2: damos un valor de inicio para el corte, pero no un valor de fin.
console.log(frase.slice(6));//Retorna lo q esta a partir de la posicion 6 hasta el final de todo el string.
//Opcion3
console.log(frase.slice(-10));//Contabiliza desde atras hacia adelante. Retorna: omo estas?

//.trim()  Elimina los espacios q estan ppio y final de un string. No hay q enviarle ningun valor por parametro.
let nombrecompleto = "   Homero Simpson   ";
console.log(nombrecompleto.trim())//Me devuelve el string sin los espacios del ppio y fin.

//.split()  Divide un string en distintas partes. Recibe por paramnmetro un string q va a usar como separador. Retorna/devuelve un arreglo con las distintas partes de ese string.
let sayHi = "Hi. How are you?";
console.log(sayHi.split(" "));//Use como separador un espacio. Me devuelve 4 strings, posicion 0 1 2 3: [ 'Hi.', 'How', 'are', 'you?' ]
let newArray = sayHi.split(". ");//Me devuelve 2 strings, posicion 0 y 1: [ 'Hi', 'How are you?' ]
console.log(newArray);

/*.replace()  Reemplaza una parte del string por otra. Enviamos 2 parametros: el string q queremos buscar para reemplazar, y el string q vamos a usar para realizar el reemplazo. 
Retorna un nuevo string con la frase ya reemplazada.*/
let phrase = "Me encanta Java";
let newPhrase = phrase.replace("Java", "Javascript");
console.log(newPhrase);//Devuelve: Me encanta Javascript.
let newPhrase2 = phrase.replace("ava", "S");
console.log(newPhrase2);//Devuelve: Me encanta JS.



