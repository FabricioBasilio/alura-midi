function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

let teclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < teclas.length) {

    const tecla = teclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    

    teclas[contador].addEventListener("click", function() {
        tocarSom(idAudio);
    });
    contador++;
}
