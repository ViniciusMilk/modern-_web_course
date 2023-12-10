// template String
const marca = 'Apple'
console.log(`Produtos da ${marca} são caros.`)

// Destructuring
const [l,e, ...tras] = "Mengao"
console.log(l,e,tras)

const [x, ,y, ,z] = [1,2,3,4,5]
console.log(x,y,z)

const prod = {
    name: 'Iphone13',
    value: 3645.89,
    category: 'Smartphone'
}

const {name, value} = prod
console.log(`Valor do ${name}: R$ ${value}`)