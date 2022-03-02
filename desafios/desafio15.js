function verificaSeAnoEBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(verificaSeAnoEBissexto(0))
console.log(verificaSeAnoEBissexto(4))
console.log(verificaSeAnoEBissexto(100))
console.log(verificaSeAnoEBissexto(400))
console.log(verificaSeAnoEBissexto(800))
console.log(verificaSeAnoEBissexto(2020))
console.log(verificaSeAnoEBissexto(2021))