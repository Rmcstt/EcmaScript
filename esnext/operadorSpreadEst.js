// operador ... rest(juntar)/ spread(espalhar)
//usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // esta espalhando para os outros objetos
const clone2 = { genero: 'femininno', ...funcionario }

console.log(clone)

// usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafael']

console.log(grupoFinal)

// operador rest
soma = (...valores) => {
  // o parametro 'valores' fora criado aqui
  return valores.reduce((acumulador, atual) => acumulador + atual)
}

console.log(soma(1, 2, 3, 4, 50, 10, 23, 43))
