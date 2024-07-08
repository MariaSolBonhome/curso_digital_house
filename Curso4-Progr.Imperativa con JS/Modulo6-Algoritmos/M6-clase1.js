                                    //ALGORITMOS
/* METODOS DE ORDENACION: BUBBLE SORT (ordenamiento burbuja). Algoritmo es un paso a paso q si lo seguimos al pie de la letra nos lleva al mismo resultado. El algoritmo bubble sort sirve para cuando queramos
ordenar los elem dentro del array de manor a mayor o viceversa. Es comun que nos preg por el en entrevistas laborales. Se llama asi xq al ordenar de menor a mayor, los numeros mayores burbujean hacia el final. */ 

let array = [5,4,1,6,3,2];

for(let i = 0; i < array.length; i++){//Recorremos la lista.
    if(array[i] > array[i+1]){ //Con if preg si el num donde estoy posicionado es mayor o no q el de al lado; la pc responde si(true)/no(false). Con i+1 accedo al num q esta a la derecha.
        let temp = array[i]; //Como intercambio los numeros? Creo una variable temporal.----------------------------NO ENTENDI POR QUE??????????????????--------------------------
        array[i] = array[i+1];//Piso el valor.
        array[i+1] = temp; //En el array, en la posicion 0+1 desaparece lo q tiene y le cargamos el valor de temp.
    }
}
// console.log(array);//[ 4, 1, 5, 3, 2, 6 ] Solo el 6 me ubico al fondo. Como puedo repetir ese proceso tantas veces como elem tenga en el array: con otro FOR.


for (let j = 0; j < array.length; j++){//Con este FOR logro repetir lo q deseo tantas veces como elem tengo adentro del array. En el FOR de abajo tengo
    for(let i = 0; i < array.length; i++){//Recorremos la lista.
        if(array[i] > array[i+1]){ //Con if preg si el num donde estoy posicionado es mayor o no q el de al lado; la pc responde si(true)/no(false). Con i+1 accedo al num q esta a la derecha.
            let temp = array[i]; //Como intercambio los numeros? Creo una variable temporal.----------------------------NO ENTENDI POR QUE??????????????????--------------------------
            array[i] = array[i+1];//Piso el valor.
            array[i+1] = temp; //En el array, en la posicion 0+1 desaparece lo q tiene y le cargamos el valor de temp.
        }
    }
}
console.log(array);//[ 1, 2, 3, 4, 5, 6 ]



//Ordenar STRINGS: gracias al codigo ASCII, podemos ordenar los strings.
let strings = ["zapato", "auto", "torta", "almendra"];

for (let j = 0; j < strings.length; j++){
    for(let i = 0; i < strings.length; i++){
        if(strings[i] > strings[i+1]){ 
            let temp = strings[i]; 
            strings[i] = strings[i+1];
            strings[i+1] = temp; 
        }
    }
};
console.log(strings);//[ 'almendra', 'auto', 'torta', 'zapato' ]

//Ordenar dentro de objetos. El array objetoPersona tiene cargados 3 objetos. Los 3 tienen las mismas propiedades (nombre, edad).
let objetoPersona = [
    {
        nombre: "Sol",
        edad: 26
    },
    {
        nombre: "Emilio",
        edad: 25
    },
    {
        nombre: "Javi",
        edad: 28
    }
];
//Con que criterio lo ordenamos? A partir de que campo o propiedad? Por edad, alfabeticamente, etc.

for (let j = 0; j < objetoPersona.length; j++){
    for(let i = 0; i < objetoPersona.length -1; i++){//Si no pongo el -1, el codigo se rompe. Asi recorremos el array pero con una iteracion menos, xq al llegar al ultimo elem se lo quiere comparar con el siguiente, y no hay siguiente objeto.
        if(objetoPersona[i].edad > objetoPersona[i+1].edad){ //No puedo comparar 2 objetoPersona, la totalidad de ellos, sino un campo/propiedad de 2 objetos. Se agrega .propiedad SOLO EN EL IF.
            let temp = objetoPersona[i]; //Si en esta lineo o las siguientes 2 coloco .propiedad va a cambiar los valores de la propiedad de los objetos. No hacerlo.
            objetoPersona[i] = objetoPersona[i+1];
            objetoPersona[i+1] = temp; 
        }
    }
};
console.log(objetoPersona);//