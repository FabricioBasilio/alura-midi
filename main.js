function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

let teclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < teclas.length; contador++) {

    const tecla = teclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    

    tecla.addEventListener("click", function() {
        tocarSom(idAudio);
    });
}
