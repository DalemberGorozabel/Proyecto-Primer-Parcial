function validarCédula(){
    let valorCorreo = document.getElementById("cédula").value;

    if(!valorCorreo.includes("letras")){
        alert("No se permite ingresar letras en este campo");
    }
}