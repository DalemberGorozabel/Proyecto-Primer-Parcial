$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Las contraseñas Coinciden').css('color', 'green');
    } else 
        $('#message').html('Las contraseñas no Coinciden').css('color', 'red');
});

function validarCorreo(){
    let valorCorreo = document.getElementById("correo").value;

    if(!valorCorreo.includes("@hotmail.com")){
        alert("Incluye un signo @ en la dirección de correo electrónico.");
    }

}