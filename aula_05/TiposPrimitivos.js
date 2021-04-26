// DADOS PRIMITIVOS  
// STRING, NUMBER, UNDEFINED, NULL, BOOLEAN, SYMBOL

const nome0 = "Jean"; // String
const nome1 = 'Jean'; // String
const nome2 = `Jean`; // String -> Muito usado em Templates

const numero0 = 17;   // number -> Inteiro
const numero1 = 17.50 // number -> Float

let valorIndefinido; // undefined
let nulo = null; 
// -> O null serve para vc transformar o valor de algo em nulo
// -> Muito usado em Estruturas Condicionais.
// -> Por exemplo, Caso o usuário nao escolha uma 'cor' o valor é 'null"
//    Após ele escolher, o valor null passa a ser 'red', por exemplo.

const aprovado = true; // valor boolean
const reprovado = false; // Valor boolean

// vendo o tipo e o valor de uma variável
console.log(typeof nome0, nome0);

// concatenando valores
const concatenacao01 = '20';
const concatenacao02 = '30';
console.log(concatenacao01 + concatenacao02);

// expoentes em valores

const base = 5;
console.log(base ** 2);


