var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    var listaEstudiantes = estudiantes;
    return listaEstudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var estudiante = {
      nombre: prompt("Nombre de la Estudiante:"),
      puntosTecnicos: prompt("Puntos técnicos:"),
      puntosHSE: prompt("Puntos de Habilidades Socio-Emocionales:")
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
    for(var i = 0; i < estudiantes.length; i++){
      var resultado = [""];
      resultado += "<div class='row'>";
      resultado += "<div class='col m12'>";
      resultado += "<div class='card blue-grey darken-1'>";
      resultado += "<div class='card-content white-text'>";
      resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
      resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTecnicos + "</p>";
      resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHSE + "</p>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
// Retornar el template de todos los estudiantes
      return resultado;
    }
}



function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    if(nombre == estudiantes.nombre){

    }
    // Retornar el objeto del estudiante buscado

    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes.topTecnico.sort(function(a, b) {
    return a + b;
  });
  	return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes.puntosHSE.sort(function(a, b) {
    return a + b;
  });
  	return estudiantes;
}
