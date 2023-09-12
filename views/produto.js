function produtoView(){
    var view = 
    `
        <div id="produtoGrid" class="datagrid-container"></div>
    `

    exibeConteudoModulo(view);

    new gridjs.Grid({
        columns: ['Nome', 'E-mail', 'Telefone'],
        search: true,
        sort: true,
        pagination: true,
        fixedHeader: true,
        resizable: true,
        data: () => {
          return new Promise(resolve => {
            setTimeout(() =>
              resolve([
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
                ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
                ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
              ]), 500);
          });
        },
        language: traducoes
      }).render(document.getElementById("produtoGrid"));

    return configuraToolbarGrid("Cadastro de Produtos", "fa-box-open");
}