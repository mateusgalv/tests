const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// Adicionar a classe 'tech' ao elemento 'li' quando clicado - apenas um elemento com a classe tech pode existir

document.addEventListener('click', isValidTarget)

function removeTech(event, targets) {
  for (let i = 0; i < targets.length; i += 1) {
    if (event !== targets[i]) {
      targets[i].classList.remove('tech')
    }
  }
}
function addTech(event, targets) {
  removeTech(event, targets)
  event.target.className = 'tech'
  input.value = ''
}
function isValidTarget(event) {
  let targets = document.getElementsByTagName('li')
  for (let i = 0; i < targets.length; i += 1) {
    if (event.target === targets[i]) {
      addTech(event, targets)
    }
  }
}

// Criar uma função que altera o texto do elemento com a classe tech a partir da caixa de texto

document.addEventListener('keyup', writeOnTech)

function writeOnTech() {
  // console.log('keyup')
  let writeOn = document.querySelector('.tech')
  // console.log(writeOn)

  writeOn.innerText = input.value
}

// Criar uma função que redirecione o usuário ao clicar duas vezes em "Meu top 3"

myWebpage.addEventListener('dblclick', redirect)

function redirect() {
  window.location.href = "https://www.google.com.br"
}

// Criar uma função que altere a cor do "Meu top 3" ao passar o mouse por cima

myWebpage.addEventListener('mouseover', changeColor)
myWebpage.addEventListener('mouseleave', changeColorBack)

function changeColor(event) {
  event.target.style.color = 'blue'
}
function changeColorBack(event) {
  event.target.style.color = "white"
}