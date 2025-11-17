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

// Visibilidad
function alternarTexto(texto) {
  if (texto.classList.contains("d-none")) {
    texto.classList.remove("d-none");
  } else {
    texto.classList.add("d-none");
  }
}

// Asignar evento a cada imagen
img1.addEventListener("click", function() {
  alternarTexto(texto1);
});

img2.addEventListener("click", function() {
  alternarTexto(texto2);
});

img3.addEventListener("click", function() {
  alternarTexto(texto3);
});

img4.addEventListener("click", function() {
  alternarTexto(texto4);
});

img5.addEventListener("click", function() {
  alternarTexto(texto5);
});

img6.addEventListener("click", function() {
  alternarTexto(texto6);
});