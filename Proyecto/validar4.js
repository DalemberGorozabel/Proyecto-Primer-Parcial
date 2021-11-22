function validarCédula(){
    let valorCedula = document.getElementById("Contraseña").value;

    if(!valoCedula.includes("letras")){
        alert("No se permite ingresar letras en este campo");
    }

}

$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Las contraseñas Coinciden').css('color', 'green');
    } else 
        $('#message').html('Las contraseñas no Coinciden').css('color', 'red');
});