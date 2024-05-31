let form = document.querySelector('form')
let output = document.querySelector('.out')
let fullOutput = document.querySelector('.output')

let firstInput = form.children[0]
let secondInput = form.children[1]
let btn = form.children[2]

form.addEventListener('submit',(event)=>{
    // Stop Page reload
    event.preventDefault()

    // Get the values of the input fields
    let firstValue = Number(firstInput.value)
    let secondValue = Number(secondInput.value)

    // Perform the operation
    let result = firstValue + secondValue
    output.textContent = result

    fullOutput.style.display = 'block'
})