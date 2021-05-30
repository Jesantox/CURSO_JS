/*

  Tipos de Dados Primitivos em JS - Valores Imutáveis - Não pode modificar
  
  |   Valores Copiados    |

  | string  | number      |
  | boolean | undefined   |
  | null (bigint, symbol) |

  Tipos de Dados por Referência em JS - Valores Mutáveis - Pode Modificar

  | Uma lista com valores   | array01    |
  | Coleção de Propriedades | object   |
  | Conjunto de iInstruções | function |
  
  ------------------------------------------------------------------------
  | ANOTAÇÕES |
  ------------------------------------------------------------------------
  
  > Não pode alterar o valor de uma String, porque a String é imutável.
  > Dados por Referência apontam pro mesmo valor na memória

*/

// Exemplo - Não pode alterar o valor de uma String

let nome = "Jean";
nome[0] = "G"; // Não consegue alterar

console.log(nome[0]); // J
console.log(nome); // Jean

// Isso acontece porque a String é imutável

// -----------------------------Dados Primitivos--------------------------------
let a = 'A';
let b = a; // CÓPIA da variável a

console.log(a, b) // a = A | b = A

a = 'Outra coisa';
console.log(a, b) // a = Outra coisa | b = A

/* Isso acontece porque a variável 'b' 
   fez uma cópia da primeira versão da variável 'a'.
   
   Ao mudar posteriormente o valor de 'a'.
   A variável 'b' permanece com o valor da versão antiga da variável 'a' */

// --------------------------Dados por Referência-------------------------------

let array01 = [1,2,3];
let array02 = array01; // mesmo valor na memória que 'a'

console.log(array01, array02);

array01.push(4); // adicionei o elemento 4 na lista sem mexer na variável 'b'

console.log(array01, array02); // a lista foi alterada em ambas as variáveis

// Copiar o valor do array01 | array -> colchetes [...array]
let array03 = [...array01]; // variável independente
console.log(array03) // [ 1, 2, 3, 4 ]

/* Mesmo alterando o valor da variável array01 agora. 
   A variável array03 permanece intacta */

array01.push(5);
console.log(array01) // [ 1, 2, 3, 4, 5 ]


const aluno01 = {
  nome : 'Jean', 
  idade : 17
};

// copiar atributos do objeto aluno01
const aluno02 = {...aluno01}; // variável independente
console.log(aluno02); // { nome: 'Jean', idade: 17 }

// alterando o valor do atributo nome
aluno01.nome = 'Roberta';
console.log(aluno01); // { nome: 'Roberta', idade: 17 }
