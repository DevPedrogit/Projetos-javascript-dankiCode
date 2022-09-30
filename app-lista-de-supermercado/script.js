var items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=> {
    var nomeProduto = document.querySelector('input[name=nome-produto]').value;
    var valorProduto = document.querySelector('input[name=valor-produto]').value;

    items.push({
        Nome: nomeProduto,
        Valor: valorProduto
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = '';

    items.map((val)=> {
        soma += Number(val.Valor);
        listaProdutos.innerHTML += `
        
        <div class="lista-produto-single">
            <h3>`+val.Nome+`</h3>
            <span class="price-produto">R$ `+val.Valor+`</span>
        </div>
        
        
        `;
    });
     soma = soma.toFixed(2);
     document.querySelector('input[name=nome-produto]').value = '';
     document.querySelector('input[name=valor-produto]').value = '';

     let elementoSoma = document.querySelector('.soma-produto h1 span');
     elementoSoma.innerHTML = 'R$ ' + soma; 
});

// Resetar tudo
document.querySelector('button[name=limpar]').addEventListener('click', ()=> {
    items = [];

    document.querySelector('.lista-produtos').innerHTML = '';
    document.querySelector('.soma-produto h1 span').innerHTML = 'R$ 00.00';

})