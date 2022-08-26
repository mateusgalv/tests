// Gerar linha com conteúdo alinhado à esquerda
function createLine(n) {
    let lineArray = []

    for (let i = 0; i < n; i += 1) {
        lineArray.push('*')
    }
    return lineArray.join('')
}

// Gerar linha com conteúdo alinhado à direita
function createLineRightAligned(n) {
    let lineArray = []

    for (let i = 1; i <= n; i += 1) {
        if (i < n) {
            lineArray.push(' ')
        } else {
            lineArray.push('*')
        }
    }
    return lineArray.join('')
}

// Gerar linha com conteúdo centralizado
function createCenteredLine(n) {
    let lineArray = []

    for (let i = 1; i <= n; i += 1) {
        if (i < Math.ceil(n / 2)) {
            lineArray.push(' ')
        } else if (i === Math.ceil(n / 2)) {
            lineArray.push('*')
        } else {
            lineArray.push(' ')
        }
    }
    return lineArray.join('')
}

// Fazer quadrado
function square(n) {

    for (let i = 0; i < n; i += 1) {
        console.log(createLine(n))
    }
}

// Fazer triangulo retângulo
function rightTriangle(n) {

    for (let i = 1; i <= n; i += 1) {
        console.log(createLine(i))
    }
}

// Fazer triângulo retângulo virado para o outro lado
function rightTriangleRightAligned(n) {

    for (let i = 0; i < n; i += 1) {
        console.log(createLineRightAligned(n - i) + createLine(i))
    }
}

// Pirâmide de base n
function piramide(n) {
    for (let i = 0; i < n; i += 1) {
        console.log(createCenteredLine(n))
    }
}
piramide(5)