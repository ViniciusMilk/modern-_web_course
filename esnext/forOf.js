// Novo recurso para iteração "For Of"

// Diferente do For In que itera sobre o indeces dos elementos, o For Of itera sobre os valores dos elementos

// Percorrendo String
for (let letra of "object") {
    console.log(letra)
}

// Percorrendo Array
const array = ["Ana", "Marcos", 'Maria']
for (let nome of array) {
    console.log(nome)
}

// Também é possível iterar sobre estrutura Map
// Map já atribuindo elementos a chaves
const chavesVariadas = new Map([
    ['Map', {visto: true}],
    ['Set', {visto: true}],
    ['Promise', {visto: false}]
])
for (let assunto of chavesVariadas) {
    console.log(assunto)
}
// Percorrendo as chaves de uma estrutura Map
for (let assunto of chavesVariadas.keys()) {
    console.log(assunto)
}
// Percorrendo os valores de uma estrutura Map
for (let assunto of chavesVariadas.values()) {
    console.log(assunto)
}
// Percorrendo as chaves e valores separadamente através de entries de uma estrutura Map
for (let [ch, vl] of chavesVariadas.entries()) {
    console.log(ch, vl)
}

// Também é possível iterar sobre estrutura Set
const nomes = new Set(array)
for (let nome of nomes) {
    console.log(nome)
}