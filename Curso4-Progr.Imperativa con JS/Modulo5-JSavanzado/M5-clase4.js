/*          DESAFIOS:
Matrices
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
1)Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una semana específica. Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.
2)Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. El número correspondiente al día deberá recibirse por parámetro. Recuerda que el número de día es determinado por las columnas.
3)Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.

Callbacks
Gastos por semana:

Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. Será obligatorio el uso de callbacks para esta función.*/


let gastos = [
    [1,2,3,4,5,6,7], 
    [8,9,10,11,12,13,14], 
    [15,16,17,18,19,20,21], 
    [22,23,24,25,26,27,28],   
];
console.table(gastos);

function totalGastosDeUnaSemana(semana){

}

https://playground.digitalhouse.com/course/4d5a703a-7fa7-425b-8edf-2fd6db4021b0/unit/55114de6-f72a-4c77-8ca0-ca675dda540f/lesson/740febef-f69f-47e0-89e8-0be318d4b823/topic/e3b31850-dd07-48a9-a51d-c8a1b35c0567