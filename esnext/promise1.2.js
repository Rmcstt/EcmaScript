setTimeout(a => {
  console.log(ab(1, 2)) /// "3"
}, 0)

ab = (x, y) => {
  return x + y
}

setTimeout(() => {
  console.log('carregando...')
  setTimeout(() => {
    console.log('carregando....')
    setTimeout(() => {
      console.log('carregando.....')
      setTimeout(() => {
        console.log(ab(3, 2))
      }, 0)
    }, 0)
  }, 0)
}, 0)

// "WTF kkkkkk" isso resume bem u que seria uma callback dentro de outra callback 🤦🏻‍♂️

// setTimeout ≠ setInterval

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('executando promise...')
      resolve('vishh')
    }, tempo)
  })
}

esperarPor(3000).then(texto => console.log(texto))
