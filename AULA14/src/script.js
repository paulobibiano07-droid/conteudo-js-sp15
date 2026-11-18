// Metodos dde Arryas
const planetas = ["Plutão", "Jupiter", "Saturno", "Terra", "Vênus", "Urano"];

console.log("");

// Metodo At() -> Serve para acessar um item especifico de uma Array

let planetasAt = planetas.at(5);

console.log(planetasAt);

console.log("");

// Metodo join() -> Serve para colocar um simbolo espeficio de sepração dos elementos

let planetasJoin = planetas.join(">");
console.log(planetasJoin);

console.log("");

// Metodo pop() -> é um metodo que tira o ultimo item de uma lista e podemos exibi-lo com a variavel com o nome da pop

let planetaPop = planetas.pop();

console.log(planetas);

console.log(planetaPop);

console.log("");

// Metodo push() -> ele coloca um novo elemento em uma lista, e sempre na ultma posição. Coincidentimente a mesma posição que tiramos com o metdodo pop()

let planetaPush = planetas.push("Netuno");

console.log(planetas);

console.log("");

// Metodo Shift() -> Ela tira um elemento de uma posição e desloca outro elemento para o substituir

let planetasShift = planetas.shift();

console.log(planetas);

console.log("");

// unshift() -> Ele vai fazer ao contrario do shift(), pois de vez de remover e deslocar para o substituir, ele vai adicionar um item na sua primeira posição

let planetaUnShift = planetas.unshift("Sol");
console.log(planetas);

console.log("");

// Alterando Elemnto em Array. E ainda remove o item a ser alterado imediamtamente

planetas[6] = "Terra";
console.log(planetas);

console.log("");

// Metodo Array.isArray() -> Verifica se uma lista é uma array ou não. E o resultado é um valor booleano true ou false

console.log(Array.isArray(planetas)); // valor true
console.log(Array.isArray(planetaPop)); // valor false

console.log("");

// Metodo concat() -> Ele ira concatenar (juntar) duas arrys, ou duas copias de suas arryas e juntar em unico array


const planeta2 = ["Eros","Minerva","Andromeda"];

const palnetasConcat = planetas.concat(planeta2);
console.log(palnetasConcat);

console.log("");

// Metodo copyWithin() -> seleciona as posições que deseja, e os copia os itens dessa posição e cola depois dos elementos originais

let planetasCopyWithin = planetas.copyWithin(3,3);

console.log(planetasCopyWithin);

console.log("");

// Exemplo de Matrizes(ou tabelas com numero n de linhas(posições da array)e colunas) em Array

const matriz = [
    [0, 1, 2],
    [3, 4, 5],
]

console.log(matriz[1][2]);

console.log("");

// Metodo flat() -> que transformara duas linahs com duas arryas(matriz) em uma unica linha

const matrizFlat = matriz.flat();

console.log(matrizFlat);

console.log("");

// Metodo flatMap() -> ira localizar uma array, e localizando colocara uma função, essa função irá criar um novo array e executara a função de acordo com seu argumento

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const numerosFlat = numeros.flatMap((numeros) => {
   return [numeros, numeros * 20];

});

console.log(numerosFlat);

console.log("");

// splice() -> adicionar um elemento a partir do indice indicado, e você poderá remover a partir do proximo parametro permitido

const animais = ["Arara","Orca","Tubarão"];

console.log(animais);

const animaisSplice = animais.splice(0,3, "Leão", "Tigre");

console.log(animaisSplice);

console.log("");

// Metodo toSpliced()

let meses = ["Jan", "Feb", "Apri","Mai", "Jun"];

const mesesAlterado = meses.toSpliced(0,2);

console.log(mesesAlterado);
console.log(meses);

// Metodo slice()
 
const numeros2 = [1,2,3,4];
const numerosSplice = numeros2.slice(0,3);

console.log(numerosSplice);




