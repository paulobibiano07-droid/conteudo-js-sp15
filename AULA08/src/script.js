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

let i, x = '';
for(i = 0; i <= 5; i++){
    x += i;
}

console.log(x);


console.log('');

// Laço While

let acumuladora = 0;

while(acumuladora <= 10){
    console.log(acumuladora);
    acumuladora++;
}
