function produtoView(){
    var view = 
    `
        <div id="produtoGrid" class="datagrid-container"></div>
    `

    exibeConteudoModulo(view);

   var grid = new gridjs.Grid({
        columns: ['Nome', 'E-mail', 'Telefone'],
        search: true,
        sort: true,
        pagination: true,
        fixedHeader: true,
        resizable: true,
        columns: [{
          id: 'name',
          name: 'Name'
        }, {
            id: 'email',
            name: 'Email'
        }, {
            id: 'phoneNumber',
            name: 'Phone Number'
        }],
        data: [
          { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
          { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
        ],
        // data: () => {
        //   return new Promise(resolve => {
        //     setTimeout(() =>
        //       resolve([
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //         ['John', 'john@example.com', '(353) 01 222 3333'],
        //         ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        //         ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
        //         ['Nisen', 'nis900@gmail.com',   '313 333 1923'],
        //       ]), 500);
        //   });
        // },
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