function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("Para qual personagens deseja ir? \n 1 - Leste  \n 2 - Oeste");
        if (personagens == 1) {
            return (location = "../html/gameoveraila1.html");
        } else if (personagens == 2) {
            return (location = "../html/ailafase1.html");
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}

