let maiscaro;
let i;

let produtos = [
    {nome: "notebook", preco: 3500},
    {nome: "mouse", preco: 200},
    {nome: "teclado", preco: 250},
    {nome: "fone", preco: 220}
];

maiscaro = produtos[0];

for (i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maiscaro.preco) {
        maiscaro = produtos[i];
    }
}

console.log("Produto mais caro:", maiscaro.nome);
