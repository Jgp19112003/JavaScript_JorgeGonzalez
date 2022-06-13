// funciones declaradad
// funciones anonimas - funciones de flecha

//function nombre(parametros. parametros){
    // cuerpo
    //retrn 
//}

// let funcionAnonima = function (parametros){}
// funcionAnonima(parametro)

// let flecha = (param) => { cuerpo }
// flecha (param)
/*
function sumaNumeros(operadorUno, operadorDos) {
    let suma = operadorUno + operadorDos;
    console.log(suma);
}
sumaNumeros(5,10);

function sumaDefecto(operadorUno, operadorDos = 0) {
    
    let suma = operadorUno + operadorDos;
    console.log(suma);
}
sumaDefecto(7);
sumaDefecto(7,3)

function sinParametros() {
    console.log("Funcion llamada");
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
        
    }
}
sinParametros(89,69);

function funcionRetorno(op1, op2) {
    let suma = op1 +op2;
    console.log(suma);
    return suma;
    
}
*/
/*ej 1

let n1 = prompt(`Porfavor introduce el primer numero`, "numero");
console.log(n1);

let n2 = prompt(`Porfavor introduce el segundo numero`, "numero");
console.log(n2);
operaciones(n1,n2)
function operaciones(n1,n2) {
    let suma = Number (n1) + Number(n2);
    let resta = n1 - n2;
    let multiplicacion = n1 * n2;
    let division = n1/n2;
    alert(`Suma: ${suma} Resta: ${resta} Multiplicacion: ${multiplicacion} Division: ${division}`);
}*/
/*
let frase = prompt(`Introduce una frase`, "frase");
let letra = prompt(`Introduce una letra`, "letra");
analizarLetra(frase,letra);

function analizarLetra(paramFrase, paramLetra) {
    let contador = 0;
    if (frase.includes(letra)) {
        frase.split("").forEach(element => {
            if (element == letra) {
                contador++;
            }
        });
        alert(`La letra ${letra} aparece ${contador} en la frase`);
    }
       
}