let num01 = 10;
let num02 = 30.5;

// retornando o valor da variável em String
// a variável retornando um valor String. Podemos concatenar
console.log(num01.toString() + num02); 

// Continua do tipo Number
console.log(typeof(num01));

// ver o o número binário de um valor
console.log(num01.toString(2)); 

// Formatar as casas decimais do valor
console.log(num01.toFixed(2));

// --------------------Resolvendo Casas Decimais - Função-----------------------

// Pra que o JS faça o cálculo das casas certinho
// É preciso forçar o tipo da variável para Number

let a = 0.1; // criei a variável
let b = 0.1; 

a += b; // 0.2 // acumulei
a += b; // 0.3
a += b; // 0.4
a += b; // 0.5
a += b; // 0.6

a = Number(a.toFixed(2)); // Forcei o tipo para Number, coloquei 2 casas.
console.log(a);

// -------------------Resolvendo Casas Decimais - Cálculo-----------------------
a = 0.7; 
b = 0.1; // 0.8
let c = 0.3;

let calculo = (a * 100 + b * 100) / 100;
let calculo1 = (a * 100 + b * 100 + c * 100) / 100;
console.log(calculo);
console.log(calculo1);
// -----------------------------------------------------------------------------

// Verificar se um número é inteiro
console.log(Number.isInteger(num01));

// convertendo o valor da variável para String
num01 = num01.toString();  

// agora o tipo da variável é String
console.log(typeof(num01)); 


