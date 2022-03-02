function jurosSimples(capitalInicial, taxaEmPorcentagem, tempo) {
    return capitalInicial + capitalInicial * (taxaEmPorcentagem/100) * tempo
}

function jurosCompostos(capitalInicial, taxaEmPorcentagem, tempo) {
    return capitalInicial * (1 + (taxaEmPorcentagem/100)) ** tempo
}

console.log(jurosSimples(100, 20, 2))
console.log(jurosCompostos(100, 20, 2))
