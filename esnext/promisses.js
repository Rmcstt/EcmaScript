function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'joia')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  // posso chamar quantas "then" eu quiser para gerar um encadeamento de operações em cima daquilo que eu retorno
  .catch(e => console.log(e)) // catchforma para tratar um erro na promisse é com reject e catch
