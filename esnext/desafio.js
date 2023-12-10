// Desafio de ler arquivo usando Promise
const fs = require('fs')
const path = __dirname + '/dados.txt'
const path2 = __dirname + '/dados2.txt'

const readFile = path => {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(path, 'utf-8')
            resolve(content)
        } catch (error) {
            reject(error)
        }
    })
}

const loadFiles = async () => {
    const dados = await readFile(path)
    const dados2 = await readFile(path2)
    return dados +'\n'+ dados2
}

loadFiles()
    .then(content => content.split('\n'))
    .then(console.log)
    .catch(error => console.log(error.message))