                                                                    //OBJETOS LITERALES
/*Son la representacion en codigo de elem de la vida real. Lo cual nos permite modelar aquellas cuestiones q riquiramos agregar a nuestro proyecto pero q no podamos representar con tipos de datos primitivos.
Un objeto es una estructura q contiene varios datos q van a estar representados bajo propiedades o metodos. Las propiedades son todas aquellas caracteristicas q van a compartir aquel elem q estemos modelando,
y los metodos van a ser aquellas acciones q le permitamos realizar.*/

//crear un objeto
let persona = { //en vez de [], van {}. Asi, la compu automaticamente sabe q se trata de un objeto.
    name : "Sol",
    apellido : "Bonhome",
    edad : 26,
    coloresFavoritos : ["rosa", "lila", "celeste"],//[] xq quiero cargar mas de un string. Se vuelve un array.
    saludar : function(){
        return `Hola, como estas? Soy ${this.name}.`;//Debo marcar ruta, pero no puedo indicarle a persona q acceda a persona, asi q debo usar THIS.
    }
};

//Acceder a las propiedades de un objeto
console.log(persona.edad);
console.log(persona.coloresFavoritos[0]);//En posicion 0 esta el rosa.

//Cargar nueva propiedad
persona.deporteFavorito = "Padel";//Finjo demencia y escribo el nombre de la porpiedad q quiero crear haciendo de cuenta q ya existe.
persona.edad = 27;//Pisar el valor.
console.log(persona);

//Eliminar una propiedad
delete persona.deporteFavorito;
console.log(persona);

/*Metodos de los objetos: en las porpiedades q le cargamos al objeto podemos alamecenar cualquier tipo de dato. Del mismo modo, podemos aprovechar esta condicion para poder almacenar en una propiedad una FUNCION.
Y cuando en una propiedad almacenamos una funcion, el nombre q recibe es un METODO, el METODO DEL OBJETO. */
let saludoRecibido = persona.saludar()//Llamo al objeto y propiedad, agrego () xq es una funcion. Pero, como retorna un string, asi q igualo este llamado a una variable para capturar lo q retorna y poder imprimirlo.
console.log(saludoRecibido);

