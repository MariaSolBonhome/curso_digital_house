//LET vs VAR

//En una version vieja de JS, VAR era lo unico para formar variables, pero tiene alcance global (la puedo llamar desde cualquier parte del codigo)

function ejemplo1(){
    if(true){
        var mensaje = "Hola";
    }
    console.log(mensaje);
}

ejemplo1();



//LET: aparecio para solucionar los problemas de alcance que tiene la palabra VAR.

function ejemplo2(){
    if(true){
        let msje = "Hola";
        console.log(msje)
    }
    // console.log(msje);//Dejar este console log da error xq la variable msje solo existe dentro del if, xq alli fue creada. Tiene alcance local, de bloque.
}

ejemplo2();


/*EJERCICIOS DE PRACTICA

Te invitamos a completar los siguientes algoritmos, donde podrás integrar y aplicar todos los conceptos aprendidos hasta ahora. Estos ejercicios te permitirán fusionar habilidades y crear proyectos increíbles. ¡Comencemos!
    1)Validador de contraseña: Crea una variable llamada ‘contraseña’ donde guardes un valor específico. Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales, verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. La función deberá mostrar por consola si la contraseña recibida es válida o no.
    2)Calculadora de Índice de Masa Corporal (IMC): Crea una función que calcule el IMC utilizando los parámetros de peso y altura. Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
    3)Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una moneda a otra. Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
    4)Evaluador de Rango de Edad: Escribe una función que determine en qué categoría de edad se encuentra una persona. Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.
    5)Generador de Mensajes Personalizados: Crea una función que genere un mensaje personalizado para un usuario según su nombre y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) para incluir diferentes saludos.
*/

//Ejercicio 1
let password = "1234"; //let o var?

function verification(userPassword){
    if(userPassword === password){
        console.log("Your password is valid.");
    }
    else{
        console.log("Your password is not valid");
    }
}

verification("1234")

//Ejercicio 2
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        console.log("Bajo peso");
    } else if(imc < 24.9){
        console.log("Peso normal");
    }else if(imc < 29.9){
        console.log("Sobrepeso");
    }else{
        console.log("Obesidad");
    }
}
calcularIMC(70, 1.75)

//Ejercicio 3
//Opcion uno: sin limitador de moneda, no se sabe que tipo de moneda se le esta pasando.
function convertirMoneda(cantidad, tipoCambio){
    let resultado = cantidad * tipoCambio;
    return resultado;
}
let cantidad = convertirMoneda(100, 0.85);
console.log("Cantidad en euros: " + cantidad);
//Opcion 2: con limitador de moneda
function convertirMoneda2(cantidad, monedaDestino){
    let tipoDeCambio;

    switch(monedaDestino) {
        case "dolar":
            tipoDeCambio = 1.0;//Tipo de cambio de dolar a si mismo.
            break;
        case "real":
            tipoDeCambio = 5.5//Tipo de cambio de dolar a real
            break;    
        case "euro":
            tipoDeCambio = 0.85;
            break;    
        default:
            console.log("Moneda no soportada")
            return -1
            break;    
    }

    let resultado = cantidad * tipoDeCambio;
    console.log("Cantidad convertida a " + monedaDestino + " : " + resultado);
}
convertirMoneda(100, "real")

//Ejercicio 4
let age = 18;
function ageCategory(age){
    
    let ageRange = " ";

    switch(age){
        case age < 12:
        ageRange = "Kid";
        break;
    case age >= 12:
        ageRange = "Teenager";
        break;
    case age >= 18:
        ageRange = "Mayor de edad";
        break;
    default:
        mnsje = "Ingreso un numero incorrecto";
    }
    console.log(ageRange)
}//Esta mal.

function evaluarEdad(edad){
    if(edad < 12){
        console.log("Nino");
    }else if(edad < 18){
        console.log("Adolescente");
    }else if(edad < 30){
        console.log("Adulto joven");
    }else{
        console.log("Adulto");
    }
}
evaluarEdad(11);

//Ejercicio 5
function generarMensajePersonalizado(name, momentoDelDia){
    let saludo = (momentoDelDia === "manana") ? "Buenos dias" : "Buenas tardes";
    console.log(`${saludo}, ${name}!`);
}
generarMensajePersonalizado("Lautaro", "manana");

let a=2
let b='3'
console.log(a+b)