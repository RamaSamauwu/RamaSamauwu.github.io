const imagenesContenedor = document.getElementById("contenedor-landing");

function redirectToIlustraciones() {
  window.location.href = "ilustraciones.html";
}

const imagenes = imagenesContenedor.getElementsByClassName("imagen");
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", redirectToIlustraciones);
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function mostrarImagenesAleatorias(data) {
  const ilustracionesAleatorias = [...data.ilustraciones];
  shuffleArray(ilustracionesAleatorias);

  const imagenes = imagenesContenedor.getElementsByClassName("imagen");
  for (let i = 0; i < 4; i++) {
    const imagenActual = imagenes[i].getElementsByTagName("img")[0];
    imagenActual.src = ilustracionesAleatorias[i].imagen;
    imagenActual.alt = ilustracionesAleatorias[i].nombre;
  }
}

// Petición HTTP para cargar el JSON
const xhr = new XMLHttpRequest();
xhr.open("GET", "ilustraciones.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    const ilustracionesJSON = JSON.parse(xhr.responseText);
    mostrarImagenesAleatorias(ilustracionesJSON);
  } else {
    console.error("Error al cargar el JSON de ilustraciones.");
  }
};
xhr.send();

var actual = 0;
function puntos(n) {
  var ptn = document.getElementsByClassName("punto");
  for (i = 0; i < ptn.length; i++) {
    if (ptn[i].className.includes("activo")) {
      ptn[i].className = ptn[i].className.replace("activo", "");
      break;
    }
  }
  ptn[n].className += " activo";
}
function mostrar(n) {
  var imagenes = document.getElementsByClassName("imagen");
  for (i = 0; i < imagenes.length; i++) {
    if (imagenes[i].className.includes("actual")) {
      imagenes[i].className = imagenes[i].className.replace("actual", "");
      break;
    }
  }
  actual = n;
  imagenes[n].className += " actual";
  puntos(n);
}

function siguiente() {
  actual++;
  if (actual > 3) {
    actual = 0;
  }
  mostrar(actual);
}
function anterior() {
  actual--;
  if (actual < 0) {
    actual = 3;
  }
  mostrar(actual);
}

var velocidad = 5000;
var play = setInterval("siguiente()", velocidad);
