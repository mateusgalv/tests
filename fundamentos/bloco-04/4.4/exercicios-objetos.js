let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

// 1 - Imprimir mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Bem-vinda, ' + info.personagem)

// * 2 - Inserir uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprimir o objeto.

info.recorrente = 'Sim'
console.log(info)

// 3 - Fazer um for/in que mostre todas as chaves do objeto.

for (chaves in info) {
    console.log(chaves)
}

// 4 - Fazer um for/in que mostre todos os valores das chaves do objeto.

for (chaves in info) {
    console.log(info[chaves])
}

// 5 - Definir um segundo objeto com a mesma estrutura e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. E Imprimir os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (chaves in info, info2) {
    console.log(info[chaves], info2[chaves])
}

console.log('---------------------------------------------')

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [{
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
    }],
};

// * 6 - Acessar as chaves: nome, sobrenome e titulo e imprimir no seguinte formato: "O livro favorito de 'nome' 'sobrenome' se chama 'livro'".

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`)

// * 7 - Adicionar um novo livro favorito na chave livrosFavoritos.

leitor.livrosFavoritos[1] = { 
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowlink',
    editora: 'Rocco'
}

// * 8 - Acessar e imprimir as chaves: nome e livrosFavoritos no seguinte formato: "'nome' tem 'qnt. livros favoritos' livros favoritos".

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos: ${leitor.livrosFavoritos[0].titulo} e ${leitor.livrosFavoritos[1].titulo}`)