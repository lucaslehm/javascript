// let hora = 20

// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia')
// } else if(hora >= 12 && hora <=17) {
//     console.log('Boa Tarde')
// } else {
//     console.log('Boa Noite')
// }

let n1 = 1
let n2 = 2

console.log(n2)

let resultado = n1 === n2 // false

if (resultado === true) {
    console.log('Oi')
} else {
    n2 = 1
    resultado = n1 === n2
    console.log('convertido')
}

console.log(n2)

if (resultado === true) {
    console.log('Oi')
} else {
    n2 = 1
    console.log('convertido')
}