//  OBSERVAÇÕES SOBRE VARIÁVEIS
/*
  > Não nomear variáveis com nomes reservados, ou seja, comandos da própria linguagem. 
  > Precisa ter nomes claros e significativos.
  > Não pode começar o nome com números.
  > Nomes Compostos. Cada palavra se inicia em letra maiúscula. 
  > São diferenciadas por letras maiúsculas ou minúsculas.
  > Não declare com VAR, e sim com LET.
*/

// Declarando Variáveis (Forma Antiga)
var nome;

// Declarando Variáveis (Forma Atual)
let nome01;

// Inicializando Variáveis
nome01 = 'Jean';

let nome02 = 'Maria'; // Declarando e Inicializando

console.log(nome01, 'nasceu em 1984');
console.log('Em 2000', nome01, 'conheceu', nome02);
console.log(nome01, 'Casou-se com', nome02, 'em 2012');
console.log(nome02, 'teve um filho com ', nome01, 'em 2015');
console.log('O filho de', nome01, 'se chama Eduardo');

// ----------------------------------------------------------------

console.log("")

nome01 = 'Roberta' // Atribui outro valor para uma mesma variável 

// Não é permitido 're-declarar' variáveis
// A partir de agora a variável 'nome01' contém o valor 'Roberta'
console.log(nome01)