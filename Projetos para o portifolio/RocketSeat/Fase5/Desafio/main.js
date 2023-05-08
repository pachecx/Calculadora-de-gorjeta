const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const phrasesRandom = document.querySelector('.phrasesRandom')
const txt = [
     'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
     'Siga os bons e aprenda com eles.',
     'Não importa o tamanho da montanha, ela não pode tapar o sol.',
     'Não há que ser forte, Há que ser flexível.',
     'Não compense na ira o que lhe falta na razão.'
]


const msgRandom = txt [Math.round(Math.random() * 5)]
const btnclose = document.querySelector('.btn-close')
const btnTry = document.querySelector('.btnTry')




btnclose.onclick = () => {
    card1.classList.add('hide')
    card2.classList.remove('hide')
    
   card2.querySelector('h1').innerText = msgRandom
}

btnTry.addEventListener('click', function(){
    card1.classList.toggle('hide')
    card2.classList.toggle('hide')
}) 


