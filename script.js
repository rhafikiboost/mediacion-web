document.addEventListener("DOMContentLoaded", function() {
    console.log("Sitio web profesional actualizado con bloque dinámico de la Quinta Región.");

    // Rotador automático de ciudades de la Quinta Región
    const ciudades = [
        "Valparaíso", 
        "Viña del Mar", 
        "Concón", 
        "Quilpué", 
        "Villa Alemana"
    ];
    
    let index = 0;
    const elementoCiudad = document.getElementById("ciudad-rotativa");

    if (elementoCiudad) {
        setInterval(() => {
            elementoCiudad.style.opacity = 0; // Efecto desvanecido
            setTimeout(() => {
                index = (index + 1) % ciudades.length;
                elementoCiudad.textContent = ciudades[index];
                elementoCiudad.style.opacity = 1;
            }, 300);
        }, 2500); // Cambia cada 2.5 segundos
    }

    // Registro de clics en botones de WhatsApp
    const botonesWhatsApp = document.querySelectorAll("a[href*='wa.me']");
    botonesWhatsApp.forEach(boton => {
        boton.addEventListener("click", function() {
            console.log("Conversión registrada: Usuario hizo clic en contacto.");
        });
    });
});