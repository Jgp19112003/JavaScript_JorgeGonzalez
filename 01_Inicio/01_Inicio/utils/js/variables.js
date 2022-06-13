// let  --> ámbito global y de metodo
// var  --> ámbito global  --> NO SE UTILIZA
// const  --> constantes


const DNI = "123456X";
let nombre = "Borja"; // --> string
let nombreObj = new String ("Elemento") ; // --> string
let apellido;  // null --> undefined
let edad = 37; // number
let carnet = true; // boolean
let fecha = new Date(); // Date --> object 

apellido = "Martin";

// comprobacion de tipos
console.log( typeof nombre);
console.log( typeof apellido);
console.log( typeof edad);
console.log( typeof nombreObj);
console.log( typeof fecha);
console.log( typeof carnet);

// isNaN --> is not a number
console.log(isNaN(nombre));

// salida por consola
console.log("Mi nombre es "+ nombre + " y tengo "+ edad + " años");
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

