const btn5 = document.querySelector('.tip5')
const btn10 = document.querySelector('.tip10')
const btn15 = document.querySelector('.tip15')
const btn25 = document.querySelector('.tip25')
const btn50 = document.querySelector('.tip50')
const btnCustom = document.querySelector('.tipcustom')

let valor = document.querySelector('#conta')
let quantidade = document.querySelector('#quantidade')

const btnCalcular = document.querySelector('.calcular')
const btnLimpar = document.querySelector('.limpar')

let valorPagar = document.querySelector('.valuetotal')

function porcentagem(){
    
}

function valorTotal(){

    conta = valor.value 
    pessoa = quantidade.value
    
    result = Number(conta) / Number(pessoa)

    valorPagar.textContent = ` $${result}`
}

function limparValores(){
    valorPagar.textContent = `$ 0.0`
}

btnCalcular.addEventListener('click', function(){
    btnCalcular.classList.add('hide')
    btnLimpar.classList.remove('hide')

    valorTotal()
})

btnLimpar.addEventListener('click', function(){
    btnLimpar.classList.add('hide')
    btnCalcular.classList.remove('hide')

    limparValores()
})
