/**
 * Estrutura de dados Map.
 * Forma de acesso => product.get('key').
 */
const product = new Map()
product.set('iPhone 11', {new: false})
product.set('Laptop Samsung',{new: true})

// formas de acesso
console.log(product.get('iPhone 11'))
console.log(product.get('iPhone 11').new)


// Map já atribuindo elementos a chaves
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// Está contido dentro da estrutura.
console.log(chavesVariadas.has(123))
// Deleta o elemento
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
// Tamanho da estrutura.
console.log(chavesVariadas.size)