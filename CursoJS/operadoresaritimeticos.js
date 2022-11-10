/* Aritiméticos 
+ adição e concatenação 
- subtrai
* multiplica
/ divide
** potenciação
% resto da divisão
*/

const num1 = 5; //número
const num2 = 10;
const num3 = '5'; //string
const num4 = 7;

/*
Precedência:
() - parêntesis
** - potenciação
* / % - multiplicação, divisão e resto
+ - - adição e subtração
*/

console.log(num1 + num2)
console.log(num3 + num2)
console.log((num4 + num3) * num1 - (num4**num1))

/* 
incremento = ++
decremento = --
*/

let contador = 1;
++contador;
console.log(contador);

//pode ser feito dessa forma também

let somar = 1;
console.log(++somar);

let diminuir = 4; //também pode ser feita dessa forma, porém a diminuição ocorrerá após a impressão
console.log(diminuir--);
//para verificar o novo valor, é só imprimir novamente
console.log(diminuir)

//++ soma ou -- diminui apenas de 1 em um. Para que aumente mais do que um, fazemos conforme abaixo:

let subir = 1;
console.log(subir+5);

//ou

let subir2 = 1;
subir2 = subir2 + 3 ;
console.log(subir2);

//ou

const subida =  8;
let subir3 = 4;
subir3 = subir3 + subida;
console.log(subir3)
subir3 = subir3 + subida;
console.log(subir3)

//ou, de forma resumida

const subida2 = 8;
let subir4 = 4;
subir4 += subida2;
console.log(subir4)

//outro exemplo

const contador2 = 8
let subir5 = 3
subir5 *= contador2
console.log(subir5)

//convertendo string para número e somando

const num5 = 10
const num6 = parseInt('6.5') //converte para número inteiro, nesse caso, o 6
console.log(num6 * num5)
console.log(typeof(num6))
const num7 = parseFloat('6.5') //converte para número decimal
console.log(num7 * num5)
const num8 = Number('7.5') //converte qualquer número
console.log(num8 * num5)
