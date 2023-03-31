let numero = prompt('Digite um número');
numero = Number(numero);
const numeroTitulo = document.querySelector('span#numero-titulo');
const texto = document.querySelector('div#texto');



numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p><strong>${numero}</strong> é inteiro:  <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casa decimais: <strong>${numero.toFixed(2)}</strong></p>`;