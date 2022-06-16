let baraja = [];
let botonInicar = document.querySelector("#boton_iniciar");
let botonPedir = document.querySelector("#boton_pedir");
let botonPlantar = document.querySelector("#boton_plantar");
let botonReiniciar = document.querySelector("#boton_reiniciar");
let puntosJ1 = document.querySelector("#contenedor_j1 bold");
let puntosJ2 = document.querySelector("#contenedor_j2 bold");
let cartasJ1 = document.querySelector("#cartas_j1");
let cartasJ2 = document.querySelector("#cartas_j2");

function iniciarBaraja() {
  let palos = ["T", "C", "D", "P"];

  for (let index = 0; index < palos.length; index++) {
    for (let index2 = 1; index2 < 14; index2++) {
      if (index2 == 11) {
        baraja.push(new carta("J" + palos[index], 10));
        //baraja.push("J" + palos[index]);
      } else if (index2 == 12) {
        baraja.push(new carta("Q" + palos[index], 10));
        //baraja.push("Q" + palos[index]);
      } else if (index2 == 13) {
        baraja.push(new carta("K" + palos[index], 10));
        //baraja.push("K" + palos[index]);
      } else {
        baraja.push(new carta(index2 + palos[index], index2));
        //baraja.push(index2 + palos[index]);
      }
    }
  }

  baraja = _.shuffle(baraja);
}
function mostrarBaraja() {
  console.log(baraja);
}
function calcularValor(carta) {
  return carta.substring(0, carta.length - 1);
}

// este numero será la posicion de la carta que obtengo
// sacar la carta obtenida y su valor Carta: 10J Valor: 10
// sacar la carta obtenida y su valor Carta: 1J Valor: 1
// sacar la carta obtenida y su valor Carta: KJ Valor: 10

/*iniciarBaraja();

mostrarBaraja();*/

let nombreJugador = prompt("introduce tu nombre");
document.querySelector("#contenedor_j1 span").innerText = nombreJugador;
botonInicar.addEventListener("click", () => {
  puntosJ1.innerText = 0;
  puntosJ2.innerText = 0;
  /* botonPedir.setAttribute("disabled", false); */
  /*  botonPlantar.setAttribute("disabled", false);
  botonReiniciar.setAttribute("disabled", false);
  botonInicar.setAttribute("disabled", true); */
  iniciarBaraja();
});

botonPedir.addEventListener("click", () => {
  let carta = baraja.pop();
  //console.log(carta);
  //mostrarBaraja();
  let imagenCarta = document.createElement("img");
  imagenCarta.setAttribute("src", carta.getRuta);
  imagenCarta.className = "carta";

    if (puntosJ1.innerText < 21) {
      cartasJ1.appendChild(imagenCarta);
      puntosJ1.innerText = carta.getValor + Number(puntosJ1.innerText);
    }
    setTimeout (() =>{
      puntosJ1.innerText > 21 && alert("Has perdido, la banca gana");
  },500)

   


  // modificar el contador del span del jugador
  // modificar el contador del span de la banca
});

function turnoBanca() {
  console.log("Jugando banca");
  
  let intervaloBanca = setInterval (() => {
    let carta = baraja.pop();
    //console.log(carta);
    //mostrarBaraja();
    let imagenCarta = document.createElement("img");
    imagenCarta.setAttribute("src", carta.getRuta);
    imagenCarta.className = "carta";
  
      if (puntosJ2.innerText < 21) {
        cartasJ2.appendChild(imagenCarta);
        puntosJ2.innerText = carta.getValor + Number(puntosJ2.innerText);
      }
      setTimeout (() =>{
        if (puntosJ2.innerText >= 17){
         clearInterval(intervaloBanca);
         if (puntosJ1.innerText > puntosJ2.innerText){
           alert("Jugador uno ganador")
           
         }
         if (puntosJ1.innerText < puntosJ2.innerText){
           alert("La banca gana")
           
         }
         if (puntosJ1.innerText == puntosJ2.innerText){
           alert("Empate")
           
         }
        }
    },500)
  },1500);

}

botonPlantar.addEventListener("click", () => {
  if (puntosJ1.innerText <= 21) {
    turnoBanca();
  }else{
    alert("La banca gana")
  }
});
