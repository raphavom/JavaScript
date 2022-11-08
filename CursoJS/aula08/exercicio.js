const nome = 'Raphael Vinicius';
const sobrenome = 'Oliveira';
const idade = 35;
const peso = 85;
const altura = 1.82;
let imc; //peso dividido (por altura * altura)
let anoNascimento;
anoNascimento = 2022 - idade
imc = peso / (altura * altura)

/*Raphael Vinicius Oliveira tem 35 anos e pesa 84kg.
Tem 1.82 m de altura e seu IMC 25,661152034
Raphael Vinicius nasceu em 1987*/

console.log(nome,sobrenome,"tem",idade,'anos e pesa',peso+'kg.');
console.log(`Tem ${altura}m de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);