// 1 - Criar uma função que recebe uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindromo(string) {
    /* Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente.
     * Source: https://www.soportugues.com.br/secoes/palindromos/ 
     */
    if (string === string.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(isPalindromo('arara'))

// 2 - Criar uma função que recebe um array de inteiros e retorna o índice do maior valor.

function maiorValorValor(arrayInt) {        // Usando For/In
    let maiorValor = 0,
        index

    for (let key in arrayInt) {
        if (arrayInt[key] > maiorValor) {
            maiorValor = arrayInt[key]
            index = key
        }
    }
    return index
}
console.log(maiorValorValor([2, 3, 6, 7, 10, 1]))

// 3 - Criar uma função que recebe um array de inteiros e retorna o índice do menor valor.

function indiceDoMenorValor(arrayInt) {     // Usando For/Of
    let menorValor = Infinity,
        index,
        cont = 0

    for (let value of arrayInt) {
        if (value < menorValor) {
            menorValor = value
            index = cont
        }
        cont++
    }
    return index
}
console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]))

// 4 - Criar uma função que recebe um array de strings e retorna o maior deles.

function maiorNome(arrayNomes) {
    let nomezao = 0,
        nomeGrande

    for (let nome of arrayNomes) {
        if (nome.length > nomezao) {
            nomeGrande = nome
            nomezao = nome.length
        }
    }
    return nomeGrande
}
console.log(maiorNome(['josé', 'lucas', 'nadia', 'fernanda', 'cairo', 'joana']))

// * 5 - Criar uma função que recebe um array de inteiros e retorna o inteiro que mais se repete.

function valorRepetido(arrayInt) {
    let counter,
        counterArray = [],
        maisRepetido = 0

    for (let i = 0; i < arrayInt.length; i += 1) {
        counter = 0
        for (let j = i; j < arrayInt.length; j += 1) {
            if (arrayInt[i] === arrayInt[j]) {
                counter++
                counterArray[i] = counter
            }
        }
        if (counterArray[i] > maisRepetido) {
            maisRepetido = arrayInt[i]
        }
    }
    return maisRepetido
}
console.log(valorRepetido([2, 3, 2, 5, 8, 2, 3]))

// 6 - Criar uma função que recebe um número natural N e retorna o somatório (1 a N).

function naturalNumberSum(n) {
    let naturalNumbers = [],
        sum = 0

    for (let i = 1; i <= n; i += 1) {
        naturalNumbers.push(i)
    }
    for (naturals of naturalNumbers) {
        sum += naturals
    }

    return sum
}
console.log(naturalNumberSum(15))

// 7 - Criar uma função que recebe duas strings e verificar se seus finais coincidem.

function verifyEndingOfString(word, ending) {
    return word.includes(ending, (word.length - ending.length))
}
console.log(verifyEndingOfString('trybe', 'be'))