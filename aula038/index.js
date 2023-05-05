// CallBack

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}


const userName = 'Lucas'
const userMiddleName = 'Marques'
const userLastName = 'Lehm'

function sayName(callback) {
    setTimeout(function () {
        console.log(userName)
        if (callback) callback()
    }, rand())
}
function sayMiddleName(callback) {
    setTimeout(function () {
        console.log(userMiddleName)
        if (callback) callback()
    }, rand())

}
function sayLastName(callback) {
    setTimeout(function () {
        console.log(userLastName)
        if (callback) callback()
    }, rand())

}

sayName(function () {
    sayMiddleName(function() {
        sayLastName(function() {
            console.log('Seja bem vindo, Lucas Marques Lehm!')
        })
    })
})
