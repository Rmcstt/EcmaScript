//arrow function
const soma = (a, b) => a + b // função arrow é uma função anonima e o return é explicito por conta que esta sem corpo
console.log(soma(2, 3))

const soma2 = (c, d) => {
  // exemplo de arrow com corpo onde o return nao é explicito !!!
  return c + d
}
console.log(soma2(3, 4))

// arrow function com conceito this

const lexico1 = () => console.log(this === exports)

//this em uma função "arrow" é um this que esta associado a uma local onde a função foi escrita !!!

const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default

function log(texto = 'node') {
  console.log(texto)
}
log()
log('sou mais forte')

//operador rest (agrupar)
function total(...numeros) {
  let total = 0
  numeros.forEach(n => (total += n))
  return total
}
console.log(total(2, 3, 4, 5))
