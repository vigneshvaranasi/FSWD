let form = document.querySelector('form')
let output = document.querySelector('.out')
let fullOutput = document.querySelector('.output')

let add = document.querySelector('#add')
let sub = document.querySelector('#sub')
let mul = document.querySelector('#mul')
let div = document.querySelector('#div')


let firstInput = document.querySelector('#first')
let secondInput = document.querySelector('#second')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    fullOutput.style.display = 'block'
})
add.addEventListener('click',()=>{
    output.textContent = Number(firstInput.value) + Number(secondInput.value)
})
sub.addEventListener('click',()=>{
    output.textContent = Number(firstInput.value) - Number(secondInput.value)
})
mul.addEventListener('click',()=>{
    output.textContent = Number(firstInput.value) * Number(secondInput.value)
})
div.addEventListener('click',()=>{
    output.textContent = Number(firstInput.value) / Number(secondInput.value)
})
