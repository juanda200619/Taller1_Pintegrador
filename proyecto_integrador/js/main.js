// Funcion para desplegar texto al pulsar Ver Mas en avances.html
function toggleContent(element) {
            let extra = element.parentElement.previousElementSibling.querySelector('.extra-content');

            if (extra.style.display === "none") {
                extra.style.display = "block";
                element.innerText = "Ver menos";
            } else {
                extra.style.display = "none";
                element.innerText = "Ver más";
            }
        }

// Cambio de color de fondo en avances.html
let colorActivo = false;

function cambiarColor() {
    if (colorActivo) {
        document.body.style.backgroundColor = "white";
        colorActivo = false;
    } else {
        document.body.style.backgroundColor = "#e3f2fd";
        colorActivo = true;
    }
}

// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formContacto");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let valido = true;

            // Campos
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Errores
            const errorNombre = document.getElementById("errorNombre");
            const errorCorreo = document.getElementById("errorCorreo");
            const errorMensaje = document.getElementById("errorMensaje");

            // Limpiar errores
            errorNombre.textContent = "";
            errorCorreo.textContent = "";
            errorMensaje.textContent = "";

            // Validar nombre
            if (nombre === "") {
                errorNombre.textContent = "El nombre es obligatorio";
                valido = false;
            }

            // Validar correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correo === "") {
                errorCorreo.textContent = "El correo es obligatorio";
                valido = false;
            } else if (!regexCorreo.test(correo)) {
                errorCorreo.textContent = "Correo no válido";
                valido = false;
            }

            // Validar mensaje
            if (mensaje === "") {
                errorMensaje.textContent = "El mensaje es obligatorio";
                valido = false;
            }

            // Si todo está bien
            if (valido) {
                M.toast({ html: "Formulario enviado correctamente ✅" });
                form.reset();
            }
        });
    }
});