// Aula sobre try, catch e finally

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // se (data == true e não(é uma instancia de Date) {faça isso...}
        throw new TypeError('Formato Invalido, esperando uma instancia de Date')
    }

    if (!data) { // se data !== true, ou seja, não recebeu um argumento para a função.
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        second: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        hours12: false
    })
}

try { // tentativa de execução "perigosa", que pode dar erro.
    console.log(retornaHora('a'))
} catch(e) {
    console.log(e)
    console.log('resolvendo erro... a hora exata é:')
    console.log(retornaHora(new Date()))
} finally {
    console.log('tenha um bom dia')
}