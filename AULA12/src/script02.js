// Objetos

// Construtores de Objetos

// const pessoa = {
//     nome : "Paulo",
//     ultimoNome : "Bibiano",
//     idade : 19 ,
//     altura : 1.73,
// }

// const pessoa2 = {
//     nome : "Platão",
//     mestre : "Socrates",
//     profissão : "Filósofo",
//     altura : 1.80,
// }

function Pessoa(nome, mestre, ultimoNome, trabalho, idade, altura) {
    this.nomePessoa = nome;
    this.trabalhoPessoa = trabalho;
    this.idadePessoa = idade;
    this.alturaPessoa;
}

const minhaPessoa = new Pessoa("Platão, Filosofo, 67, 1.80");

console.log(minhaPessoa);