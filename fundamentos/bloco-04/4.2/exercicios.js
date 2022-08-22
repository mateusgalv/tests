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

function percorrerArray(numbers) {      // exercicio 1

  for (let number of numbers) {
    console.log(number)
  }
}
function somarValores(numbers) {        // exercicio 2
  let num = new Number

  for (let number of numbers) {
    num += number
  }
  console.log(num)
}
function mediaAritmetica(numbers) {     // exercicio 3
  let num = new Number,
    media = new Number

  for (number of numbers) {
    num += number
  }

  media = num / numbers.length
  console.log(media)
}
function imprimirValor(numbers) {       // exercicio 4
  let num = new Number,
    media = new Number

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
function maiorValor(numbers) {          // exercicio 5 
  let maiorNumero = new Number

  for (let number of numbers) {
    if (number > maiorNumero) {
      maiorNumero = number
    }
  }

  console.log(maiorNumero)
}
function quantosImpares(numbers) {      // exercicio 6 
  let impar = new Number

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
function menorValor(numbers) {          // exercicio 7
  let menor = Infinity

  for (let number of numbers) {
    if (number < menor) {
      menor = number
    }
  }
  console.log(menor)
}
function criarArray() {                 // exercicio 8
  let array = new Array

  for (let i = 1; i < 25; i++) {
    array[i - 1] = (Math.random() * 100).toFixed(0)
  }
  console.log(array)

  return array
}
function dividirPorDois(array) {        // exercicio 9
  for (let number of array) {
    console.log(number / 2)
  }
}