function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("O que deseja fazer? \n 1 - Atacar o dragão na barriga \n 2 - Atacar o dragão na garganta");
        if (personagens == 1) {
            window.location.href = "../html/emeriefasefinal.html";
        } else if (personagens == 2) {
            window.location.href = "../html/emeriefasefinal.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
