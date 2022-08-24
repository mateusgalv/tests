function randomNumberGenerator(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createArray(size = 5) {
    let array = []

    for (let i = 0; i < size; i += 1) {
        array.push(randomNumberGenerator())
    }

    return array
}

// 1 - Ordenar e imprimir um array em ordem crescente
function crescentOrder(arrSize) {
    let array = createArray(arrSize)

    return array.sort(/*Função de comparação*/) // sort() ordena de acordo com unicode
}

// 2 - Ordenar e imprimir um array em ordem decrescente
function decrescentOrder(arrSize) {
    let array = createArray(arrSize),
        arr = [],
        sortedArray = array.sort(/*Função de comparação*/) // sort() ordena de acordo com unicode

    for (let value of array) {
        arr[sortedArray.length - 1] = value
    }
    return arr
}

// 3 - Utilizar um dos arrays ordenados e imprimir a multiplicar de acordo com as regras:
// I)  Multiplicar pelo valor seguinte do array
// II) Se não houver sucessor, multiplicar por 2
function multiply() {
    let array = crescentOrder(),
        newArray = []

    for (let i = 0; i < array.length; i += 1) {
        if((i+1) < array.length) {
            newArray[i] = array[i] * array[i+1]
        } else {
            newArray[i] = array[i] * 2
        }
    }
    return newArray
}