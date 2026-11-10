// Laços de Repetição (Loops)

// Laço for

for(let acumuladora = 1; acumuladora <=10;acumuladora = acumuladora +1){
    console.log(acumuladora);
}

console.log("");

// Exemplo carro

const carros = ["Camaro","Uno","Duster","Mustang"];
let tamanhoArray = carros.length;

console.log(carros.length);

for(let acumuladora = 0; acumuladora < tamanhoArray; acumuladora = acumuladora + 1){
    console.log(carros[acumuladora]);
}

// Exemplo 1

let i, x = ``;
for(i = 0; i <= 5; i++){
    x += i;
}

console.log(x);


console.log(``);

// Laço While

let acumuladora = 0;

while(acumuladora <= 10){

    console.log(acumuladora);
    acumuladora++;
}

console.log("");

// Laço Do While

let acumuladora2 = 0;

do{
    console.log(acumuladora2);
     acumuladora2++;

} while ( acumuladora2 <= 10);

console.log("");

// Calculadora com Do while

do{
    alert("Calculadora");

    let numero1 = parseFloat(prompt("Me Informe o seu Primeiro Número"));

    let operador = prompt("Informe o operador aritmético");

    let numero2 = parseFloat(prompt("Informe o Segundo Número do Calculo"));



    switch(operador){
        case "+":
            let soma = numero1 + numero2;
            alert(`${numero1} + ${numero2} = ${soma}`);
            break;

       case "-":
            let subtracao = numero1 - numero2;
             alert(`${numero1} - ${numero2} = ${subtracao}`);
            break;

        case "*":
            let multiplicacao = numero1 * numero2;
            alert(`${numero1} * ${numero2} = ${multiplicacao}`);
            break;
            
        case "/":
            let divisao = numero1 / numero2;
            alert(`${numero1} / ${numero2} = ${divisao}`);
            break;    

    }

    condicao = prompt("Você Deseja fazer mais um calculo (s/n)?");

} while (condicao === "s" || condicao === "S");





