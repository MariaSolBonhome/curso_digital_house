                                            //ALGORITMOS DE BUSQUEDA

/*LINEAR SEARCH: algoritmo de busqueda lineal. Usado para encontrar un det valor en un array. Accede al array y revisa cada posicion a ver si encuentra el dato buscado: si esta nos da la posicion, sino indica -1. */
let array = [14,3,51,7,92,110,5,17,13,48];
let elementoBuscado= 3;
let posicion=-1;

for(let i=0; i<array.length; i++){
    if(array[i]=== elementoBuscado){//Si es true, ingresamos a las llaves del IF.
        posicion = i;//Si ingresamos al if xq me dio true, a la variable posicion le guardamos el valor de i. i nos va a dar la posicion/indice, ubicacion dentro del array.
    }
}


let array2 = [14,3,51,7,92,110,5,17,13,48];
let elemBuscado = 311;

function busquedaLineal(arr, elemento){//Que valores/parametros necesita para funcionar? Un array: arr. Y el elemento.
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elemento){
           return i; //Normalmente las funciones retornan un unico valor. Esta vez armaremos una estrategia con 2 retornos, para q retorne uno u otro valor, jamas ambos.
        }
    }
    return -1;//Si no entra en el IF (si ningun elem es ===), retorna -1 (o sea q ese valor no existe en el array)
}
let indiceEncontrado = busquedaLineal(array2, 51);//Como la funcion retorna un valor, necesitamos una variable q lo capture. En parametro puedo poner elemBuscado (q vale 311) o cargarle el int directo.
if(indiceEncontrado==-1){
    console.log("El elem a buscar no se encuentra dentro del array.");
}else{
    console.log("El elem a buscar esta en la posicion:"+indiceEncontrado);
}




/*BINARY SEARCH: tiene como desventaja la necesidad de tener ordenados de menor a mayor antes de aplicar este algoritmo para q funcione correctam, pero va a lograr el mismo objeto pero en muchas menos iteraciones.*/
let array3 = [1,2,3,4,5,6,7];
let nroABuscar = 30;

function binarySearch(array, valorBuscado){
    let indiceDeBusqueda = 0;
    let limiteDeBusqueda = array.length -1;//El -1 hace q al total de elem del array (en este caso 7), le sacamos una unidad q nos va a servir para acceder a la posicion del ultimo elem cargado, xq arranca en 0.

    while(indiceDeBusqueda <= limiteDeBusqueda){//Este proceso de bsuqueda se va a repetir reiteradam hasta q se encuentre el valor buscado. La condicion es q se va a repetir el cod siempre y cuando aun tenga elem 
        //en el array q no hayamos descartado (o sea q hayan elem pendientes de analizar).
        const INDICEMITAD = Math.round((indiceDeBusqueda + limiteDeBusqueda) / 2);//variable o const para guardar el indice del elem q esta en el medio. Sumo el 0 con el 6, y al dividirlo por 2 obtendo la mitad del array (posicion 3). Round math redondea el valor en caso q el array no tenga mitad.
        const ELEMENTOMEDIO = array3[INDICEMITAD];//variable/const para guardar el elem q esta en el indice q esta en el medio.
        if(ELEMENTOMEDIO==valorBuscado){
            return INDICEMITAD;
        }//Si la respuesta es q no, vamos a otro if. 
        if(ELEMENTOMEDIO > valorBuscado){//Porq si en el if anterior el elementomedio no es el q buscamos, entonces es un elem mayor o menor, y eso lo sabemos con este if. Veamos si el elementomedio es mas grande q el buscado.
            limiteDeBusqueda = INDICEMITAD -1;
        }else{
            indiceDeBusqueda = INDICEMITAD +1;
        }
    }
    return null;//Este es el segundo return. Si el primero no ocurre (no encuentra lo buscado), entra este return q corta con la ejecucion en -1.
}//Que pasa si el while sigue y nunca encontramos ese "return indicemitad"(linea 49)? El while se va a volver falso eventualm y va a esperar alguna instruccion fuera del while. Por eso espera un return null(o -1).

let indexFound = binarySearch(array3, nroABuscar);
console.log(indexFound);

