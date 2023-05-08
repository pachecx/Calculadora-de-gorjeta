const form = document.querySelector('.form')
const scrren1 = document.querySelector('.card')
const scrren2 = document.querySelector('.card2')

const numberOne = document.querySelector('um')
const numberTwo = document.querySelector('dois')

const btn = document.querySelector('.btn')
const btnTry = document.querySelector('.btnTry')

form.onsubmit = (event) => {
    event.preventDefault()

    const one = numberOne.value
    const two = numberTwo.value

    const result = soma(one, two)
    //const msg = `O resultado é ${result}`

    console.log(soma)

}

function soma(one, two){
    return Number(one) + Number(two)


}
