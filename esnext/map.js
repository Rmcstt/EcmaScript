const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
  [function () {}, 'função'],
  [{}, 'Objeto'],
  [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // função que retorna sse o valor esta ou nao contido no map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size) // função size me mostrara quantos elementos estao dentro do map
chavesVariadas.set(123, 'a') //
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')

console.log(chavesVariadas)

// estrutura chave e valor onde a chave nao pode ser repetida porem o valor sim

/// false
/// [Function (anonymous)] função
/// {} Objeto
/// 123 Numero
/// true
/// false
/// 2
/// Map(4) {
///   [Function (anonymous)] => 'função',
///   {} => 'Objeto',
///   123 => 'b',
///   456 => 'b'
/// }

/*
Map:
É uma coleção que trabalha com pares de chave e valor, ou seja, através de uma chave você encontra um valor.
O Map não permite chaves duplicadas, caso você tente adicionar a mesma chave duas vezes, a segunda irá sobrepor a primeira (a que ja esta la)

Ambas as coleções são interfaces, então para utiliza-las você deve utilizar uma de suas implementações

As implementações mais usadas de Set:
HashSet, TreeSet e LinkedHashSet

As implementações mais usadas de Map:
HashMap, TreeMap e LinkedHashMap

Implementações Hash: não garantem a ordem de inserção, ou seja, se você adicionar um objeto X na segunda posição, nada garante que durante uma iteração ele será o segundo elemento a ser iterado

Implementações Tree: para utilizar você deve implementar a interface Comparable ou Comparator (apenas uma delas). Essa implementação ordena a coleção conforme a sua implementação do método das interfaces acima.

Implementações LinkedHash: garantem a ordem de inserção, ou seja, se você adicionar um objeto X na segunda posição, na hora da iteração ele será o segundo elemento a ser iterado.
*/
