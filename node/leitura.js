const fs = require('fs')
const caminho = __dirname+'/arquivo.json'
// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    if(!err){
        const config = JSON.parse(conteudo)
        console.log(config.db.host)
    }
})


const config = require('./arquivo.json')
console.log(config.db)