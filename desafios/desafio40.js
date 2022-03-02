let vetor = [1, 2, 3, 4, 5]

function multiplicarVetor(vetor, multiplicador) {
    let vetorResultado = []
    vetor.forEach((elemento) => {
        vetorResultado.push(elemento * multiplicador)
    })

    return vetorResultado
}

console.log(multiplicarVetor(vetor, 3))
