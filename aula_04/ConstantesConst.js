// Não podemos criar constantes com palavras reservadas
// Precisa ter nomes claros e significativos.
// Não pode começar o nome com números.
// Nomes Compostos (camelCase)
// Não podem ter espaço ou traços.
// São diferenciadas por letras maiúsculas ou minúsculas (case-sensitive)
// Não pode modificar o valor de umas constante
// Não declare com VAR, use CONST.

const nome = 'João'; // valor fixo

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

// mudei de const para let 
// pegando o resultado da const e atribuindo um valor.
// Resultando assim em um novo valor
let resultadoTriplicado = resultado * 3; 

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado + ' - valor antigo');

// mudando o valor da variável - acumulando 
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado + ' - valor novo');

// verificar o tipo de uma variável
console.log(typeof(primeiroNumero) + ' - tipo da variável');


