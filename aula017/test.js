let num1 = 1
let num2 = '1'

console.log (typeof num1)
console.log (typeof num2)

if (num2 === Number) {
    console.log('correto')
} else {
    num2 = Number(num2)
    console.log('a varíavel foi convetida.')
}

console.log (typeof num1)
console.log (typeof num2)