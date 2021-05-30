/*
  ------------------------------------------------------------------------------
  | Coleção de Propriedades | Objeto |
  ------------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  | ANOTAÇÕES |
  ------------------------------------------------------------------------------
 
  > Objetos servem pra agrupar atributos 
  > Objetos são criados com chaves '{}'
  > Arrays são criados com Colchetes '[]'
  > Atributos são separados por vírgula ','
  > Valores dos atributos são atribuídos por dois pontos ':'
  
  > Não precisa repetir os atributos ( Ex -> nome : nome).
    JS entende que o atributo 'nome' é referente ao parâmetro 'nome'
 
  ------------------------------------------------------------------------------
  | SOBRE O THIS |
  ------------------------------------------------------------------------------ 
  
  Serve para pegar o valor de um atributo, que está dentro de uma variável,
  ou seja, um Objeto. Para assim, poder usarmos esse valor dentro de uma Função,
  que também está dentro do mesmo Objeto.

*/

// ----------------------------1º Forma de Criação------------------------------

// Criando um Objeto Literal
const pessoa = {

  nome: 'Jean',
  sobrenome: 'Santos',
  idade: 17

};

// Acessando o valor do atributo dessa variável (objeto)
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

// -----------------2º Forma de Criação - Mais correta e Flexível---------------

// Função que cria Objetos
function criarPessoa(nome, sobrenome, idade /* Parâmetros */) {
  return { nome, sobrenome, idade };
} 

const str = '-';
const pessoa01 = criarPessoa('Roberta', 'Valena', 40 /* Argumentos */);
const pessoa02 = criarPessoa('Guilherme', 'Soares', 18);
const pessoa03 = criarPessoa('Alex', 'Costa', 17);

console.log(str.repeat(50)); // Repete 50 Vezes a String
console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);
console.log(pessoa01.idade);

console.log(str.repeat(50));
console.log(`${pessoa02.nome} ${pessoa02.sobrenome} tem ${pessoa02.idade}`);

console.log(str.repeat(50));
console.log(`${pessoa03.nome} ${pessoa03.sobrenome} tem ${pessoa03.idade}`);

// ---------------------Criando Função dentro do Objeto-------------------------

const aluno = {

  nome: 'Jean',
  sobrenome: 'Santos',
  idade: 17,

  // 1º Método - Usando this para pegar o valor do Atributo
  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade}`);
  },

  // 2º Método
  aumentarIdade() {
    this.idade++;
  }
}

aluno.fala(); // 17
aluno.aumentarIdade(); // aumentou + 1 na idade
aluno.fala(); // 18


