const prompt = require("prompt-sync")({sigint: true});
//INICIO PROYECTO INTEGRADOR: gestor de tareas

//VARIABLES
let tareas = [];//Array q almacena las tareas
let categoriasNombres = [//Creamos matriz para diferenciar las tareas segun categorias. Los corchetes para indicar q es array y dentro las categorias.
    "Trabajo",
    "Personal",//Agregar mas categorias segun sea necesario
];/*Esto no parece una matriz, pero lo es. Lo veniamos trabajando distinto. CUANDO CREAMOS UN ARRAY CON STRINGS cargados dentro, ESTAMOS CREANDO UNA MATRIZ, xq cada string tiene el mismo comportamiento q los arrays. 
  Y los strings son conjuntos de caracteres (la t de trabajo en posicion 0, etc.) entonces a cada palabra no hace falta q le carguemos los corchetes (q conforman cada array dentro del corchete mayor).
  Ejemplo: console.log(categoriasNombres[0][3]) me imprime la r, si pido [0][0] es la T.*/


//Funcion para interactuar con el user
    interactuarConUsuario();

 function interactuarConUsuario(){//Funcion ppal
    let opcion = -1;
    while(opcion !=0){//Si la opcion no es 0, significa q aun quiere interactuar con nosotros.
        mostrarMenu();//Llamo a la funcion mostrarMenu para q muestre el menu.
        opcion = parseInt(prompt("Ingrese la opcion seleccionada:"));
    
        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;
            
            
            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;
            
            
            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indiceACompletar);
                break;
            
            
            case 4:
                let indice = parseInt(prompt("Ingrese el indice a modificar: "));
                if(indice >=0 && indice <tareas.length){//Verificar q el indice sea correcto.
                    let opcion = parseInt(prompt("Que propiedad desea modificar? 1.Nombre, 2.FechaLimite, 3.Numero de categoria"));
                    switch (opcion) {
                        case 1:
                            let nuevoNombre = prompt("Ingrese nuevo nombre de la tarea:");
                            modificarTarea(indice, nuevoNombre);
                            break;
                        case 2:
                            let nuevaFechaLimite = prompt("Ingrese nueva fecha limite: ");
                            modificarTarea(indice, undefined, nuevaFechaLimite);//Undefined xq no deseo cargarle ningun nuevo nombre en esa posicion/indice.
                            break;
                        case 3:
                            let nuevoNumeroDeCategoria = parseInt(prompt("Ingrese nuevo numero de categoria: "));
                            if(nuevoNumeroDeCategoria >= 0 && nuevoNumeroDeCategoria < categoriasNombres.length){
                                modificarTarea(indice, undefined, undefined, nuevoNumeroDeCategoria);//Respetamos el orden de parametros q la funcion espera.
                            }
                            break;
                        default:
                            break;
                    }
                }else{
                    console.log("Indice de tarea incorrecto.");
                }
                let nuevoNombre = prompt("Ingrese el nombre de la tarea: ");
                modificarTarea(indice, nuevoNombre);
                break;
            
            
            case 5:
                console.log("Lista de tareas:");
                console.log(tareas);
                break;
            
            
            case 6:
                mostrarTodasLasCatgorias();//No requiere ningun parametro.
                break;
            
            
            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria a agregar: ");
                agregarNuevaCategoriaPorElUser(nuevaCategoria);
                break;

            case 8:
                mostrarTodasLasCatgorias();//Para q el usuario no tenga q clickear en case6, entonces ya se las mostramos. 
                let nroCategoriaAFiltrar = parseInt(prompt("Ingrese el numero de la categoria a filtrar: "));
                let tareasCategoria = filtrarTareasPorCategoria(nroCategoriaAFiltrar);//Esta variable es para q, cuando termine de efectuarse el llamado, podamos capturar en la variable el nuevo array retornado.
                console.log("Tareas de la categoria seleccionada: ");
                console.log(tareasCategoria);               
                break;

            case 9:
                mostrarTodasLasCatgorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a visualizar:"));
                contarTareasCompletadasPorCategoria(nroCategoria);

            case 10:
                mostrarTareasNoCompletadas();

            case 11:
                ordenarTareasPorNombre();
                console.log("Tareas por nombre: ")
                console.log(tareas)
                break;    
            
            case 12:
                ordenarTareasPorFechaLimite();
                console.log("Tareas por fecha:");
                console.log(tareas);
                break;

            case 13:
                ordenarTareasPorNombre();//Nada nos garantiza q el user haya pasado x la opcion 11, asi q al llamar a esa funcion nos aseguramos q el array este ordenado x nombre.    
                let nombreABuscar = prompt("Ingrese nombre de la tarea a buscar: ");
                let indiceTarea = buscarTareaPorNombre(nombreABuscar);
                if(indiceTarea !== -1){//Si es true, entonces se localizo el nombreABuscar en alguna position.
                    console.log("Tarea encontrada en el indice: "+indiceTarea);
                }else{
                    console.log("Tarea no encontrada");
                }
                break;

            default:
                console.log("Opcion invalida.");
                break;
        }
    }
};




//Funcion para mostrar el menu de opciones
function mostrarMenu(){
    console.log("Menu");
    console.log("1.Agregar tarea");
    console.log("2.Eliminar tarea");
    console.log("3.Marcar tarea como completada");
    console.log("4.Modificar tarea");
    console.log("5.Mostrar tareas");
    console.log("6.Ver todas las categorias");
    console.log("7.Agregar nueva categoria");
    console.log("8.Filtrar tareas por categoria");
    console.log("9.Visualizar cantidad de tareas completadas por categoria");
    console.log("10.Visualizar todas las tareas no completadas.");
    console.log("11.Ordenar las tareas alfabeticamente");
    console.log("12.Ordenar tareas por fecha limite");
    console.log("13.Buscar una tarea por su nombre");
    console.log("0.Salir");
};



//Funcion para agregar tareas al array. El user carga el nombre, etc.
function agregarTarea(nombreRecibido, fechaLimiteRecibida=null){//null es q si el user no tiene fechaLimite, y no la carga, es null.
    mostrarTodasLasCatgorias();//Para q las visualice en el momento.
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea:"));
    if(numeroCategoria >=0 && numeroCategoria < categoriasNombres.length){
        tareas.push({nombre: nombreRecibido, completada: false, fechaLimite: fechaLimiteRecibida, categoria: numeroCategoria});//Como indico q lo q quiero pushear, agregar al final del array, es un objeto (ada tarea sera un objeto)? Con llaves, la compu ya sabe q es un objeto. Cada vez q agregamos una tarea, marcamos q por defecto es false, esta sin hacer.
        console.log("Tarea agregada con exito!");        
    }else{
        console.log("Numero de categoria incorrecto!");
    }
    
};


//Eliminar tarea
function eliminarTarea(indice){//Indice de aquel objeto o tarea q deseamos eliminar.
    if(indice >= 0 && indice < tareas.length){//Este if chequea q el indice q le pasemos sea positivo y menor a la longitud del array. Si tengo 3 tareas, no existe la tarea en el indice/posicion 5.
        tareas.splice(indice, 1);//Linea 12: ingresa al array tareas, al indice/posicion q se le indique y elimina 1 solo objeto.
        console.log("Tarea eliminada correctamente");
    }else{
        console.log("Indice de tarea invalido/inexistente");
    };
};


//Marcar tarea completada
function completarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("Tarea marcada como correcta!");
    }else{
        console.log("Indice de tarea invalido");
    }

};


//Modificar una tarea especifica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite=null, nuevoNumeroCategoria){//Funcion dinamica xq o modif nombre, o fecha, o ambas.
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;//Es un if ternario. Si es undefined, el user no quiere cargar nuevoNombre sino otra cosa, se le vuelve a cargar el mismo valor q tenia.
        tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite//Lo mismo.
        tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria//Si la pregunta responde q si, le cargo el nuevoNumeroCategoria. Si es flase, se le carga lo mismo q ya tenia.
        console.log("Modificacion correcta!");
    }else{
        console.log("Indice de tarea invalido.");
    }
};


//Funcion que muestra todas las categorias (matriz)
function mostrarTodasLasCatgorias(){
    console.log("Categorias existentes:");
    categoriasNombres.forEach(function(categoria, indice){//Podriamos hacerlo con FOR, pero mejor FOR EACH q es un metodo de arrays(xq la matriz es un array de arrays). Va NombreDeLaVariableQueEstamosTrabajando.forEach() La primera info q hay q darle al forEach es un callback, una funcion anonima qno le vamos a poner nombre.
        console.log(indice + ":" + categoria);//Esta function recorre el array, x eso el forEach, y solo va a mostrar el indice y la categoria-->     0:Trabajo  1:Personal
    });
};




//Funcion para cargar nuevas categorias por el user
function agregarNuevaCategoriaPorElUser(nombreNuevaCategoria){
    categoriasNombres.push(nombreNuevaCategoria);
    console.log("Categoria" + nombreNuevaCategoria + "agregada correctamente.");
};


//Funcion q filtra tareas por categoria
function filtrarTareasPorCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(function(tarea){//Este metodo de arrays (.filter) necesita un callback, y se la escribimos en los parentesis, q es lo q debe considerar para realizar el filtrado. La variable tareasFiltradas es para atrapar el array q nos va a retornar el callback. Cada elem del metodo se llamara tarea (.filter va a encontrarse elem llamados tarea dentro del array tareas).
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
};



//Funcion que muestra cantidad de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);//Capturo el filtrado (de la funcion q llamamos) en tareasCategoria.
    let tareasCompletadas = tareasCategoria.reduce(function(contador,tarea){// .reduce para q me reduzca la cantidad de tareas completadas a un numero. El parametro contador (para contabilizar cuantos objetos/tareas tiene la propiedad "completada"), el parametro tareas es para darle un nombre a cada objeto q el metodo .reduce se va a encontrar dentro del array.
        return tarea.completada ? contador +1 : contador; //Retornaremos, con un if ternario, aquello cuya propiedad completada sea = a true. Si es objeto al q accedemos tiene su propiedad llamada completada exactam = a true, vamos a hacer q al contador lo aumentamos en una unidad; caso contrario, al contador lo dejamos tal cual esta.
    },0);//if tarea.completada es true, entonces contador+1; si es false, :contador queda igual.  --------------------------------NO ENTENDI EL 0------------------------------------
    let tareasEnTotal= tareasCategoria.length;
    console.log("Tareas completadas de la categoria "+numeroCategoria+": "+tareasCompletadas+"de"+tareasEnTotal+"tareas.");
};



//Funcion que muestra todas las tareas no completadas.
function mostrarTareasNoCompletadas(){
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){//tarea es el nombre de los elem del array tareas.
        if(!tarea.completada){//Cuando encontremos una tarea cuya categoiria completada no este completada, entro al if.
            console.log("Nombre:"+tarea.nombre+", categoria:"+categoriasNombres[tarea.categoria])
        }
    });
};


//Funcion para ordenar tareas por la propiedad 'nombre; usando BubbleSort.
function ordenarTareasPorNombre(){//No requerimos otro array, xq vamos a trabajar con el array tareas q ya tenemos.
    let total = tareas.length;
    for(let j=0;j<total;j++){//Este for es para ietrar el for de abajo hasta q todos los objetos esten ordenados.
        for(let i=0;i<total -1;i++){//En vez de 'total', podemos no crear la variable en la linea anterior y en vez de total en esta linea poner tareas.length directamente. El -1 es xq al llegar al ultimo elem no va a tener con q comparar y va a dar undefined. Con el -1 se soluciona ese problema.
            if(tareas[i].nombre > tareas[i+1].nombre){//El if dice: ingresa al arreglo tareas, a la posicion especifica y accede al valor agregado en esta propiedad. Al encontrarlo fijate si es mayor q aquel cargado en el array tareas en la ubicacion especifica(1 lugar a la derecha) en la propiedad nombre. Si es hay q hacer intercambio de objetos.
                let temp = tareas[i];//Ahora no se agrega propiedad xq sino intercambia valores. lo q queremos es agarrar el objeto completo (con todas sus propiedades) para cambiarlo de lugar.
                tareas[i] = tareas[i+1];//Pisamos el valor si es true. El de menor valor lo llevamos un lugar hac ia adelante.
                tareas[i+1] = temp;//Tamb tenemos q pisar lo q esta en i+1 y cargarlo con lo q tenemos en la variable temp (temporal). El q es mayor va una posicion hacia atras o hacia la derecha.
            }
        }
    }
};

//Funcion para ordenar tareas por la propiedad 'fecha limite'; usando BubbleSort.
function ordenarTareasPorFechaLimite(){//En relac con la funcion anterior, solo cambia el nombre de la funcion y la propiedad .nombre por .fechaLimite
    let total = tareas.length;
    for(let j=0;j<total;j++){
        for(let i=0;i<total -1;i++){
            if(tareas[i].fechaLimite > tareas[i+1].fechaLimite){
                let temp = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temp;
            }
        }
    }
};


//Funcion que busca tarea por nombre y retorna su posicion
function buscarTareaPorNombre(nombreTarea){
    //Busqueda binaria, para lo q los objetos deben estar ordenados alfabeticamente
    let inicio = 0;//Marcar con una variable donde inicia la busqueda
    let fin = tareas.length-1//Marcar con esta variable donde termina. El -1 es para q no nos de undefined.
    while(inicio <= fin){//Se va a repetir lo q este entre llaves siempre y cuando haya elem en el array qno hayan sido considerados para esta busqueda, q no se hayan descartado aun.
        let positionElemMedio = math.round((inicio+fin)/2);//Si el array tiene 7 elem, let inicio vale 0 y let fin vale 6. Sumarlos da 6, dividido 2 da 3. El .round es xq a veces el array no tiene un medio, entonces redondea.
        if(tareas[positionElemMedio].nombre === nombreTarea){//Coincide el elem del medio del array con el nombreTarea pasado x parametro. 
            return positionElemMedio;//Si la condicion de la linea de arriba es true, solo retornamos la posicion de la variable positionElemMedio. Si es false vamos a analizar alternativas con else if.
        }else if(tareas[positionElemMedio].nombre < nombreTarea){
            inicio = positionElemMedio+1;//Modif el valor de la variable inicio, xq signiffica q si lo q yo encontre es algo mas pequeno q lo q busco, como el array esta ordenado de mayor a menor, todo lo q esta a la izquierda no sirve xq son valores menores a lo q deseo encontra, entonces se arranca la busqueda desde una nueva posicion de inicio.
        }else{//Vamos con un else xq la unica alternativa q queda es q lo q estamos buscando sea mayor.
            fin = positionElemMedio-1;//Si lo q econtramos es algo mayor a lo q debiamos encontrar, todo lo q este a la derecha es info q podemos descartar; entonces continuamos la busqueda cambiando el uyltimo elem a tener en cuenta. El nuevo elem q indica el fin de los elem a tener en consideracion es el q surja de hacer positionElemMedio -1.
        }
        
    }
    return -1;//Cuando el while se vuelva falso, se sale de ese bloque de codigo y ahi se encuentra con el return -1, q indica q lo q nos solicitaron buscar x parametro no se encuentra dentro del array.
};