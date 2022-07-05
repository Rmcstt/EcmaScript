esperarPor = (tempo = 2000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('executando promise...')
      resolve('vishh')
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
