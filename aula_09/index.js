// ARRAYS (lista) - BÁSICO

/* 
   As Strings são indexadas. 
   Ou seja, os caracteres tem seu próprio index.
   
   Os Arrays são indexados por elementos. 
   Ou seja, cada elemento na lista é um index que se inicia em 0.
*/

// Criando um Array 
const alunos = ['Luiz', 'Maria', 'João'];

// Tipo do Array
console.log(typeof alunos);

// Verificando se realmente é um Array
console.log(alunos instanceof Array); // alunos é um array? True | False

// Acessando um elemento pelo seu index
console.log(alunos[1]);
console.log(alunos[2])

// Acessando todos os elementos
console.log(alunos);

// Editando um elemento do Array pelo seu Index
alunos[1] = 'Jean';
console.log(alunos[1]);

// Adicionando um elemento à lista
// Pra saber o tamanho do Array é só fazer "alunos.length"

// 1º Forma de Adicionar
alunos[3] = 'Roberta';
console.log(alunos[3]);

// 2º Forma de Adicionar
alunos[alunos.length] = 'Gabrielle';
alunos[alunos.length] = 'Alex';
alunos[alunos.length] = 'Léo';
console.log(alunos);

// 3º Forma de Adicionar
// Usando a Função 'push'
alunos.push('Guilherme'); // adiciona no fim da lista
alunos.unshift('Lucas'); // adiciona no início da lista
console.log(alunos);

/*
   Excluir Elementos
   
   alunos.pop(); -> exclui o último elemento da lista
   alunos.shift(); -> remove elementos do começo */

// É possível armazenar o elemento removido em uma variável
const fim = alunos.pop();
const comeco = alunos.shift();

console.log(comeco);
console.log(fim);
console.log(alunos);

// Fatiando Array

// Pegando elementos do index 0 até o 3
console.log(alunos.slice(0,3));

// Pegando elementos com do fim da lista (indexs negativos)
console.log(alunos.slice(0, -1));

/*
   Não é uma boa prática ter em um Array vários tipos de dados.
   Por exemplo, Números, Objetos, Funções, Valor Booleano. Tudo isso em um único array.
*/
