// Selecione o exercício que deseja executar utilizando
// o comando exercício(numero_do_exercicio) na linha 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
exercicio()

function exercicio(numeroDoExercicio) { // seletor
  switch (numeroDoExercicio) {
    case 1:
      percorrerArray(numbers)
      break
    case 2:
      somarValores(numbers)
      break
    case 3:
      mediaAritmetica(numbers)
      break
    case 4:
      imprimirValor(numbers)
      break
    case 5:
      maiorValor(numbers)
      break
    case 6:
      quantosImpares(numbers)
      break
    case 7:
      menorValor(numbers)
      break
    case 8:
      criarArray()
      break
    case 9:
      let array = criarArray()
      dividirPorDois(array)
      break
    default:
      console.log('Exercício inexistente')
  }
}

// exercício 1: percorrer e imprimir os valores de um array 
function percorrerArray(numbers) {

  for (let number of numbers) {
    console.log(number)
  }
}

// exercício 2: somar e imprimir valores de um arrazy
function somarValores(numbers) {
  let num = new Number

  for (let number of numbers) {
    num += number
  }
  console.log(num)
}

// exercício 3: calcular e imprimir a média aritmética dos valores de um array
function mediaAritmetica(numbers) {
  let num = 0,
    media

  for (number of numbers) {
    num += number
  }

  media = num / numbers.length
  console.log(media)
}

// exercício 4: imprimir mensagem a partir de uma condicional
function imprimirValor(numbers) {
  let num = 0,
    media = o

  for (number of numbers) {
    num += number
  }

  media = num / numbers.length

  if (media > 20) {
    console.log('valor maior que 20')
  } else {
    console.log('valor menos ou igual a 20')
  }
}

// exercício 5: imprimir maior valor de um array
function maiorValor(numbers) {
  let maiorNumero = 0

  for (let number of numbers) {
    if (number > maiorNumero) {
      maiorNumero = number
    }
  }

  console.log(maiorNumero)
}

// exercício 6: contar valores impares de um array
function quantosImpares(numbers) {
  let impar = 0

  for (let number of numbers) {
    if (number % 2 != 0) {
      impar++
    }
  }
  if (impar > 0) {
    console.log(impar)
  } else {
    console.log('nenhum valor ímpar encontrado')
  }
}

// exercício 7: imprimir menor valor de um array
function menorValor(numbers) {
  let menor = Infinity

  for (let number of numbers) {
    if (number < menor) {
      menor = number
    }
  }
  console.log(menor)
}

// exercício 8: criar um array
function criarArray() {
  let array = []

  for (let i = 1; i < 25; i++) {
    array[i - 1] = (Math.random() * 100).toFixed(0)
  }
  console.log(array)

  return array
}

// exercício 9: dividir os valores dos elementos (exercício 8) por dois
function dividirPorDois(array) {
  for (let number of array) {
    console.log(number / 2)
  }
}