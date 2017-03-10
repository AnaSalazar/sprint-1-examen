var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var estudiante = {
      nombre: prompt("Nombre de la Estudiante:"),
      puntosTecnicos: parseInt(prompt("Puntos técnicos:")),
      puntosHSE: parseInt(prompt("Puntos de Habilidades Socio-Emocionales:"))
    }
     // Hint: El estudiante debe ser agregado a la lista de estudiantes
     estudiantes.push(estudiante);
    // TO DO: Retornar el estudiante recientemente creado
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    //TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    var resultado = "";
    estudiantes.forEach(function(estudiante){
      resultado += mostrar(estudiante);
    });
    // Retornar el template de todos los estudiantes
    return resultado;

    /*Este codigo funciona y es básico
    var resultado = "";
    for(var i = 0; i < estudiantes.length; i++){
      resultado += mostrar(estudiantes[i]);
    }
    return resultado;
    */
}



function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    var estudianteBuscar = estudiantes.filter(function (estudiante){
      return estudiante.nombre.toLowerCase() === nombre.toLowerCase();
    });
    // Retornar el objeto del estudiante buscado
    return estudianteBuscar;
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    //(ocupar .toLowerCase() - .toUpperCase())

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var estudianteTecnico = estudiantes.sort(function(a, b) {
      return b.puntosTecnicos - a.puntosTecnicos;
  });
  	return estudianteTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var estudianteHSE = estudiantes.sort(function (a, b) {
      return b.puntosHSE - a.puntosHSE;
  });
  	return estudianteHSE;
}
