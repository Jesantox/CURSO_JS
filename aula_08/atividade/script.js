// transformando o valor em number

// let numero = prompt("Digite um número : ");
// numero = Number(numero);

const numero = Number(prompt("Digite um número : "));

// to guardando na variável a tag que contém o ID 'numero-titulo'
const numeroTitulo = document.getElementById('numero-titulo');

// to guardando na variável a tag que contém o ID 'texto'
const texto = document.getElementById('texto');

// to inserindo o valor de uma variável dentro de uma tag
numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p> Seu número + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p> Raiz Quadrada : ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro : ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN : ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo : ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para cima : ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais : ${numero.toFixed(2)}</p>`;