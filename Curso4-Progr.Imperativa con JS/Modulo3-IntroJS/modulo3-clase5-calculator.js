//CONSTRUIMOS UNA CALCULADORA
const prompt = require("prompt-sync") ({sigint: true});//paquete de prompt

// let numero = prompt("Por favor, ingrese un numero que desee: ");
// console.log("El numero seleccionado es: ", numero);
// let numero2 = parseInt(prompt("Por favor, ingrese un numero: "));//parseInt es para que el numero a mostrar no lo pase a string, y se mantenga como un int. Se imprime en color amarillo como los int.
// console.log("El numero que indico es: ", numero2);


function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;//El retornar la variable resultado nos permite sacarla de la funcion.
};
let rdoSuma = suma(4, 10);
// console.log(rdoSuma);


function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
};
let rdoResta = resta(10, 5);
// console.log(rdoResta);//5


function multiplicar(num1, num2){
    return num1 * num2;//En vez de guardar por segundos el resultado en una variable, y ocupar innecesariam espacio en la memoria, directo indico q retorne el valor de la operacion.
};
let rdoMultiplicacion = multiplicar(10,10);
// console.log(rdoMultiplicacion);//100


function division(num1, num2){
    if(num2 == 0){
        return "No se puede dividir por 0. Elegir otro numero."//Si pongo console.log, en el console.log de abajo me va a salir el mensaje y undefined, xq chocan ambos console.log.
    }else{
        return num1/num2;
    }
};
let rdoDivision = division(10,2);
let rdoDivision2 = division(50,0);
// console.log(rdoDivision);//5
// console.log(rdoDivision2);//Sale el mensaje.


//Hay q darle instrucciones al usuario para q sepa como usar esta calculadora.
console.log("Bienvenido a su calculadora digital!");
console.log("1.Suma");
console.log("2.Resta");
console.log("3.Multiplicacion");
console.log("4.Division");
let opcion = parseInt(prompt("Indique la operacion q desea realizar"));//parseInt xq sino no concuerda con el switch de abajo, los case 1,2,3,4 son int... no dice case "1" como string.
let number1;
let number2;
let resultado;
switch (opcion) {
    case 1:
        number1 = parseInt(prompt("Indique el primer numero a sumar: "));//Si no pongo parseInt, al sumar, x ej, 5+5 me lo devuelve como string en el resultado: 55.
        number2 = parseInt(prompt("Indique el segundo numero a sumar: "));
        resultado = suma(number1, number2);
        console.log("El resultado de la suma es: ", resultado)
        break;

    case 2:
        number1 = parseInt(prompt("Indique el primer numero a restar; "));
        number2 = parseInt(prompt("Indique el segundo numero a restar: "));
        resultado = resta(number1, number2);
        console.log("El resultado de la resta es: ", resultado)
        break;

    case 3:
        number1 = parseInt(prompt("Indique el primer numero a multiplicar; "));
        number2 = parseInt(prompt("Indique el segundo numero a multiplicar: "));
        resultado = multiplicar(number1, number2);
        console.log("El resultado de la multiplicacion es: ", resultado)
        break;   

    case 4://La funcion division puede retornar el string de q no se puede realizar la operacion (if) o un int (else, si es q si pudo realizarse la operacion). Hay una operacion, un if, para comprobar el tipo de dato q tenemos en la variable.
        number1 = parseInt(prompt("Indique el primer numero a dividir; "));
        number2 = parseInt(prompt("Indique el segundo numero a dividir: "));
        resultado = division(number1, number2);
        if(typeof resultado == "string"){//typeof retorna el tipo de dato que contiene la variable resultado: number o string, etc.
            console.log(resultado);//no agregamos comillas xq la variable resultado, si es de tipo string, ya tiene un console.log con comillas.
        }else{
            console.log("El resultado de la division es: ", resultado);          
        }
        break;        
    default:
        console.log("Ingreso una opcion no valida.");
        break;
}
