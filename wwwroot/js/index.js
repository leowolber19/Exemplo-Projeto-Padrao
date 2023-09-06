function realizaLogin(){
    var email = document.getElementById("EMAIL_TEXT").value;
    var senha = document.getElementById("SENHA_TEXT").value;

    if(document.getElementById("EMAIL_TEXT").value != '' && document.getElementById("SENHA_TEXT").value != '') {
        abreLoadPanel();
        return validaLoginController(email, senha);
    } else {
        return notifica("É necessário preencher os campos de login e senha.", false);
    }
}