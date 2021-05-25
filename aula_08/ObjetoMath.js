let num1 = 9.54879;

// arredondar o valor para baixo
let num2 = Math.floor(num1);
console.log(num2);

// arredondar o valor para cima
num2 = Math.ceil(num1);
console.log(num2);

// arredondar o valor para o mais próximo
// acima da metade (ou na metade) vai pro próximo valor inteiro
// abaixo da metade vai pro valor inteiro anterior
num2 = Math.round(num1);
console.log(num2);

// -----------------------------------------------------------------------------
num1 = 20;
num2 = 70;

// Pegar o Maior valor
console.log(Math.max(num1, num2));

// Pegar o Menor valor
console.log(Math.min(num1, num2));

// ------------------------------Números Aleatórios-----------------------------

// Gerar números aleatórios | entre 0 e 1
console.log(Math.random());

// Gerar números aleatórios | entre 10 e 5
// arredondei automaticamente
// const aleatorio = (Math.random() * (10 - 5) + 5).toFixed(2); | com duas casas

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); 
console.log(aleatorio);

// --------------------------------Potenciação----------------------------------

// potenciação com objeto 
console.log(Math.pow(2,10));

// Potenciação com operador;
console.log(2 ** 10);

num1 = 9;

// Usando a matemática
console.log(num1 ** (1/2));

// Usando a matemática | outro cálculo
console.log(num1 ** 0.5);