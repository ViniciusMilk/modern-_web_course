const fs = require('fs')

const Pessoa = {
    name: 'Marcos',
    lastName: 'Leite',
    age: 24, 
    job: 'student'
}

fs.writeFile(__dirname + '/generated.json', JSON.stringify(Pessoa), error => {
    console.log(error || 'Arquivo salvo com sucesso!')
})