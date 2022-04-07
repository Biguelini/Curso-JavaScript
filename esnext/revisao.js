// variaveis
{
    var a = 2
    let b =3
    // console.log(b)
}
// console.log(a)

// template string
const produto = 'iPad'
// console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = "Cod3r"
// console.log(l,e,tras)

const [x,,y] = [1,2,3]
// console.log(x,y)

const {idade,nome} = {nome:'ana', idade:12}
// console.log(idade,nome)


// arrow function
const soma = (a,b)=>a+b
// console.log(soma(2,3))

const lexico1 = ()=>console.log(this===exports) 
// lexico1()

// default
function log(texto = "node"){
    console.log(texto)
}
// log()
// log('Eu sou mais forte')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n=>total+=n)
    return total
}
// console.log(total(1,2,3,4,3,4,2,10,4325))


const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


const nomePessoa = 'João'
const pessoa = {
    nomePessoa,
    ola(){
        return('OI')
    }
}
// console.log(pessoa.nomePessoa, pessoa.ola())



// class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'auau'
    }
}
// console.log(new Cachorro().falar())