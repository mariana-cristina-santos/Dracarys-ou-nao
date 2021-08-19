function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("Qual arma deseja levar? \n 1 - Arco e Flecha  \n 2 - Duas espadas");
        if (personagens == 1) {
            return (location = "../html/emeriefase1.html");
        } else if (personagens == 2) {
            return (location = "../html/gameoveremerie.html");
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}

