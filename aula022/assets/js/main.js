function globalScoup() {
    const data = new Date()
    let diaSemana = data.getDay()
    let numMes = data.getMonth()
    function diaSamanaTexto(diaSemana) {
        let diaSemanaText;
        switch (diaSemana) {
            case 0:
                diaSemanaText = 'Domingo'
                return diaSemanaText
            case 1:
                diaSemanaText = 'Segunda-Feira'
                return diaSemanaText
            case 2:
                diaSemanaText = 'Terça-Feira'
                return diaSemanaText
            case 3:
                diaSemanaText = 'Quarta-Feira'
                return diaSemanaText
            case 4:
                diaSemanaText = 'Quinta-Feira'
                return diaSemanaText
            case 5:
                diaSemanaText = 'Sexta=Feira'
                return diaSemanaText
            case 6:
                diaSemanaText = 'Sábado'
                return diaSemanaText
        }
    }
    function mesTexto(numMes) {
        let mesText;
        switch (numMes) {
            case 0:
                mesText = 'Janeiro'
                return mesText
            case 1:
                mesText = 'Fevereiro'
                return mesText
            case 2:
                mesText = 'Março'
                return mesText
            case 3:
                mesText = 'Abril'
                return mesText
            case 4:
                mesText = 'Maio'
                return mesText
            case 5:
                mesText = 'Junho'
                return mesText
            case 6:
                mesText = 'Julho'
                return mesText
            case 7:
                mesText = 'Agosto'
                return mesText
            case 8:
                mesText = 'Setembro'
                return mesText
            case 9:
                mesText = 'Outubro'
                return mesText
            case 10:
                mesText = 'Novembro'
                return mesText
            case 11:
                mesText = 'Dezembro'
                return mesText
        }
    }
    function zeroEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }
    let diaSemanaText = diaSamanaTexto(diaSemana)
    let mesText = mesTexto(numMes)
    let dia = data.getDate()
    let ano = data.getFullYear()
    let horas = data.getHours()
    let minut = data.getMinutes()
    const resultado = document.querySelector('.titulo')
    resultado.innerHTML = `${diaSemanaText}, ${dia} de ${mesText} de ${ano} - ${zeroEsquerda(horas)}:${zeroEsquerda(minut)}`
}
globalScoup()