
// -----------------------------------------------------------------------------
/*  FUNÇÕES PARA EXIBIR NO NAVEGADOR */

/*
alert(' Com a nossa Mensagem ');         --> Primeira Maneira
window.alert(' Faz a mesma coisa');      --> Segunda Maneira
confirm(' Certeza que deseja apagar?');  --> Confirmação 
prompt(' Digite seu Nome e Sobrenome');*/

// atribuindo o valor das Funções à uma variável

// --------------------------------CONFIRM--------------------------------------
const confirmacao = confirm('Deseja apagar?');

if(confirmacao == true){
  alert('Apagado com sucesso!');
} else {
  alert('Operação Cancelada com Sucesso!');
}

// ---------------------------------PROMPT--------------------------------------

const num1 = prompt(' Digite um Número : ');
const num2 = prompt(' Digite outro Número : ');

const adicao = Number(num1) + Number(num2);

alert(`Esse é o resultado : ${adicao}`); // OU alert('Esse é o resultado : ' + adicao);



// -----------------------------------------------------------------------------
// Diferença Entre 'console.log' | 'alert' | confirm

// console.log irá exibir as mensagens apenas no NODE.
// Ou seja, no console mesmo. Somente pro Desenvolvedor. RETORNA um valor

// alert irá exibir a mensagem no Window (Na janela do navegador - Browser).
// Ou seja, no navegador; O usuário irá ver. Ele NÃO retorna nenhum valor

// confirm irá exibir no navegador uma janela pop-up que contém dois botões na
// parte inferior (OK | CANCEL). RETORNA Valor
// Caso o usuário clique em OK -> retornará TRUE
// Caso o usuário clique em CANCEL -> retornará FALSE

// prompt irá exibir no navegador uma janela pop-up que contém um campo para 
// inserir dados. 

// OBS : quando uma função está dentro de um Objeto chamamos ele de método.
// Caso esteja fora de um Objeto chamamos de Função.
// -----------------------------------------------------------------------------