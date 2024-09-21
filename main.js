function tocarSomPom() {
    document.querySelector("#som_tecla_pom").play();
}

function tocarSomClap() {
    document.querySelector("#som_tecla_clap").play();
}

document.querySelector(".tecla_pom").addEventListener("click", tocarSomPom);

document.querySelector(".tecla_clap").addEventListener("click", tocarSomClap);

