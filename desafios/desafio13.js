function classificaAluno(nota) {
    let notaArredondada = arredondar(nota)
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}`);
    } else {
        console.log(`Reprovado com nota ${notaArredondada}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(39)
classificaAluno(33)
