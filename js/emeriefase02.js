function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("Para qual personagens deseja ir? \n 1 - Atacar o dragão no solo \n 2 - Atacar o dragão quando ele estiver voando");
        if (personagens == 1) {
            window.location.href = "../html/emeriefase2.html";
        } else if (personagens == 2) {
            window.location.href = "../html/gameoveremerie2.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}

