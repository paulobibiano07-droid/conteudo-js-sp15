// Operadores de Comparação

// Operador Comparativo de Igualdade

let a = 5;

let comparadorIgualdade = a == 6;

console.log(comparadorIgualdade);

console.log("");

// Operador Comparativo de Igualdade e Tipo

let comparadorIgualdadeTipo1 = (a === 5);

let comparadorIgualdadeTipo2 = (a === "5");

console.log(comparadorIgualdadeTipo1);
console.log(comparadorIgualdadeTipo2);

console.log("")

// Operador Comparativo de Não Igualdade (Diferença)

let comparadorDiferença1 = (a != 8);
let comparadorDiferença2 = ( a != 5);
let comparadorDiferença3 = ( a != "5");

console.log (comparadorDiferença1);
console.log (comparadorDiferença2);
console.log (comparadorDiferença3);

console.log("");

// Operador Comparativo de Não Igualdade (Diferença) e Tipos

let comparadorDiferençaTipo1 = (a !== 8);
let comparadorDiferençaTipo2 = (a !== 5);
let comparadorDiferençaTipo3 = (a !== "5");

console.log(comparadorDiferençaTipo1);
console.log(comparadorDiferençaTipo2);
console.log(comparadorDiferençaTipo3);

console.log("");

// Operador Comparativo Maior Que

let maiorQue1 = (a > 5);
let maiorQue2 = ( a > 3);
let maiorQue3 = ( a > 8);

console.log(maiorQue1);
console.log(maiorQue2);
console.log(maiorQue3);

console.log("");

// Operador Comparativo Menor Que

let menorQue1 = (a < 5);
let menorQue2 = (a < 3);
let menorQue3 = (a < 8);

console.log(menorQue1);
console.log(menorQue2);
console.log(menorQue3);

console.log("");

// Operador Comparativo Maior ou Igual que

let maiorIgualQue1 = (a >= 5);
let maiorIgualQue2 = (a >= 3);
let maiorIgualQue3 = (a >= 8);

console.log(maiorIgualQue1);
console.log(maiorIgualQue2);
console.log(maiorIgualQue3);

console.log("");


// Operador Comparativo Menor ou Igual Que

let menorIgualQue1 = (a <= 5);
let menorIgualQue2 = (a <=3);
let menorIgualQue3 = (a <= 8);

console.log(menorIgualQue1);
console.log(menorIgualQue2);
console.log(menorIgualQue3);

console.log("");


// Utilizando Operador de Comparação em Condição Lógica

let idade = 12;
let mensagem;


if (idade < 19){
    mensagem = "Muito Novo Para Dirigir";
    console.log(mensagem);
}