// tagged template - processa (fatia) o template dentro de uma função

tag = (partes, ...valores) => {
  console.log(partes)
  console.log(valores)
  return ' outra string'
}

const aluno = 'gui'
const condicao = 'aprovado'

console.log(tag`${aluno} esta ${condicao}`)
