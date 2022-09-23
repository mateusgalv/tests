// Selecione o exercício que deseja executar utilizando
// o comando exercício(numero_do_exercicio) abaixo

exercicio()

function exercicio(numeroDoExercicio) { // seletor
    switch (numeroDoExercicio) {
        case 1:
            operacoesBasicas()
            break
        case 2:
            maiorNumero()
            break
        case 3:
            maiorNumeroDeTres()
            break
        case 4:
            positivoOuNegativo()
            break
        case 5:
            isTriangle()
            break
        case 6:
            xadrez()
            break
        case 7:
            converterEmConceito()
            break
        case 8:
            anyEven()
            break
        case 9:
            anyOdd()
            break
        case 10:
            lucro()
            break
        case 11:
            salarioLiquido()
            break
        default:
            console.log('Exercício inexistente')
    }
}

function operacoesBasicas() {           // exercicio 01
    let a = Math.floor(Math.random() * 100),
        b = Math.floor(Math.random() * 100)

    console.log(`A = ${a}; B = ${b}`)

    console.log('sum = ' + (a + b))
    console.log('subraction = ' + (a - b))
    console.log('multiplication = ' + (a * b))
    console.log('division = ' + (a / b))
    console.log('power = ' + (a ** b))
    console.log('module = ' + (a % b))
}
function maiorNumero() {                // exercicio 02
    let a = Math.floor(Math.random() * (100 - (-100)) + (-100)),
        b = Math.floor(Math.random() * (100 - (-100)) + (-100))

    console.log(`A = ${a}; B = ${b}`)
    if (a > b) {
        console.log('A é maior que B')
    } else if (b > a) {
        console.log('B é maior que A')
    } else {
        console.log('A = B')
    }
}
function maiorNumeroDeTres() {          // exercicio 03
    let a = Math.floor(Math.random() * (100 - (-100)) + (-100)),
        b = Math.floor(Math.random() * (100 - (-100)) + (-100)),
        c = Math.floor(Math.random() * (100 - (-100)) + (-100))

    console.log(`A = ${a}; B = ${b}; C = ${c}`)
    if (a > b && a > c) {
        console.log('A é maior que B e C')
    } else if (b > a && b > c) {
        console.log('B é maior que A e C')
    } else if (c > a && c > b) {
        console.log('C é maior que A e B')
    } else {
        console.log('A = B = C')
    }
}
function positivoOuNegativo() {         // exercicio 04
    let num = Math.floor(Math.random() * (100 - (-100)) + (-100))

    console.log(`Number = ${num}`)
    if (num > 0) {
        console.log(`the number ${num} is positive`)
    } else if (num < 0) {
        console.log(`the number ${num} is negative`)
    } else {
        console.log('zero')
    }
}
function isTriangle() {                 // exercicio 05
    let alpha = Math.floor(Math.random() * 360),
        beta = Math.floor(Math.random() * 360),
        theta = Math.floor(Math.random() * 360)

    console.log(`alpha = ${alpha}°; beta = ${beta}°; theta = ${theta}°`)
    if (alpha + beta > theta && alpha + theta > beta && beta + theta > alpha) {
        console.log('is a triangle')
    } else {
        console.log('is not a triangle')
    }
}
function xadrez() {                     // exercicio 06
    let chessPiece = 'Knight'
    chess = chessPiece.toLowerCase()

    if (chess == 'rei' || chess == 'king') {
        console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez')
    } else if (chess == 'rainha' || chess == 'queen') {
        console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser')
    } else if (chess == 'bispo' || chess == 'bishop') {
        console.log('Move-se na diagonal, quantas casas quiser')
    } else if (chess == 'torre' || chess == 'tower') {
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser')
    } else if (chess == 'cavalo' || chess == 'knight') {
        console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante')
    } else if (chess == 'peao' || chess == 'pawn') {
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas')
    } else {
        console.log('invalid')
    }
}
function converterEmConceito() {        // exercicio 07
    let nota = Math.floor(Math.random() * 101)

    console.log(`nota = ${nota}%`)
    if (nota < 0 || nota > 100) {
        console.log('ERROR')
    } else if (nota >= 90) {
        console.log('conceito A')
    } else if (nota >= 80) {
        console.log('conceito B')
    } else if (nota >= 70) {
        console.log('conceito C')
    } else if (nota >= 60) {
        console.log('conceito D')
    } else if (nota >= 50) {
        console.log('conceito E')
    } else {
        console.log('conceito F')
    }
}
function anyEven() {                    // exercicio 08
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const c = Math.floor(Math.random() * 100)

    console.log(`A = ${a}, B = ${b}, C = ${c}`)
    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        console.log('at least one is even')
    } else {
        console.log('none is even')
    }
}
function anyOdd() {                     // exercicio 09
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const c = Math.floor(Math.random() * 100)

    console.log(`A = ${a}, B = ${b}, C = ${c}`)
    if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
        console.log('at least one is odd')
    } else {
        console.log('none is odd')
    }
}
function lucro() {                      // exercicio 10
    const precoCompra = Math.floor(Math.random() * 9999)
    const precoVenda = precoCompra + Math.floor(Math.random() * 9999)

    custoTotal = precoCompra + 0.2*precoCompra      // add imposto
    lucroTotal = (precoVenda - custoTotal)*1000     // por mil unidades

    if(lucroTotal > 0) {
        console.log(`Lucro = R$ ${lucroTotal.toFixed(2)}`)
    } else if (lucroTotal < 0) {
        console.log(`Prejuizo = R$ ${lucroTotal.toFixed(2)*(-1)}`)
    } else {
        console.log('Feijoada')
    }
}
function salarioLiquido() {             // exercicio 11
    const salarioMinimo = 1212.00
    const tetoSalarial = 35462.22
    let inss, salarioBase, salarioBruto, impostoRenda
    
    salarioBruto = Math.floor(Math.random() * (tetoSalarial - salarioMinimo) ) + salarioMinimo
    console.log(`Salário Bruto = R$ ${salarioBruto.toFixed(2)}`)
    
    if (salarioBruto < 1556.94) {
        inss = 0.08*salarioBruto
    } else if (salarioBruto < 2594.92) {
        inss = 0.09*salarioBruto
    } else if (salarioBruto < 5189.82) {
        inss = 0.11*salarioBruto
    } else {
        inss = 570.88
    }
    console.log(`INSS = R$ ${inss.toFixed(2)}`)

    salarioBase = salarioBruto - inss

    if (salarioBase > 4664.68) {
        impostoRenda = (salarioBase*0.275 - 869.36) 
    } else if (salarioBase > 3751.06) {
        impostoRenda = (salarioBase*0.225 - 636.13)
    } else if (salarioBase > 2826.66) {
        impostoRenda = (salarioBase*0.15 - 354.80)
    } else if (salarioBase > 1903.99) {
        impostoRenda = (salarioBase*0.075 - 142.80)
    } else {
        impostoRenda = 0
    }
    console.log(`IR = R$ ${impostoRenda.toFixed(2)}`)

    salarioLiq = salarioBase - impostoRenda
    console.log(`Salário Líquido = R$ ${salarioLiq.toFixed(2)}`)
}
