const imagenesContendor = document.getElementById("contenedor-ilustraciones");
const ampliarIlustracion = document.getElementById("ampliar-ilustracion");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const cerrar = document.getElementById("cerrar");

async function cargarIlustraciones() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/RamaSamauwu/RamaSamauwu.github.io/main/src/Ilustraciones.json"
    );
    if (response.ok) {
      const data = await response.json();
      mostrarIlustraciones(data.ilustraciones);
    } else {
      console.error("Error al cargar el JSON de ilustraciones.");
    }
  } catch (error) {
    console.error("Error al cargar el JSON de ilustraciones:", error);
  }
}

function mostrarIlustraciones(ilustraciones) {
  for (let i = 0; i < ilustraciones.length; i++) {
    const ilust = ilustraciones[i];
    const tarjetaIMG = document.createElement("div");
    tarjetaIMG.classList.add("card-img");
    const imagen = document.createElement("img");
    imagen.src = ilust.imagen;
    imagen.alt = ilust.nombre;

    imagen.addEventListener("click", function () {
      mostrarImagenAmpliada(ilust.imagen, ilust.nombre);
    });

    tarjetaIMG.appendChild(imagen);
    imagenesContendor.appendChild(tarjetaIMG);
  }
}

function mostrarImagenAmpliada(src, alt) {
  imagenAmpliada.src = src;
  imagenAmpliada.alt = alt;
  ampliarIlustracion.style.display = "flex";
}

cerrar.addEventListener("click", function () {
  ampliarIlustracion.style.display = "none";
});

cargarIlustraciones();
