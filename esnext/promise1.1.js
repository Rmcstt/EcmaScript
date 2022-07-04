// aprofundando em promise

let a = 1
console.log(a)

// function primeiroElemento(array) {
//   return valor[0]
// }

primeiroElemento = arrayOuString => arrayOuString[0]
letraMaiuscula = letra => letra.toUpperCase()

let p = new Promise(function (resolve) {
  resolve(['renato', 'mota', 'costa'])
})
  .then(primeiroElemento) // pega o resultado
  .then(primeiroElemento) // e o resto vai continuando o  tratamento de que foi retornado
  .then(letraMaiuscula)
  .then(console.log)
