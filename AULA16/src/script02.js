// Eventos

// Evento Keydown com AddEventListener()

const paragrafo1 = document.querySelector("#ex1-p");

const input1 = document.querySelector("#ex1-inpt");

input1.addEventListener("keydown", (evento) => {


    paragrafo1.innerHTML = `O usuário clicou em: ${evento.key};`
});
