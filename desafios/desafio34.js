function verificarOMaiorEOMenorNumero(vetorDeNumeros) {
    let maior
    let menor
    for (let i = 0; i < vetorDeNumeros.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetorDeNumeros[i]
            menor = vetorDeNumeros[i]
        } else {
            if (vetorDeNumeros[i] > maior) {
                maior = vetorDeNumeros[i]
            }
            if (vetorDeNumeros[i] < menor) {
                menor = vetorDeNumeros[i]
            }
        }
    }
    return [maior, menor]
}

vetorDeNumeros = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(verificarOMaiorEOMenorNumero(vetorDeNumeros))
