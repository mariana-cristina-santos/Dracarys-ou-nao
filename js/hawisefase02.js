function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("O que deseja fazer? \n 1 - Atacar o dragão no solo \n 2 - Atacar o dragão quando ele estiver voando");
        if (personagens == 1) {
            window.location.href = "../html/gameoverhawise2.html";
        } else if (personagens == 2) {
            window.location.href = "../html/hawisefase2.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
