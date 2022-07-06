vaiAcontecerOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('vai dar nao kkkk')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

vaiAcontecerOuNao('vai dar', 0.5)
  .then(v => `valor : ${v}`)
  .then(
    v => console.log(v),
    err => console.log(`erro especifico : ${err}`)
  )
  .then(() => console.log('quase fim'))
  .catch(err => console.log(`erro : ${err}`)) // o catch serve para tratar os erros, caso os erros nao sejam tratados pode fechar a aplicação!!!
  .then(() => console.log('fim'))

//normalmente o tratamento de erro é colocado no final !!!
