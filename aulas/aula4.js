const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Lápis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.30}',
]
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)