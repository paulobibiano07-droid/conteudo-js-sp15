// Arrays

// Primeiro Array

const frutas = ["Banana", "Toamte", "Maçã","Abacate", 11];

console.log(frutas);

// Array com itens adicionados posteriormente

const carros = [];

carros[0] = "Ferrari";
carros[1] = "Uno";
carros[2] = "HB20";

console.log(carros);

console.log("");

// Criando Array com Construtor

const herois = new Array(
    "Homem Aranha",
    "Batman",
    "Superman",
    "Visão",
    "Ultron"
);

console.log(herois);

console.log("");

// Acessando Elementos de Arrays

const frutas2 = ["Morango", "Melão", "Abacate", "Uva", "Jabuticaba"];

let fruta1 = frutas2[0];
let fruta2 = frutas2[1];
let fruta3 = frutas2[2];
let fruta4 = frutas2[4];

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);


console.log("");

// Alterando Elemeto de Array

herois[4] = "Doutor Estranho";

console.log(herois);

// Convertendo Array para String

const viloes = ["Venom", "Carnage", "Galactus", "Doctor Doom", "Ultron"];

let viloesString = viloes.toString();

console.log(viloesString);

console.log("");


// Utilizando a Propriedade Lenght

let comprimentoViloes = viloes.length;

console.log(comprimentoViloes);

console.log("");


// Acessando o Ultimo item do Array

const heroi2 = ["Flash","Viuva Negra", "Sentry", "Wolverine"];

let comprimentoHerois = herois.length;

console.log(comprimentoHerois);

let ultimoItemHerois = comprimentoHerois - 1;

console.log(herois[ultimoItemHerois]);

console.log("");

// Utilizando Laço de Repetição para Percorrer o Array

const Programação = ["Java", "Python", "Ruby", "C#", "C++", "Assembley"];

let comprimentoProgramacao = Programação.length;

for (let acumuladora = 0; acumuladora < comprimentoProgramacao; acumuladora++){
    console.log(Programação[acumuladora]);
}

console.log("");

// Percorrendo Array com o Método ForEach

Programação.forEach((Programação) =>{
    console.log(Programação);
});

console.log("");

// Adicionando Elementos no Array com o Metodo Push

console.log(Programação);

Programação.push("JavaScript" , "Linux");

console.log(Programação);

console.log(Programação.length);

console.log("");

// Adicionando Elementos no Array com a Propriedade Lenght

Programação[Programação.lenght] = "Windows";

console.log(Programação);

console.log("");





