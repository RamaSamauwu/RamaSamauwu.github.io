const imagenesContenedor = document.getElementById("contenedor-landing");

function redirectToIlustraciones() {
  window.location.href = "/src/ilustraciones.html";
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

async function cargarIlustraciones() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/RamaSamauwu/RamaSamauwu.github.io/main/src/Ilustraciones.json"
    );
    if (response.ok) {
      const ilustracionesJSON = await response.json();
      mostrarImagenesAleatorias(ilustracionesJSON);
    } else {
      console.error("Error al cargar el JSON de ilustraciones.");
    }
  } catch (error) {
    console.error("Error al cargar el JSON de ilustraciones:", error);
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

cargarIlustraciones();

let actual = 0;
function puntos(n) {
  const ptn = document.getElementsByClassName("punto");
  for (let i = 0; i < ptn.length; i++) {
    if (ptn[i].classList.contains("activo")) {
      ptn[i].classList.remove("activo");
      break;
    }
  }
  ptn[n].classList.add("activo");
}

function mostrar(n) {
  const imagenes = document.getElementsByClassName("imagen");
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].classList.contains("actual")) {
      imagenes[i].classList.remove("actual");
      break;
    }
  }
  actual = n;
  imagenes[n].classList.add("actual");
  puntos(n);
}

function siguiente() {
  actual = (actual + 1) % 4;
  mostrar(actual);
}

function anterior() {
  actual = (actual - 1 + 4) % 4;
  mostrar(actual);
}

const velocidad = 5000;
const play = setInterval(siguiente, velocidad);
