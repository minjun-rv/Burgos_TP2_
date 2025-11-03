const botonEnviar = document.getElementById("btn-enviar");
const email = document.getElementById("exampleFormControlInput1");
const comentario = document.getElementById("exampleFormControlTextarea1");
const formulario = document.getElementById("formulario");
const imagen = document.getElementById("pulseras");


// Inicio
botonEnviar.addEventListener('click', function () {
    // Parte 1
    if (email.value === "" || comentario.value === "") {
        alert("Completa ambos campos.");
        return;
    }


    // Parte 2
    if (!validarEmail()) {
        alert("Tu email no es válido, utiliza @.");
        return;
    }


    // Uso de jQuery
    $('#emailModal').modal('show');
    formulario.style.display = 'none';
    imagen.style.display = 'block';
});


// Función de validación de email
function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.value);
}
