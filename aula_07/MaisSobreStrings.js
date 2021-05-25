/* Caso seja necessário imprimir uma String 
   entre aspas duplas; dentro de aspas duplas.
   Usamos a \ antes das aspas duplas. Para mantê-las */

let nome = "Jean \"Santos\"";
console.log(nome);

// --------------Imprimir a barra invertida de forma Literária------------------

nome = "Roberta \\Valena\\";
console.log(nome);

// ----------------Imprimir letras específicas de uma String--------------------

nome = "Roberta Valena";
console.log(nome[8]); // V

// Usando o charAt
nome = "Roberta Valena";
console.log(nome.charAt[9]); // a

// ---------------Concatenando em Três Formas as mesmas coisas------------------

let frase = "Ola, bom dia.";

console.log(frase.concat(" Tudo bem?")); // Método concat
console.log(frase + " Tudo bem?");       // Concatenando com '+'
console.log(`${frase} Tudo bem?`);       // Concatenando com Templates

// -----------------Descobrir o Index Inicial de uma texto----------------------

// index 0123456789
frase = "Jean, vai dormir."
console.log(`A palavra 'dormir' começa no index : ${frase.indexOf('dormir')}`); 

// -----------------------------------------------------------------------------

/* buscando o index informando um ponto de partida
   Irá procurar o index inicial da palavra dormir a partir do index indicado
   No caso, index 5. */

console.log(`A palavra 'dormir' começa no index : ${frase.indexOf('dormir', 5)}`);

// -----------------------------------------------------------------------------

/* buscando o index informando um ponto de partida
   Irá procurar o index inicial da palavra dormir a partir do index indicado
   No caso, index 5. Porem começando do FIM para o INÍCIO da String */

console.log(`A palavra 'dormir' começa no index : ${frase.lestIndexOf('dormir')}`);

// ----------------------------MÉTODO REPLACE-----------------------------------

// Substituindo palavras 

frase = "Que belo dia.";
console.log(frase.replace('belo', 'Ótimo')); // ficará --> Que Ótimo dia

// Substituindo uma única letra em uma frase usando a FLAG 'g'

frase = "O rato roeu a roupa do Rei de Roma. "
console.log(frase.replace(/r/g, '#')); // O #ato #oeu a #oupa do Rei de Roma. 

// OBS : ele é case-Sensitive (captura upper Case)

// ----------------------------MÉTODO LENGTH------------------------------------
// Sabendo o tamanho exato de carácter que contém uma String

frase = "Jean Santos";
console.log(`A frase tem ${frase.length} letras`);

// ----------------------------MÉTODO SLICE-------------------------------------

// Pegando Strings dentro de um determinado intervalo;

frase = 'A prova é segunda';
console.log(frase.slice(2,7)); // prova --> p = index inicial 2 

// Usando com valores negativos
// Servem para capturar valores que estão no fim da String

console.log(frase.slice(-7));

// ----------------------------MÉTODO SPLIT-------------------------------------

// Remove coletivamente caracteres específicados.

frase = 'Jean Pablo Costa Dos Santos';
console.log(frase.split(' ')); // irá agrupara cada palavra em um index

// Usando com valores negativos
// Servem para capturar valores que estão no fim da String

console.log(frase.slice(-7));

// -------------------------UPPER E LOWER CASE----------------------------------

frase = 'Jean Pablo Costa Dos Santos';

// String em Upper Case
console.log(frase.toUpperCase()); 

// String em Upper Case
console.log(frase.toLowerCase());

// --------------------------------SITES----------------------------------------

// Sites Ótimos para reforçar e explorar 

// -> MDN JavaScript.com

// -> W3Schools.com

