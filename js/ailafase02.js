function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("O que deseja fazer? \n 1 - Atirar de perto  \n 2 - Atirar de longe");
        if (personagens == 1) {
            return (location = "../html/ailafase2.html");
        } else if (personagens == 2) {
            return (location = "../html/gameoveraila2.html");
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
