$(document).ready(function(){
  cardapio.eventos.inicio();
})

let cardapio = {};

cardapio.eventos = {

  inicio: () => {
      cardapio.metodos.obterItensCardapio();
  }

}

cardapio.metodos = {

  // obtem a lista de itens do cardapio
  obterItensCardapio: (categoria = 'cakes') => {

      var filtro = MENU[categoria];
      console.log(filtro);

      $("#itensCardapio").html(" ");

      $.each(filtro, (i, e) => {

          let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
          .replace(/\${nome}/g, e.nome)
          .replace(/\${preço}/g, e.preço)

          $("#itensCardapio").append(temp)

      })

      // Remove o ativo de todas as categorias
      $(".container-menu a").removeClass('active');

      // Define a classe ativo na categoria selecionada
      let ativoClass = categoria === 'cakes' ? 'ativo' : '';
      $(`#menu-${categoria}`).addClass(ativoClass);

  },

}

cardapio.templates = {

  item: `
      <div class="col-3">
            <div class="card card-item">
              <div class="img-produto">
                <img src="\${img}" />
              </div>
              <h5 class="title-produto text-center mt-4">
                <h5>\${nome}</h5> 
              </h5>
              <p class="price-produto text-center"> 
              <p>R$ \${preço}</p>
              <div class="add-carrinho">
                <span class="btn-menos"><i class="ph ph-minus"></i></span>
                <span class="add-numero-itens">0</span>
                <span class="btn-mais"><i class="ph ph-plus"></i></span>
                <span class="btn btn-add"><i class="ph ph-shopping-cart"></i></span>
              </div>
            </div>
  `

}

console.log("App")
