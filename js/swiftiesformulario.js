const botonEnviar = document.getElementById("btn-enviar");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const pais = document.getElementById("pais");
const email = document.getElementById("email");
const comentario = document.getElementById("comentario");
const formulario = document.getElementById("formulario");
const imagen = document.getElementById("pulseras");

// Validar email
function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.value);
}

// Validar que un campo no esté vacío
function campoVacio(valor) {
    return valor.trim() === "";
}

// Validar edad 
function validarEdad(valor) {
    const num = parseInt(valor, 10);
    return !isNaN(num) && num >= 18 && num <= 50;
}

// Evento del botón
botonEnviar.addEventListener('click', function () {
    // Validar que todos los campos obligatorios estén completos
    if (campoVacio(nombre.value) ||
        campoVacio(edad.value) ||
        campoVacio(pais.value) ||
        campoVacio(email.value) ||
        campoVacio(comentario.value)) {
        alert("Por favor, completá todos los campos.");
        return;
    }

    // Validar que la edad sea mayor o igual a 18
    const edadNum = parseInt(edad.value, 10);
    if (edadNum < 18) {
        alert("Debés ser mayor de 18 años para unirte al club.");
        return;
    }

    // Validar email
    if (!validarEmail()) {
        alert("Tu email no es válido. Debe tener un @ y un dominio.");
        return;
    }

    // Si todo está OK: mostrar modal y ocultar formulario
    const modal = new bootstrap.Modal(document.getElementById('emailModal'));
    modal.show();

    formulario.style.display = 'none';
    imagen.style.display = 'block';
});