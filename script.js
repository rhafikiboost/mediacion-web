document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio web de Eva Osorio cargado correctamente con la paleta de colores corporativa.");

    // Registro opcional de clics en botones de WhatsApp para métricas
    const botonesWhatsApp = document.querySelectorAll("a[href*='wa.me']");
    botonesWhatsApp.forEach(boton => {
        boton.addEventListener("click", function() {
            console.log("Conversión registrada: Usuario hizo clic en botón de contacto por WhatsApp.");
        });
    });

    // Envío del formulario mediante AJAX con Formspree
    const form = document.getElementById('formAgendamiento');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = document.getElementById('btnEnviar');
            btn.disabled = true;
            btn.textContent = "Enviando solicitud...";

            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.style.display = 'none';
                document.getElementById('mensajeExito').style.display = 'block';
                form.reset();
                btn.disabled = false;
                btn.textContent = "ENVIAR SOLICITUD";
            } else {
                alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
                btn.disabled = false;
                btn.textContent = "ENVIAR SOLICITUD";
            }
        });
    }

    // Restablecer el formulario y ocultar el mensaje de éxito al cerrar el modal
    const modalAgendamiento = document.getElementById('modalAgendamiento');
    if (modalAgendamiento) {
        modalAgendamiento.addEventListener('hidden.bs.modal', function () {
            const form = document.getElementById('formAgendamiento');
            const mensajeExito = document.getElementById('mensajeExito');
            const btn = document.getElementById('btnEnviar');

            if (form && mensajeExito) {
                form.reset();                             // Limpia los campos
                form.style.display = 'block';             // Vuelve a mostrar el formulario
                mensajeExito.style.display = 'none';      // Oculta el mensaje de éxito
            }
            if (btn) {
                btn.disabled = false;
                btn.textContent = "ENVIAR SOLICITUD";
            }
        });
    }
});