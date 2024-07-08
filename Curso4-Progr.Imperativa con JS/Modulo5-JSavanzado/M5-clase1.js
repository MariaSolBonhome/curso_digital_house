//MODULO 5: JAVASCRIPT AVANZADO

/*MATRICES: es un array que contiene arrays ubicados en filas. Es como una variable donde le vamos a cargar datos, elem, q van a estar ubicados en un lugar especifico q va a estar relac con un numero 
de fila y a un num de columna. Para acceder a un elem de una matriz se requieren 2 corchetes xq corresponde fila y columna. Pueden ser matrices cuadradas (4 filas y columnas), rectangulares (4 filas y 2 columnas).*/

//Crear matriz
//Opcion 1:
let matriz = [
    [1,2,3] , //Fila posicion 0
    [4,5,6] , //fila posicion 1
    [7,8,9]   //fila posicion 2
];
//Opcion 2: crear filas en partes para agregarlas a un array superior q forme la matriz.
let arrayMatriz = [];
let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] =  fila2;

//Visualizar una matriz
console.table(matriz)
// console.table(arrayMatriz)

//Acceder a un elem especifico
console.log(matriz[2][1]);//Fila 2, columna 1, me muestra el 8.

//Modificar un elem especifico
matriz[0][1] = 15;//Fila 0 columna 1, se pisa el valor de 2 y se reemplaza por 15.
console.table(matriz);

//Recorrer una columna especifica
for(let i = 0 ; i < matriz.length ; i++){
    console.log(matriz[i][0]);//0 en la clumna xq sabemos q no queremos salir de el. i en fila. Me muestra 1, 4, 7.
}

//Recorrer una fila especifica
for(let i = 0 ; i < matriz[0].length ; i++){//NO ENTIENDO POR QUE ACA VA MATRIZ[0].LENGTH Y EN EL DE ARRIBA SIN CORCHETES.????????????????????????????????????????????????????????????????????????????????????????
    console.log(matriz[0][i]);//matriz.length refiere a la cantidad de filas, arrojaria 3, pero 
}


/*RECORRER LA TOTALIDAD DE LA MATRIZ: doble for. Una variable contadora (let i) y un for para iterar sobre filas; dentro otra variable contadora con otro for para iterar sobre las dif columnas (let j). 
La combinacion de ambas permite ingresar a cada elem de la matriz.*/
for(let i = 0 ; i < matriz.length ; i++){//For para recorrer filas 
    for(let j = 0 ; j < matriz.length ; j++){//For para recorrer columnas
    console.log(matriz[i][j]);
    }
}


/*FILTRAR DENTRO DE MATRICES*/

for(let i = 0 ; i < matriz.length ; i++){
    for(let j = 0 ; j < matriz[i].length ; j++){//J debe ser < a lo q esta en la matriz en la fila especifica q estoy recorriendo, lo cual lo especifica el valor de i. Asi se adapta a la cantidad de elem q tenga cada fila (por si la matriz no es cuadrada).
    if(matriz[i][j] % 2 ==0){//% sirve pa hacer una division y q retorne el resto. Si a los dif elem de la matriz los divido por 2 y obtengo q el resto es exactam igual a 0, puedo det q se trata de un numero par.
        console.log(matriz[i][j]);//Imprime 2,4,6,8
    }
    }
}