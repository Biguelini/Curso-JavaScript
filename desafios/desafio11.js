function bhaskara(a, b, c) {
    let resultados = []
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) {
        return 'O delta é negativo'
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    resultados.push(x1)
    resultados.push(x2)
    return `Os resultados são {${resultados[0]}, ${resultados[1]}}`
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
