vaiAcontecerOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject('vai dar nao kkkk')
    } else {
      resolve(valor)
    }
  })
}

vaiAcontecerOuNao('vai dar', 0.3)
  .then(v => `valor : ${v}`)
  .then(console.log)
  .catch(err => console.log(`erro : ${err}`)) // o catch serve para tratar os erros, caso os erros nao sejam tratados pode fechar a aplicação!!!
  .then(() => console.log('fim'))
