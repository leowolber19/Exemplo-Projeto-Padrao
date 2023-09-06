function produtoView(){
    var view = 
    `
        <div id="produtoGrid" class="datagrid-container"></div>
    `

    exibeConteudoModulo(view);

    return new gridjs.Grid({
        columns: ['Nome', 'E-mail', 'Telefone'],
        search: true,
        sort: true,
        pagination: true,
        fixedHeader: true,
        data: () => {
          return new Promise(resolve => {
            setTimeout(() =>
              resolve([
                ['John', 'john@example.com', '(14) 99314-5697'],
                ['Mark', 'mark@gmail.com', '(14) 45778-4578 ']
              ]), 500);
          });
        }
      }).render(document.getElementById("produtoGrid"));
}