document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio web de Eva Osorio cargado correctamente con la paleta de colores corporativa.");

    // Registro opcional de clics en botones de WhatsApp para métricas
    const botonesWhatsApp = document.querySelectorAll("a[href*='wa.me']");
    botonesWhatsApp.forEach(boton => {
        boton.addEventListener("click", function() {
            console.log("Conversión registrada: Usuario hizo clic en botón de contacto por WhatsApp.");
        });
    });
});