function contarNumerosNegativos(vetorDeNumeros) {
    let qtdNegativos = 0
    for (let i = 0; i < vetorDeNumeros.length; i++) {
        if (vetorDeNumeros[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetorDeNumeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contarNumerosNegativos(vetorDeNumeros))
