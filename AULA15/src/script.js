// Compreeendendo o DOM

// Selecionando Elemento pelo ID

const elemento1 =  document.getElementById("ex1");

console.log(elemento1);

console.log("");

// Selecionando Elemento pelo sua Classe

const elemento2 = document.getElementsByClassName("ex2");
console.log(elemento2);

// Selecionando Elemento pela Tag

const elemento3 = document.getElementsByTagName("p");
console.log(elemento3);

// Selecionando Elemento pelo seu "Seletor"

const elemento4 = document.querySelector("#ex4");

console.log(elemento4);

// Selecionando Elemento pelo todo o seu "Seletor"

const elemento5 = document.querySelectorAll("qs-ex");

console.log(elemento5);