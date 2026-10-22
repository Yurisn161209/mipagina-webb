/* =====================================
   SELECCIONAR CLASE
===================================== */
function seleccionarClase(nombreClase) {
    // Buscar el elemento de clase
    const clase = document.getElementById("clase");
    // Seleccionar automáticamente
    clase.value = nombreClase;
    // Llevar al formulario
    document.getElementById("cita").scrollIntoView({
        behavior: "smooth"
    });
}
/* =====================================
   AGREGAR IMÁGENES
===================================== */

        
    

/* =====================================
   FORMULARIO DE CITA
===================================== */
const formulario =
    document.getElementById("formularioCita");
const mensaje =
    document.getElementById("mensajeConfirmacion");
formulario.addEventListener("submit", function(evento) {
    // Evitar que la página se recargue
    evento.preventDefault();
    const nombre =
        document.getElementById("nombre").value;
    const clase =
        document.getElementById("clase").value;
    const fecha =
        document.getElementById("fecha").value;
    const hora =
        document.getElementById("hora").value;
    // Mostrar confirmación
    mensaje.innerHTML = `
        <div class="confirmacion">
            <h3>✓ ¡Cita solicitada!</h3>
            <p>
                Gracias, <strong>${nombre}</strong>.
            </p>
            <p>
                Clase: <strong>${clase}</strong>
            </p>
            <p>
                Fecha: <strong>${fecha}</strong>
            </p>
            <p>
                Hora: <strong>${hora}</strong>
            </p>
        </div>
    `;
    // Limpiar formulario
    formulario.reset();
});