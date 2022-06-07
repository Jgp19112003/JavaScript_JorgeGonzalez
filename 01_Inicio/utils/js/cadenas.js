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



