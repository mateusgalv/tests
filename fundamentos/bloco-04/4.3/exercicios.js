function factorial() {
    let intToFactor = Math.floor(Math.random() * (10 + 1)),
        result = 1

    for (let i = intToFactor; i > 0; i--) {
        result = result * i
    }
    console.log(`${intToFactor}! = ${result}`)
}
function reverseString() {
    let word = 'banana',
        wordArray = word.split(''),
        wordReversed = new Array(),
        result = new String

    for (let i = 0; i < wordArray.length; i++) {
        wordReversed[wordArray.length - (i + 1)] = wordArray[i]
    }

    result = wordReversed.join('')
    console.log(`The reverse of ${word} is ${result}`)

}
function maiorMenor() {
    let array = ['java', 'javascript', 'python', 'html', 'css'],
        maior = new String
    menor = new String

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maior.length) {
            maior = array[i]
        }
        if (-(array[i].length) < menor.length) {
            menor = array[i]
        }
    }
    console.log(`Maior = ${maior}`)
    console.log(`Menor = ${menor}`)
}
function biggestPrime() {
    let top = 20        //valor maximo -> random

    primos = new Array  //array dos numeros primos
    num = new Array     //array com os números entre 0 e TOP
    isPrimo = new Boolean
    primos.push(2)

    for (let i = 3; i <= top; i++) {    // 2 = first prime
        isPrimo = true
        console.log('i='+i)
        for(let j = 2; j <= i; j++) {
            console.log('j='+j)
            if(i % j == 0) {    
                console.log('ifou')
                // NÃO É PRIMO
                isPrimo = false
            }
        }
        if(isPrimo === false) {
            primos.push(i)
        }
    }
    console.log(primos)
}
biggestPrime()