// Funções

// Definindo Valores Padrão em Função

function soma(a = 10, b = 6){
    let Resultadosoma = a + b;
    return Resultadosoma;
}

console.log(soma(65, 10));

console.log("");

// Utilizando retorno de função em expressão

function multiplicar(a,b){
    return a * b;
}

let resultadoExpressao = multiplicar(4,5)*4;

console.log(resultadoExpressao);

// Função retornando String

function nomeCompleto(nome, sobrenome, ultimoNome){
    return nome + " " + sobrenome + " " + ultimoNome;
}

console.log(nomeCompleto("Paulo", "Bibiano", "Silva"));

console.log("");

// Retorno para encerrar execução de função

function subtracao(a,b){
    return "Só sei que nada sei";

    return a - b;
}

console.log(subtracao(10, 5));

console.log("");

// Retorno em condição lógica

function verificarIdade(idade){
    if (idade < 18){
        return "Muito Jovem Meo"
    } else{
         return "Está bem Velho Meo"
    }
}

console.log(verificarIdade(18.1));

console.log("");

// Returno de valor no HTML

const elementoh4 = document.querySelector(".ex1")

console.log(elementoh4);

function exibirMensagem(){
    return "Você é legal" ;
}

elementoh4.innerHTML = exibirMensagem();

console.log("");

// Expressão de Função

const multiplicar2 = function (a, b = 10){
    return a * b;
};

console.log(multiplicar2(1,2));

// Expressão de função sendo retornada em uma função

function executarSaudacao(funcao){
    return funcao();
}

let saudacao = function (){
    return "Olá Amigos";
};

executarSaudacao(saudacao);

console.log(executarSaudacao(saudacao));

