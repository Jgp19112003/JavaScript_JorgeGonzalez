/*// if if else
if (true) {
    console.log("La respuesta es true");
    
} else {
    console.log("La respuesta es false");
    
}

// if ternario

//condicion ? true : false 
let acierto = true;
acierto ? console.log("examen aprobado") : console.log("examen suspenso");

//if
acierto & console.log("examen aprobado");
//switch
let nota = 6;
switch (nota) {  
    case 1:
        console.log("dato introducido 1");
        
        break;
    case 2:
        console.log("dato introducido 2");
        
        break;

    default:
        console.log("dato incorrecto");
        
        break;
}

// ej1

let n1 = prompt("Introduce primer numero", "numero 1");
console.log(n1);
let n2 = prompt("Introduce primer numero", "numero 2");
console.log(n2);
let operacion = prompt("Introduce una operacion", "opercaion");
console.log(operacion);
if (!isNaN(n1) && !isNaN(n2)) {

    switch (operacion) {
        case "suma":
                let suma = Number(n1) + Number(n2);
                console.log(suma);
                alert(`La ${operacion} entre ${n1} y ${n2} es ${suma}`);
            break;

        case "resta":
                let resta = n1 - n2;
                console.log(resta);
                alert(`La ${operacion} entre ${n1} y ${n2} es ${resta}`);
            break;

        case "multiplicacion":
                let multiplicacion = n1 * n2;
                console.log(multiplicacion);
                alert(`La ${operacion} entre ${n1} y ${n2} es ${multiplicacion}`);
            break;

        case "division":
                let division = n1 / n2;
                console.log(division);
                alert(`La ${operacion} entre ${n1} y ${n2} es ${division}`);
            break;

        default:
            console.log("Dato erroneo");
            
            break;
    }
} else{
    console.log("Los datos no son numeros");
    
}

// while

/*Pedir un número por Prompt y mostrar por consola todos 
los números desde el introducido hasta 0. 
En el caso de ser un número negativo saltará una alerta
9
Siempre hay que comprobar si es un número lo introducido
Pedir por consola dos numeros y sacar consola todos 
los numeros entre ellos
6 10

let numeroIntroducido = prompt("introduce numero");

if (!isNaN(Number(numeroIntroducido)) && numeroIntroducido > 0) {
  while (numeroIntroducido > 0) {
    console.log(numeroIntroducido);
    numeroIntroducido--;
  }
} else {
  console.log("numero incorrecto");
}

let numeroUno = prompt("introduce numero");
let numeroDos = prompt("introduce numero");

let max, min;
if (numeroDos > numeroUno) {
  max = numeroDos;
  min = numeroUno;
} else if (numeroDos < numeroUno) {
  max = numeroUno;
  min = numeroDos;
} else {
  alert("los numeros son iguales");
}

while (max > min) {
  console.log(max);
  max--;
}*/

// for -- repeticiones sobre estructurar --> array
let numeros = [1, 2, 3, 45, 6, 7, 67, 8, 6];
console.log(numeros[0]);
console.log(numeros.length);
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    
}
numeros.forEach(element => {
    if (element % 2 == 0){
    console.log(element);
    }
    
});

numeros.forEach((element, indice) => {
    if (indice % 2 == 0) {
        console.log(element);
    }
});

