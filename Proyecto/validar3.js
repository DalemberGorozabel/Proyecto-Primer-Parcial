function validarCorreo(){
    let valorCorreo = document.getElementById("correo").value;

    if(!valorCorreo.includes("@hotmail.com")){
        alert("Incluye un signo @ en la dirección de correo electrónico.");
    }

}