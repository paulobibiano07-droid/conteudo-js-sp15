// Funções

// função Convencional

function multiplicar (a,b){   
     return a * b;
}

console.log(multiplicar(100,2));

console.log("");

// Expressão de Função

const multiplicar = function (a,b){  
    return a * b;          
}

console.log(multiplicar(50,2));

console.log("");

// Função de Seta == Arrow Function

const multiplicar = (a,b) => a * b;

console.log(multiplicar(5,25));

console.log("");

// Arrow Function com apenas um parâmetro

const numeroAoQuadrado = a => a * a;

console.log(numeroAoQuadrado(50));

console.log("");

// Arrow Function em Método de Objeto

const pessoa = {
    nome : "Paulo",
    idade : 19,
    cumprimentar: () => {
        return "Olá eu sou " + this.nome + "e tenho" + this.idade + "de idade.";
    },
}

