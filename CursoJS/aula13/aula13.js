//               01234567
let umaString = "Um texto em um belo dia mostrando o tamanho do sol"

console.log(umaString[5]) //pega o elemento na posição 5
console.log(umaString.indexOf('texto')) //qual posição começa a palavra
console.log(umaString.indexOf('o', 3));
console.log(umaString.indexOf('e', 5));
console.log(umaString.replace(/t/, 'TT')); //replace apenas para o primeiro t
console.log(umaString.replace(/t/g, 'TT')); //replace para todos os T
console.log(umaString.length); //tamanho de toda a string
console.log(umaString.slice(2, 6)); //corta a string começando da posição 2 até a posição anterior antes do fim (nesse caso, o 5)
console.log(umaString.slice(-6, -1)); //começando pelo fim e acabando antes do fim
console.log(umaString.split(' ')); //separando a cada espeço
console.log(umaString.split('t')); //separando a cada t
console.log(umaString.toUpperCase()); //aumentando todas as letras. lowercase serve para diminuir
