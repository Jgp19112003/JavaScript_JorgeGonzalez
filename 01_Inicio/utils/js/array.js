let elementos = [1, 2, 3, 4, 5, 6, 7, 8];
let equipos = ["madrid","barsa","getafe","atletico","sevilla"];
let cosas = [1, "madrid",true];

equipos.push("leganes","alcorcon","cadiz");
console.log(equipos);
console.log(equipos.pop());
console.log(equipos);
console.log(equipos.unshift("leganes","alcorcon","cadiz"));
console.log(equipos);
console.log(equipos.shift());
console.log(equipos);
equipos = equipos.filter((item) => {
    return item != "sevilla";
 })
console.log(equipos);
let nums = [1,2,3,4,5,6]
let aleatorio = _.shuffle([1, 2, 3, 4, 5, 6]);
console.log(aleatorio);








