const prompt = require("prompt-sync")({sigint: true});                                                           
                                                           //CICLOS

/*WHILE: 
        -para aquellas sit en las que requerimos repetir una instruccion o serie de instrucciones mas de una vez.
        -Se usa cuando la cantidad de veces q vamos a repetir la accion no es fija o se puede determinar dentro del accionar q estamos realizando.
        -Necesita 3 cosas para funcionar correctamente: 
            >Contador: una variable tradicional pero q nosotros le vamos a dar un accionar especifico.
            >Una condicion q en algun mom se pueda volver falsa.
            >Agregar un cambio en la variable. Contar++*/

console.log("1");            
console.log("2");  
console.log("3");  
console.log("4");

let contar = 0;//Inicializo la variable dandole el valor inicial, no es q siempre va a valer 0. Suele usarse i como nombre de variable.
while(contar <= 10){//La variable contar q esta definida arriba, la uso para la condicion
    console.log("El contador es: " + contar);//Dentro de {} van las acciones a repetir, hasta q se cumpla la condicion de q la variable valga 10.
    contar++;//El ++ hace aumentar su valor en una unidad. Si no lo pongo entra en bucle infinito.
}


let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;
console.log("Bienvenido al registro de notas!");

while(control == "si"){
    console.log("Ingrese una nota a sumar");
    nota = parseInt(prompt("Nota alumnos: "))//Se guarda la nota a sumar mediando el prompt.

    //Variable acumuladora. Se pisa el valor inicial. Acumula, agrega los dif valores variables q le vamos dando. No lo aumentamos en 1 unidad como el while anterior, sino q le llegan valores distintos.
    sumaNotas = sumaNotas + nota;//Es lo mismo que   sumaNotas+= nota;

    cant++;//Es un contador y cambia en un valor fijo. En este caso es 1.
}

let promedio = sumaNotas / cant;
console.log("El promedio es: " + promedio);

control = prompt("Ingrese 'si' si desea agregar mas notas, o 'no' si no desea cargar mas: ");/*Le damos la responsabilidad al usuario de cargar cuantas notas quiere. La condicion del while va a ser 
falsa en algun mom xq el user va a decir 'no'.*/


//DO WHILE: permite repetir instrucciones q ya definimos. 
//La dif es la forma es q van a ejecutar estas definiciones. While verifica la condicion a ver si es true/false. Pero do while primero itera una vez y recien luego valida la condicion.
let k = 1;
while (k <= 10){//Condicion de corte, para q no sea infinito.
    console.log(k);
    k++
}
//Vamos con el do while.
let j = 1;
do{
    console.log(j);
    j++
}while(j <= 10);

/*Ambas necesitan condicion de corte, la variable inicializada y el incremento en 1. Ademas de la sintaxis, la dif esta en la forma en q trabaja: el do while primero itera y desp analiza la condicion.
Pero el while primero analiza, y si es true itera, si es false deja de iterar. While permite repetir instrucciones siempre y cuando la condicion sea true, si no sabemos cuantas veces queremos repetir algo.
Do while es para sit especificas, en donde queremos primero hacer q el user haga una accion y luego vemos si copntinuamos o no. Es como finalizar compra, q solo se habilita si ya puse algo en el carrito.
Se usa mucho en los menues interactivos.*/

//Pequeno juego
let nroAdivinar = 4;
let intento = 0;
let numero;

do{
    numero = parseInt(prompt("Ingrese un nro del 1 al 10: "));
    if (numero < nroAdivinar){
        console.log("Muy bajo, intenta nuevamente");
    }else if(numero > nroAdivinar){
        console.log("Muy alto, ingrese nuevamente");
    }else{
        console.log("Numero correcto")//Si el nro q ingreso el user no es menor ni mayor, significa q es igual, por lo tanto adivino el numero.
    }
    intento++;
}while(numero != nroAdivinar)//Cuando ambas variables tengan el mismo valor, se corta el ciclo repetitivo y ya no le pedimos datos al usuario.
console.log("Adivinaste el numero en " + intento + " de intentos");


//FOR LOOP: el for permite tamb repetir instrucciones, pero se usa si sabemos la cantidad de repeticiones q necesitamos realizar.
let i;//Se puede crera e inicializar variable en los ()del for(let i=0; ; )
for(i=0 ; i<=10 ; i++){//Dentro del () van 3 items distintos: en el izquierdo inicializo, condicion de corte, incrementar variable contadora.
    console.log("Iteracion nro: " + i);//Puedo directamente colocar (i)
}
//La incrementacion puede ser en 1 (i++), en 2 (i+=2) lo cual me da 0 2 4 6 8 10

//Puedo hacer lo mismo a la inversa.
for(j=10; j>=0;j--){
    console.log(j);
}
