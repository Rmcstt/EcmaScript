const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}
// recurso do ES8
// tem o objetivo de simplificar o uso de promise

// nao esquecer de sempre marcar a função com a palavra async, a palavra awayt so ira funcionar na função com a palavra async!!!

let obterAlunos = async () => {
  const tA = await getTurma('A')
  const tB = await getTurma('B')
  const tC = await getTurma('C')
  return [].concat(tA, tB, tC)
} // quando tem uma função async, sempre retornara um objeto async function

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))
