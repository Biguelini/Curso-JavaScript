function trocarValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        console.log('Vetor A: ' + vetorA)
        console.log('Vetor B: ' + vetorB)
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocarValores(vetorA, vetorB)
