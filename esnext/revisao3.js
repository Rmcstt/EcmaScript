// Object.keys = pega todas a chaves do objeto

// ES8: Object.values/ Objects.entries

// object.values pega todos os valores do objeto

// Object.entries me dara a chave e valor do objeto

const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj)) ///[ 1, 2, 3, 4 ]
console.log(Object.keys(obj)) ///[ 'a', 'b', 'c', 'd' ]
console.log(Object.entries(obj)) ///[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// melhorias na notação literal
const nome = 'carla'

const pessoa = {
  nome, // atributo com criação simplificada
  ola() {
    // função com criação simplificada
    return 'oi gente'
  }
}

console.log(pessoa.nome, pessoa.ola()) /// carka oi gente

// class

class animal {
  // class é uma função
  jump() {
    return 'pular'
  }
}
class cachorro extends animal {
  // herança por prototipo
  falar() {
    return 'au au!!'
  }
}

console.log(new cachorro().jump(), new cachorro().falar())
// usando a função construtora e criar objetos a partir de uma class  "new "
/// pular au au !!
