{
  var a = 2
  let b = 3
  console.log(b) // let nao é possivel acessar de fora pois tem o esccopo de blocoo
}

console.log(a) // var nao tem escopo de bloco

// template string (``)

const produto = 'ipad'
console.log(`${produto} é caro`) // a crase me possibilita quebrar linha

//destructuring
const [l, e, ...tras] = 'codar' // string

console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // array
console.log(x, y)

const { idade: i, nome } = { nome: 'ana', idade: 9 } //objetos
console.log(i, nome)
