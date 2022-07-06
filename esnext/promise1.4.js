gerarNumerosEntre = (min, max, tempo) => {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max * min + 1
      const aleatorio = parseInt(Math.random() * fator) * min
      resolve(aleatorio)
    }, tempo)
  })
}

gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 500)
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(v => console.log(v, 'cod3r')) //".then(console.log)" ou ".then(v => console.log(v))", o segundo é bom para concatenar!!!

  .then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
  })

///////// minha mega kkk /////////

joga2 = () => {
  sorte2 = [1, 2, 3, 4, 5, 6]
  let resultadoMega2 = sorte2.map(e => {
    return (e = Math.floor(Math.random() * (61 - 1) + 1))
  })
  console.log(resultadoMega2, 'meu codigo')
}
setTimeout(a => {
  joga2()
}, 500)
