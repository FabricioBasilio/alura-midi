function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

let teclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < teclas.length; contador++) {

    const tecla = teclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`; 

    tecla.addEventListener("click", function() {
        tocarSom(idAudio);
    });

    tecla.addEventListener("keydown", function(evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
        tecla.classList.add("ativa");
        }
    });

    tecla.addEventListener("keyup", function() {
        tecla.classList.remove("ativa");
    });

    
}
