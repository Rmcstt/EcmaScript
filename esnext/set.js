// nao aceita repetição indexada

const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

/// Set(5) { 'vasco', 'sao paulo', 'palmeiras', 'corinthians', 'flamengo' }
/// 5
/// false
/// true
/// false
/// Set(3) { 'raquel', 'lucas', 'julia' }

/*
Set:
É uma coleção que não permite objetos duplicados, para fazer um bom uso do Set é importante lembrar de sobreescrever os métodos equals e hashcode.
As IDEs possuem um recurso que facilita a sobrescrita desses métodos.

Caso você tente adicionar o mesmo objeto duas vezes no Set, o segundo será ignorado e o primeiro (o que ja esta la) será mantido
*/
