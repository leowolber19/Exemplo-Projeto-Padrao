document.addEventListener("DOMContentLoaded", function() {
    notFoundView();
})

function sairSistema(){
    return window.location.href = "../index.html";
}

function abreMenuLateral() {
    var element = document.getElementsByClassName("menu-lateral")[0].style.width
    
    for (let index = 0; index < document.querySelectorAll(".text-menu").length; index++) {
        document.querySelectorAll(".text-menu")[index].style.display = element == "5%" ? "block" : "none";
    }

    return document.getElementsByClassName("menu-lateral")[0].style.width = element == "5%" ? "18%" : "5%";
}

function exibeConteudoModulo(content) {
    return document.getElementsByClassName("conteudo-page")[0].innerHTML = content;
}