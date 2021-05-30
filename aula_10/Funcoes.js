// A regra de nomes é igual a de variáveis
// Funções podem ou não retornar valores


// ------------------------------Função Básica----------------------------------

function saudacao01(/* Parâmetros */) {

  console.log('Bom dia !') // Corpo da Função 

}

saudacao01(); // exibição básica

// --------------------------Função com Parâmetros------------------------------
function saudacao02(nome) {

  console.log(`Tenha um Bom Dia, ${nome}. `)
}

saudacao02('Jean'); // exibição com parâmetro

// ------------------------Função - Retornando Valor----------------------------

function saudacao03(nome) {
  return `Olá, tudo bem ${nome} ?` // Retornando um valor
}

const variavel = saudacao03('Carlos'); // guardando o valor
console.log(variavel); // exibindo o valor retornado

// -----------------------------Função - Soma-----------------------------------

function soma(n1, n2) {

  const resultado = n1 + n2; // variável local
  return resultado;

  // Tudo que está abaixo de 'return' não é executado
}

console.log(soma(5, 5)); // exibindo a função

const resultado = soma(50, 50); // variável global
console.log(resultado);

// Variável Local = Só existe dentro daquele escopo
// Variável Global = Existe em todo o documento = Única 

// ----------------------Função - Soma - Valor Padrão---------------------------

function soma01(n1 = 1 /* Valor Padrão */, n2 = 1 /* Valor Padrão */){

  const resultado = n1 + n2;
  return resultado;
}

console.log(soma01()); // = 2, pois não coloquei valores nos parâmetros
console.log(soma01(10, 30)); // 40

// -----------------------------Função Anónima----------------------------------

/**
 * Função que calcula a raiz de um Valor 
 * @param {*} n1 -> Valor
 */
const raiz = function(n1) {

  return n1 ** 0.5;

}; // Funções anónimas precisam do ';' no fim.

console.log(raiz(9)); // = 3 
console.log(raiz(25)); // = 5
console.log(raiz(100)); // = 10

// -------------------Função Aero Function (Criação Moderna)--------------------

/**
 * Função Aero Function que calcula a raiz de um Valor 
 * @param {*} n1 -> Valor
 */
 const raiz01 = (n1) => {

  return n1 ** 0.5;

}; // Funções Aero Function precisam do ';' no fim.

console.log(raiz01(16)); // = 4 
console.log(raiz01(64)); // = 8
console.log(raiz01(81)); // = 9

// --------------Função Aero Function (Criação Moderna - Resumida)--------------

/**
 * Quando tem só 1 parâmetro 
 * Quando tem só uma linha de código
 * 
 * Podemos criar resumidamente 
 * @param {*} n1 Valor
 * @returns A raiz do Valor
 */
const raiz02 = n1 => n1 ** 0.5;

console.log(raiz02(25));

const soma04 = (n1, n2) => n1 + n2; // Resumida - 2 parâmetros
console.log(soma04(20, 20));

const soma05 = (n1, n2, n3) => n1 + n2 + n3; // Resumida - 3 parâmetros
console.log(soma05(10, 20, 50));



