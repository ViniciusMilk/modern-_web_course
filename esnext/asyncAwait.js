// Async Await tem o objetivo de simplificar o uso de Promises

const { error } = require('console')
const http = require('http')

/** 
 * @param {String} letra Letra da turma
 * @return Promise
 */
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado+=dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

const obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
}

/**
 * 
 * @param {Array} alunos Array de objetos
 * @return Array com os valores do atributo nome
 */
const getNomeAlunos = alunos => alunos.map(aluno => aluno.nome)

obterAlunos()
    .then(getNomeAlunos)
    .then(console.log)
    .catch(error => console.log(error.message))