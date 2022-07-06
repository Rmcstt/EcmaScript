esperarPor = (tempo = 2000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor(2000)
//   .then(() => console.log('executando promise...1'))
//   .then(esperarPor)
//   .then(() => console.log('executando promise...2'))
//   .then(esperarPor)
//   .then(() => console.log('executando promise...3'))
//   .then(esperarPor)

retornarValor = valor => {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function valorRapido() {
  return 20
}

async function executar() {
  // em quanto o "async" deixa o codigo asincrono, o await deixa o codigo sincrono
  let valor = await valorRapido()

  await esperarPor(2000)
  console.log(`async/await...${valor}`)

  await esperarPor(2000)
  console.log(`async/await...${valor + 1} `)

  await esperarPor(2000)
  console.log(`async/await...${valor + 2}`)

  return valor + 3
}

async function execMesmo() {
  const valor = await executar()
  console.log(valor)
}

execMesmo()
