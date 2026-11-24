// Eventos

// Evento de click com o AddEventListener()

const meuParagarfo = document.querySelector("#ex1-p");
const meuBtn = document.querySelector("#ex1-btn");

meuBtn.addEventListener("click", () => {
    meuParagarfo.classList.toggle("estilo");
});


// Eventos Mouseover e Mouseout com o AddEventListener()

const meuParagarfo2 = document.querySelector("#ex2-p");

meuParagarfo2.addEventListener("mouseover", () => {
    meuParagarfo2.innerHTML = "O mouse está sobre o elemento"
})

meuParagarfo2.addEventListener("mouseout", () => {
    meuParagarfo.innerHTML = "O mouse está fora parágrafo.";
})

// Mostrando posição do mouse com o evento

const paragrafoX = document.querySelector("#ex3-p1");
const paragrafoY = document.querySelector("#ex3-p2");

document.addEventListener("mousemove", (event) => {
    paragrafoX.innerHTML = `X:${event.clientX};`;
});

document.addEventListener("mousemove", (event) => {
    paragrafoY.innerHTML = `Y: ${event.clientY};`
});


// 


