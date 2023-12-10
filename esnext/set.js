/**
 * Estrutura de dados Set.
 * Forma de acesso => nomeDaEstrutura.
 */
const products = new Set()

products.add('Celular Andorid')
products.add('LapTop').add('iPad').add('iPhone').add('MacBook')
products.add('LapTop')

// Forma de acesso
console.log(products)

// Tamanho da estrutura
console.log(products.size)
// Está contido dentro da estrutura
console.log(products.has('laptop'))
console.log(products.has('LapTop'))
// Deleta elemento da estrutura
products.delete('iPhone')
console.log(products.has('iPhone'))


// Estrutura de dados Set a partir de um array
const nomes = ['Marcos','Lucas','Maria', 'Flavia','Maria','João','Ana']
const nomesSet = new Set(nomes)
console.log(nomesSet)