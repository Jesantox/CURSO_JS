/* 
  ------------------------------------------------------------------------------
  | ANOTAÇÕES |
  ------------------------------------------------------------------------------

  > Tudo que ocorre no navegador é considerado um evento.
  > Eventos = ações

  > É importante criar variáveis dentro de UM 'escopo', pois quando criamos
    uma variável no escopo global do arquivos. Corre o risco de haver conflitos 
    com nomes terceiros que estão em outras bibliotecas.

*/
 
function meuEscopo() {

  // selecionando como se fosse CSS
  // selecionar class = .nome
  // selecionar id = #nome
  const form = document.querySelector('.form'); // seleciona o forms pela class
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  // Cancelando acontecimentos padrões do navegador 
  function recebeEventoForm(evento) {
    evento.preventDefault();

    // selecionando os input do html
    const nome = form.querySelector('.nome'); 
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura')

    // Adicionando o valor dos input ao Array 'pessoas'
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);  // exibindo a lista

    // exibindo no navegador os valores 
    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`

  }

  //  Criando um evento - 2º Forma - Mais usada
  form.addEventListener('submit', recebeEventoForm);


}

meuEscopo();

/*
  Criando um evento - 1º Forma

    form.onsubmit = function (evento) {

    evento.preventDefault(); // cancela acontecimentos padrões do navegador

    console.log('foi enviado')
  };

    let contador = 1;

    function recebeEventoForm (evento) {

    evento.preventDefault();

    console.log(`Form não enviado ${contador}`);
    contador++
  }
*/