for (let letra of 'renato') {
  console.log(letra) // aprendi isso no mesmo dia em que aprendi a mesma função em python [for letra in renato print (letra) ] :)
}
console.log()

const carros = ['gol', 'celta', 'palio']

for (let i in carros) {
  console.log(i)
}

for (let nomes of carros) {
  console.log(nomes)
}

const carrosMap = new Map([
  ['gol', { pilotado: true }],
  ['celta', { pilotado: true }],
  ['palio', { pilotado: false }]
])

for (let carros of carrosMap) {
  console.log(carros)
}

for (let chave of carrosMap.keys()) {
  console.log(chave)
}

for (let valor of carrosMap.values()) {
  console.log(valor)
}

for (let [ch, vl] of carrosMap.entries()) {
  console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}
