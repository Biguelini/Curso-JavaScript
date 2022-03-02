function formatarDecimalParaReais(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatarDecimalParaReais(3)
formatarDecimalParaReais(2.3)
