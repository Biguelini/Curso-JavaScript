function fatorar(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorar(numero - 1)
    }
}

console.log(fatorar(5))
