/* Faça com que :
   
   O valor de A tenha o valor de B;
   O valor de B tenha o valor de C;
   O valor de C tenha o valor de A; */

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// 1º Forma - Criando uma Constante

const ATemp = varA;

varA = varB;
varB = varC;
varC = ATemp;

// 2º Forma - Mudando as Variáveis

varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

let A = varB;
let B = varC;
let C = varA;
console.log(A, B, C) // B C A

// 3º Forma - Usando Lista

varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);