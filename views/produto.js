function produtoView(){
    var view = 
    `
        <div id="produtoGrid" class="datagrid-container"></div>
    `

    exibeConteudoModulo(view);

   var grid = new gridjs.Grid({
        search: true,
        sort: true,
        pagination: true,
        fixedHeader: true,
        resizable: true,
        columns: ['name', 'model', 'consumables'],
        server: {
          url: 'https://swapi.dev/api/vehicles',
          then: data => data.results.map(movie => [movie.name, movie.model, movie.consumables])
        }, 
        language: traducoes
      }).render(document.getElementById("produtoGrid"));

    var arrayBotao = [
      { 
        icon: "fa-sync",
        text: "",
        onclick: "abreLoadPanel",
        main: false,
        title: "Atualizar Lista"
      },
      { 
        icon: "fa-plus",
        text: "Adicionar Produto",
        onclick: "abreLoadPanel",
        main: true,
        title: "Adicionar Produto"
      },
    ];

    grid.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));

    return configuraToolbarGrid("Cadastro de Produtos", "fa-box-open", arrayBotao);
}