// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: 'A soma total de 1 a 50 é':

let soma = 0;

for (i = 0; i <= 50; i += 1) {
    soma += i;
}
console.log(`A soma total de 1 a 50 é: ${soma}`);

console.log('--------------------------------------');
//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let cont = 0;
for (i = 2; i <= 150; i += 1) {
    if (i % 3 == 0) {
        cont++;
    }
}
if (cont === 50) {
    console.log('mensagem secreta');
}

console.log('--------------------------------------');
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato: "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = Math.floor(Math.random() * 3),
    player2 = Math.floor(Math.random() * 3);

console.log(player1, player2);
// 0 = paper; 1 = scissor; 2 = rock
if (player1 === player2) {
    console.log('A Ties');
} else if (player1 === 0 && player2 === 2 || player1 === 1 && player2 === 0 || player1 === 2 && player2 === 1) {
    console.log('Player 1 won');
} else {
    console.log('Player 2 won');
}

console.log('--------------------------------------');
//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade Imprima no console seguindo o exemplo: "A pessoa é maior de idade". Bônus: Crie a condição utilizando operador ternário.

let idade = Math.floor(Math.random() * 100);

console.log(idade + ' anos');
idade >= 18 ? console.log('A pessoa é maior de idade') : console.log('A pessoa é menor de idade');

console.log('--------------------------------------');
// 5
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.

let idadeCarolzita = Math.floor(Math.random() * 100),
    idadeMurilo = Math.floor(Math.random() * 100),
    idadeBaeta = Math.floor(Math.random() * 100);

if(idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta) {
    console.log('Carolzita é a mais nova');
} else if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
    console.log('Murilo é o mais novo');
} else {
    console.log('Baêta é a mais nova');
}