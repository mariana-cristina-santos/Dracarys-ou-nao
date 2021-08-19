function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("O que deseja fazer? \n 1 - Atacar de perto  \n 2 - Atacar de longe");
        if (personagens == 1) {
            return (location = "../html/gameoveraila3.html");
        } else if (personagens == 2) {
            return (location = "../html/ailafasefinal.html");
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
