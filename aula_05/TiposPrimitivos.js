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

// Precedência 
// 1º -> ()
// 2º -> **
// 3º -> * | / | %
// 4º -> - | +


// ----------------------------------------------------------

// incremento (um valor = ele mesmo + 1 | acúmulo)
// const acumulador = acumulador + 1;

let acumulador = 1;
acumulador++;
console.log(acumulador);

// Diferença entre incremento pré e pós

acumulador = 1;
console.log(acumulador++); // aqui ainda vai ser 1 o valor
// nessa linha o acumulador vale 2

// Como resolver isso? usa o ++ antes da variável.
console.log(++acumulador);

// ou então primeiro acumular e depois exibir.
acumulador = 1;
acumulador++
console.log(acumulador);

// Tem tbm o DECREMENTO (um valor = ele mesmo - 1) a regra é a mesma

// Quando queremos incrementar ou decrementar em valores diferentes
// temos que especificar de quanta em quanta irá acontecer

acumulador = 0
acumulador = acumulador + 2; // irá somar de dois em dois 

// outra forma 
acumulador += 2; // 4
acumulador += 2; // 6
acumulador += 2; // 8
console.log(acumulador); // 8 -> valor final do acumulador

// O mesmo acontece com DECREMENTO

acumulador = 30
acumulador = acumulador - 2; // irá subtrair de dois em dois 

// outra forma
acumulador -= 2; // 26
acumulador -= 2; // 24
console.log(acumulador); // 24 -> valor fina do acumulador
 
// ---------------------------------------------------------

// É possível tbm fazer Incremento com Potenciação (**)
acumulador = 2;
acumulador **= 2; // o mesmo que acumulador = acumulador * 2
console.log(acumulador);

// É possível tbm fazer Decremento com Potenciação (**)
acumulador = 20;
acumulador **=- 2; // o mesmo que acumulador = acumulador * 2
console.log(acumulador);

// --------------------------------------------------------

// toma cuidado com os tipos dos valores.
// Dependendo da operação e o do tipo de cada variável

let exemplo01 = 12; // isso é um number
let exemplo02 = 'luiz'; // isso é uma String

let conta = exemplo01 * exemplo02;
console.log(conta);

// Irá ocasionar o erro (NaN - Not a Number)

// --------------------------------------------------------

exemplo01 = 12;
exemplo02 = '12';
console.log(exemplo01 + exemplo02); // será feito uma CONCATENAÇÃO

// --------------------------------------------------------

exemplo01 = 12;
exemplo02 = '12';
console.log(exemplo01 * exemplo02); // será feito MULTIPLICAÇÃO

// Acontece isso porque independente de ser uma String. 
// A linguagem reconhece que dentro da String há um número. Logo, o JS converte
// a String para Number.

// --------------------------------------------------------

// CONVERTENDO VALORES

exemplo01 = 14;
exemplo02 = parseInt('13.8'); // convertendo em para Int
console.log(exemplo01 + exemplo02);

exemplo01 = 14;
exemplo02 = parseFloat('13.8'); // convertendo em para Float
console.log(exemplo01 + exemplo02);

exemplo01 = 14;
exemplo02 = Number('13.8');
console.log(exemplo01 + exemplo02);

// essa última maneira é a melhor. Pois sendo um 'number',
// a linguagem irá identificar automaticamente se o numero tem ou não casas decimais
// Afinal, tudo é number. 


