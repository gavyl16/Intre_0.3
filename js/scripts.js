function enviarConsulta() {
    const telefonoOficina = "34623262118"; // Sustituye por tu número de psicología
    const nombre = document.getElementById('nombreCompleto').value;
    const mensajeConsulta = document.getElementById('consulta').value;
    
    if (nombre === "" || mensajeConsulta === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    //Estructuramos el mensaje para que te llegue ordenado
    const textoFinal = 
        "Hola, mi nombre es " + nombre + ".\n" +
        "Deseo realizar la siguiente consulta psicológica:\n" + 
        mensajeConsulta;

    //Convertimos el texto a formato URL
    const url = "https://wa.me/" + telefonoOficina + "?text=" + encodeURIComponent(textoFinal);
    
    window.open(url, '_blank');
}