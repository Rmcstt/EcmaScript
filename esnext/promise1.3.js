// destructuring == desepacotar kkkkkk

gerandoNumerosEntre = (min, max) => {
  if (min > max) {
    let [max, min] = [min, max]
  }
  return new Promise(resolve => {
    const factor = max - min + 1
    const aleatorio = parseInt(Math.random() * factor) + min
    resolve(aleatorio)
  })
}

gerandoNumerosEntre(10, 30)
  .then(num => num * 10)
  .then(numX10 => `o numero gerado foi ${numX10}`) // (`string ${}`) == (f`string {}`)
  .then(console.log) // jeito diferente para chamar console.log !!!
