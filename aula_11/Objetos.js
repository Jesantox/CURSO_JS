// Objetos servem pra agrupar atributos 
// Objetos são criados com chaves '{}'
// Arrays são criados com Colchetes '[]'
// Atributos são separados por vírgula ','
// Valores dos atributos são atribuídos por dois pontos ':'

/* 
   Sobre o 'this' 
   > Pega o valor de um atributo 
   >> que está dentro de um Objeto
   >>> e usa dentro de uma função
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

/*  Função que cria Objetos

    function criarPessoa (nome, sobrenome, idade -> Parâmetros){
    return{
      nome : nome,
      sobrenome : sobrenome,
      idade : idade
    };
  }

  Não precisa repetir (nome : nome)
*/

function criarPessoa(nome, sobrenome, idade /* Parâmetros */) {
  return { nome, sobrenome, idade };
}

// a linguagem ja entende que o atributo 'nome' é referente ao parâmetro 'nome' 

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

  // 1º Função
  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade}`);
  },

  // 2º Função
  aumentarIdade() {
    this.idade++;
  }
}

aluno.fala(); // 17
aluno.aumentarIdade(); // aumentou + 1 na idade
aluno.fala(); // 18


