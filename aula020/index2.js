const dataAtual = new Date(); // criando a data atual
console.log(dataAtual.toString())

// data expecifica com dateNumber
// resultado desejado: 9 de março de 2023 às 13:10 (data em que eu começei a aprender HTML e CSS)
const dataNumber = new Date(2023, 2, 9, 13, 10 /* nessa parte viriam os segundos e ms, mas eu posso omitir*/ );
console.log(dataNumber.toString())

// data expecifica com dateString
// resultado desejado: 26 de março de 2023 às 20:25 (data em que eu começei a aprender JavaScript)
const dataString = new Date('2023-03-26 20:25'/* nessa parte viriam os segundos e ms, mas eu posso omitir*/);
console.log(dataString.toString())

