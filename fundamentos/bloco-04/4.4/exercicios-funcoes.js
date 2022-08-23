// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindromo(string) {
    // Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente.
    if (string === string.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(isPalindromo('arara'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

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

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

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

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

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

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

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

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verifyEndingOfString(word, ending) {
    return word.includes(ending, (word.length - ending.length))
}
console.log(verifyEndingOfString('trybe', 'be'))