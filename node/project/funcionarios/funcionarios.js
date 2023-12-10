const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// const obj = json => json.parse(json)

const fMinSalario = (func,funcAtual) => func.salario < funcAtual.salario ? func : funcAtual


const mulheres = func => func.filter(func => func.genero === 'F')

const chineses = func => func.filter(func => func.pais === 'China')

axios.get(url).then(response => {
    const funcionarios = response.data

    
    console.log(mulheres (chineses (funcionarios)).reduce(fMinSalario))
})