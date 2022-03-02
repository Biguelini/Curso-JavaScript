function verificaSeNumeroEMultiploDeTres(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaSeNumeroEMultiploDeTres(4))
console.log(verificaSeNumeroEMultiploDeTres(5))
console.log(verificaSeNumeroEMultiploDeTres(234))
