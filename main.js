function tocarSomPom() {
    document.querySelector("#som_tecla_pom").play();
}

let teclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < 9) {
    teclas[contador].addEventListener("click", tocarSomPom);
    contador++;
}
