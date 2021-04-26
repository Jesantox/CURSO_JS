const nome = 'Jean';
const sobrenome = 'Santos';
const idade = 17;
const peso = 84;
const alturaEmM = 1.80;
const anoAtual = 2021;

let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let dataNascimento;


indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
dataNascimento = (anoAtual - idade) - 1;

/*  imprimindo de uma forma

console.log(
  nome, sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg\ntem ' +
  alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal +
  nome, sobrenome + ' nasceu em ' + dataNascimento)*/

// IMPRIMINDO DE OUTRA FORMA MAIS SIMPLES E LEGÍVEL 
console.log(`
${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}
${nome} ${sobrenome} nasceu em ${dataNascimento}`)
