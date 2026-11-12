// Objetos

// Objeto simples no JavaScript

const carro = {
    marca: "Ferrari",
    modelo: "La",
    cor:"vermelho",
    ano:"2023"
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);

//  Exemplo: Obejto = Pessoa

const pessoa = {
  nome: "Paulo",
  peso: 60,
  altura: 1.73,
  registro: 99999999966,
  idade: 19,
  emprego: true,
  exibirInformacoes: function () {
    
    let saidaEmprego;

    if (this.emprego === true) {
      saidaEmprego = "Sim";
    } else {
      saidaEmprego = "Não";
    }
    
    return `
      Meu nome é: ${this.nome}
      Minha idade é: ${this.idade}
      Minha altura é: ${this.altura}
      Eu trabalho?: ${saidaEmprego}
      Eu peso: ${this.peso} kg
      E meu número de registro é: ${this.registro}
    `;
  },
};

console.log(pessoa.exibirInformacoes());

console.log(document);