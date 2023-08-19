const imagenesContendor = document.getElementById("contenedor-ilustraciones");
const ampliarIlustracion = document.getElementById("ampliar-ilustracion");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const cerrar = document.getElementById("cerrar");

const xhr = new XMLHttpRequest();
xhr.open("GET", "ilustraciones.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    for (let i = 0; i < data.ilustraciones.length; i++) {
      const ilust = data.ilustraciones[i];
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
};
xhr.send();

function mostrarImagenAmpliada(src, alt) {
  imagenAmpliada.src = src;
  imagenAmpliada.alt = alt;
  ampliarIlustracion.style.display = "flex";
}

cerrar.addEventListener("click", function () {
  ampliarIlustracion.style.display = "none";
});
