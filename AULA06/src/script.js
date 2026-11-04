// Condições Lógica

// if 

const hora = new Date().getHours();

if (hora<18){
    // alert("Bom Dia")
}

let pais = "Brasil";

let idade = "25";
let mensagem = "Você não pode dirigir";

// if(pais >= 18){
//     if (idade>=16){
//         mensagem = "Você pode dirigir"
//     }
// }

// 

if (pais === "Brasil" && idade >= 18) {
    mensagem = "Você pode dirigir";
} 

console.log(mensagem)


// if else

    const hora2 = new Date().getHours();
    let saudacao;

    if(hora2 >= 18){
        saudacao = "Boa Noite";
    } else {
        saudacao = "Bom Dia";
    }

    console.log(saudacao);

    // Else if

    const hora3 = new Date().getHours();
    let saudacao2;

    if (hora3 < 12){
        saudacao2 = "Bom Dia";
    } else if (hora3 < 18 && hora3 >= 12){
        saudacao2 = "Boa Tarde";
    } else{
        saudacao2 = "Boa Noite";
    }

    console.log(saudacao2);

    // if Ternário
    const  dia = new Date().getDate();
    
    let diaMes = (dia === 4)? "Hoje é dia 4 de Novembro" : "Hoje não é dia 4 de Novembro";

    console.log(diaMes);

    // 

    let diaSemana;
    const diaSemanaHoje = parseInt(prompt("Informe um número para o dia da semana : \n 0 = Domingo \n 1 = Segunda-Feira \n 2 = Terça-Feira \n 3 = Quarta-Feira \n 4 = Qunita-Feira \n 5 = Sexta-Feira \n 6 = Sabado"));

    switch(diaSemanaHoje){
        case 0:
            diaSemana = "Domingo";
            alert(diaSemana);
            break;

        case 1:
            diaSemana = "Segunda-Feira";
            alert(diaSemana);
            break;
        
        case 2:
            diaSemana = "Terça-Feira";
            alert(diaSemana);
            break;
            
        case 3:
            diaSemana = "Quarta-Feira";
            alert(diaSemana);
            break;
            
        case 4:
            diaSemana = "Qunita-Feira";
            alert(diaSemana);
            break;
            
        case 5:
            diaSemana = "Sexta-Feira";
            alert(diaSemana);
            break;
            
        case 6:
            diaSemana = "Sabado";
            alert(diaSemana);
            break; 
            
        default:
           diaSemana = "Informe um valor válido";
           alert(diaSemana);
    }

    
