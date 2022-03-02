function classificar(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificar(4, 4, 4))
console.log(classificar(4, 7, 4))
console.log(classificar(2, 3, 4))
