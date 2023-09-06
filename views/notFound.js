function notFoundView(){
    var view = 
    `
        <div class="container-notfound">
            <img src="../wwwroot/images/notFound.svg" class="h-50" alt=""> 
            <div class="text-notfound"> Nenhuma página encontrada, tente novamente mais tarde... </div>
        </div>
    `

    return exibeConteudoModulo(view);
}