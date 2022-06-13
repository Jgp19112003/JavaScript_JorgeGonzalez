let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
let contador = 0;
let spanPulsaciones = document.querySelector("span");

boton_agregar.addEventListener("click", (element) => {
 /*Agregar nodo 
  let contenido = input_agregar.value;
  //console.log(contenido);
  let lista = document.querySelector("#lista_primeros");
  let nodoLI = document.createElement("li");
  nodoLI.innerText = contenido;
  lista.appendChild(nodoLI);
  //className sustituye toda la clase, classList añade a lo que ya habia, lo añade
  //nodoLI.className = "list-group-item";
  //swtAttribute, añade un atributo (id,class..)
  nodoLI.setAttribute("class","list-group-item" )*/

  //modificar html
  let contenido = input_agregar.value;


  if (contenido == "") {
      console.log("Contenido vacío");
      
  } else {
    let lista = document.querySelector("#lista_primeros");
    lista.innerHTML = `${lista.innerHTML} <li class= "list-group-item">${contenido}</li>`;

  }




});

input_agregar.addEventListener("keydown", (event) => {
  // sacar la tecla pulsada por consola
  //console.log(event.key);
  //console.log(input_agregar.value);
  contador++;
  spanPulsaciones.innerText = contador;
});

// el en parrafo que está configurado al final en el 0
// deberá aparecer el número de pulsaciones realizadas (dinámico)

// declarar la funcion fuera (va a ser reutilizada?)
// o dentro(solo ejecutada por el evento) --> anónima