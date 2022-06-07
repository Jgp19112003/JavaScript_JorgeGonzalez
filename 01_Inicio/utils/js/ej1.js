

let nombre = prompt("Introduce tu nombre", "Nombre");
console.log(nombre);

let apellido = prompt("Introduce tu apellido", "apellido");
console.log(apellido);


let n1 = prompt(`Porfavor ${nombre} ${apellido} introduce el primer numero`, "numero");
console.log(n1);

let n2 = prompt(`Porfavor ${nombre} ${apellido} introduce el segundo numero`, "numero");
console.log(n2);

let confirmar = confirm("¿Quieres realizar la operacion?");

if (confirmar == true) {

    let suma = Number(n1) + Number(n2);
    console.log(suma);

    let resta = n1 - n2;
    console.log(resta);

    let multiplicacion = n1 * n2;
    console.log(multiplicacion);

    let division = n1 / n2;
    console.log(division);

    let modulo = n1 % n2;
    console.log(modulo);
} else{
    alert(`Hadta la próxima ${nombre}`)
}

