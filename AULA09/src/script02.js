// Funções

// Função em Multiplicação

function mutiplicacao(a, b){
    return a * b;
}

console.log(mutiplicacao(10, 20));
console.log(mutiplicacao(2, 3));
console.log(mutiplicacao(7, 8));
console.log(mutiplicacao(8, 6));

console.log("");

// Soma

function soma(a, b){
    return a + b;
}

console.log(soma(20, 40));
console.log(soma(50, 40));
console.log(soma(4000, 50));
console.log(soma(309, 40));

console.log("");

// Subtração

function subtracao(a, b){
    return a - b;
}

console.log(subtracao(10, 4));
console.log(subtracao(50, 30));
console.log(subtracao(40, 50));
console.log(subtracao(900, 40));

console.log("");

// Divisão

function divisao(a, b){
    return a / b;
}

console.log(divisao(10, 50));
console.log(divisao(60, 70));
console.log(divisao(40, 2));
console.log(divisao(60, 50));

console.log("");

// Função com  um Parâmetro

function paraCelsius(grausFahrenheit){

    let calculoConversao = (5/9) * (grausFahrenheit - 32);
    
    return `${grausFahrenheit}° Fahrenheit convertido para Celsius é igual a ${calculoConversao}°C`;
}

console.log(paraCelsius(212));