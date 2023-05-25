const btn5 = document.querySelector('.tip5')
const btn10 = document.querySelector('.tip10')
const btn15 = document.querySelector('.tip15')
const btn25 = document.querySelector('.tip25')
const btn50 = document.querySelector('.tip50')
const btnCustom = document.querySelector('.tipcustom')

let valor = document.querySelector('#conta')
let quantiidade = document.querySelector('#quantidade')


function calcularPorcentagem(){

    let conta = valor.value
    let pessoa = quantiidade.value

    result = conta + pessoa
    console.log(result)

} 