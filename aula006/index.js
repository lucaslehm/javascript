// Nome Sobrenome tem idade anos, pesa peso kg
// tem a altura de altura e seu IMC é de IMC
// Nome nasceu em Ano de Nascimento

//peso / altura ao quadrado

const nome ='Lucas';
const sobrenome = 'Lehm';
const idade = 21;
const peso = 86;
const altura = 1.72;
let imc;
imc = 86 / (altura**2);
let anoNasc;
anoNasc = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem a altura de', altura, 'e seu IMC é de', imc);
console.log(`${nome} nasceu em ${anoNasc}`);
