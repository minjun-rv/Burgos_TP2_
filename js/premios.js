const img1 = document.getElementById("img1");
const texto1 = document.getElementById("texto1");

const img2 = document.getElementById("img2");
const texto2 = document.getElementById("texto2");

const img3 = document.getElementById("img3");
const texto3 = document.getElementById("texto3");

const img4 = document.getElementById("img4");
const texto4 = document.getElementById("texto4");

const img5 = document.getElementById("img5");
const texto5 = document.getElementById("texto5");

const img6 = document.getElementById("img6");
const texto6 = document.getElementById("texto6");

// Función para mostrar texto y programar el regreso 
function mostrarTextoYVolver(imagen, texto) {
  // Mostrar texto y ocultar img
  imagen.classList.add("d-none");
  texto.classList.remove("d-none");

  // Programar regreso de la img
  setTimeout(function() {
    imagen.classList.remove("d-none");
    texto.classList.add("d-none");
  }, 20000);
}

// img y click
img1.addEventListener("click", function() {
  mostrarTextoYVolver(img1, texto1);
});

img2.addEventListener("click", function() {
  mostrarTextoYVolver(img2, texto2);
});

img3.addEventListener("click", function() {
  mostrarTextoYVolver(img3, texto3);
});

img4.addEventListener("click", function() {
  mostrarTextoYVolver(img4, texto4);
});

img5.addEventListener("click", function() {
  mostrarTextoYVolver(img5, texto5);
});

img6.addEventListener("click", function() {
  mostrarTextoYVolver(img6, texto6);
});