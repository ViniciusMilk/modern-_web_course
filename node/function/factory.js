// factory simples

function criarPessoa(name, lastName) {
    return{
        name,
        lastName
    }
}

console.log(criarPessoa('Marcos', 'Leite'))