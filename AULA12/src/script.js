// objetos

// Acessando Propriedades
const pessoa = {
    nome: "Paulo",
    ultimoNome: "Bibiano",
    idade: 19,
};

let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);

let acesandoColchetes = pessoa["ultimoNome"];
console.log(acesandoColchetes);

console.log("");

// Atualiazando propriedades no objeto

pessoa.nome = "Richard";

console.log(pessoa.nome);

// Adicionando Propriedase no objeto

pessoa.anoNascimento =  2006;
console.log(pessoa.anoNascimento);
console.log(pessoa);

// Deletando propriedades no objeto

delete pessoa.ultimoNome;
console.log(pessoa.ultimoNome);

console.log("");


//Verificando a existência de propriedades em Objetos

let resultado = ("anoNascimento" in pessoa);

console.log(resultado);

console.log("");

// Obejtos Aninhados

const pessoa2 = {
    nome : "Douglas",
    idade : 67,
    meuCarro:{
        marca:"Lamborgini",
        modelo:"Aventur",
        ano:2022,
    }
};

delete marca;

console.log(pessoa2);

console.log(pessoa2.meuCarro);

console.log("");

// Metodos em Objetos 

const carro = {
    marca: "Toyota",
    modelo: "Hilux",
    modelo:"2024",
    acelerar: function() {
        return `O ${this.marca}  ${this.modelo} acelerou`
    }
};

console.log(carro.acelerar());

console.log("");

// Adicionar metodo em objeto

carro.parar = function(){
    return  `O ${this.marca} ${this.modelo} estacionou`
}

console.log(carro.parar());

console.log("");




