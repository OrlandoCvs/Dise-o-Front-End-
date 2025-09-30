document.addEventListener('DOMContentLoaded', function () {
    const bienvenidaDiv = document.getElementById('bienvenida');
    
    // Obtener hora actual
    const ahora = new Date();
    const hora = ahora.getHours();
    
    // Determinar saludo según la hora
    let saludo;
    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 19) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    // Formatear fecha
    const opcionesFecha = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

    // Tu nombre
    const nombre = "Orlando Cervantes";

    // Construir mensaje
    const mensaje = `
        ${saludo} 🌞<br>
        Bienvenid@ a mi portafolio personal.<br>
        Hoy es <strong>${fechaFormateada}</strong>.<br>
        ¡Gracias por visitar mi página!
    `;

    // Insertar en el div
    bienvenidaDiv.innerHTML = mensaje;
});