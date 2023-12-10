const fs = require('fs')
const path = __dirname +'/file.json'

// sincrono...
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(path, 'utf8', (error, conteudo)=>{
    const cfg = (JSON.parse(conteudo))
    console.log(`${cfg.db.host}:${cfg.db.port}`)
})

// // leitura de diretório
// fs.readdir(__dirname, 'utf-8', (error, conteudo) => {
//     console.log(conteudo)
// })