class usuario {
    nombre;
    apellido;
    edad;
    conocimientos;
    empresa;

    constructor(nombre,apellido,edad,empresa){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.empresa = empresa;
        this.conocimientos = [];
    }



mostrarDatos(){

    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
    
    }

anadirConocimiento(conocimiento) {
    this.conocimientos.push(conocimiento);
    }

    get getNombre() {
        return this.nombre;
      }
    
      set setNombre(nombre) {
        this.nombre = nombre;
      }
    
      get getApellido() {
        return this.apellido;
      }
    
      set setApellido(apellido) {
        this.apellido = apellido;
      }
    
}


let u1 = new usuario("Borja", "Matin", 38);
u1.mostrarDatos();
