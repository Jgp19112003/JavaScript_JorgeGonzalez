let frase = "Esto es un ejemplo de string"
console.log(frase);
console.log(frase.charAt(0));
console.log(frase.charAt(0).toLowerCase());


vocales = 0;
consonantes = 0;
for (let index = 0; index < frase.length; index++) {

    if (frase.charAt(index).toLowerCase() == "a" || frase.charAt(index).toLowerCase() == "e" || frase.charAt(index).toLowerCase() == "i" || frase.charAt(index).toLowerCase() == "o" || frase.charAt(index).toLowerCase() == "u") {
        vocales += 1;
    } else{
        if (frase.charAt(index).toLowerCase() != " ") {
            consonantes += 1;
        }
    }
    
}
console.log(`La frase tiene ${vocales} vocales y ${consonantes} consonantes`);
let contiene = frase.includes("e");
console.log(contiene);

//ej1

let email = prompt(`Porfavor introduzca  correo electrónico`, "email");
console.log(email);


let partesCorreo = email.split("@");
if (partesCorreo.split("@") == 2) {
    let dominio = email[1].split(".");
    if (dominio.split(".") == 2 && subdominio.includes("com") || subdominio.includes("es")) {
        console.log("Correo válido");
    }
} else {
    console.log("Correo no válido");
}



