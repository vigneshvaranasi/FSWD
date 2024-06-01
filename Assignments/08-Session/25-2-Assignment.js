let form = document.querySelector('form')
let fullOutput = document.querySelector('#output')


function factors(number){
    let factors = []
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i)
        }
    }
    console.log('factors: ', factors);
    return factors
}
form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let number = Number(form.children[1].value)
    console.log('number: ', number);

    let result = factors(number)

    fullOutput.style.display = 'block'
    fullOutput.textContent = `Factors of ${number} are: ${result}`
})