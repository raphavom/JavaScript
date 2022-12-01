function funcaoInventadaPorMim () {
  const nome = "JavaScript"
  console.log(nome)
}

funcaoInventadaPorMim();

function segundaFuncao (nome) {
  console.log(nome);
}

segundaFuncao("HTML");

//Podemos definir parâmetros durante a criação da função. Durante a execução, podemos passar argumentos ('nome'), que serão utilizados nos parâmetros.

// nome e horas são os parâmetros
function logCurso(nome, horas) {
  console.log(nome, horas, 'horas');
}

// JavaScript e 40 são os argumentos
logCurso('JavaScript', '40');
logCurso('HTML', '20');
logCurso('CSS', '30');

/*retorno
Toda função retorna um valor (tipo de dado). Se o retorno não for declarado utilizado a palavra return, o valor retornado será undefined.
*/
function logCurso2(nome) {
  console.log(nome);
  return nome + ' Log';
}

const valor = logCurso2('JavaScript');
console.log(valor);
