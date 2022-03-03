$(document).ready(function(){

    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")
    })
})


let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado);
}