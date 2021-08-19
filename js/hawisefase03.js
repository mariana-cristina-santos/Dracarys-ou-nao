function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2 && personagens != 3) {
        personagens = prompt("Em que lugar deseja atacar? \n 1 - Garganta do dragão \n 2 - Olho do dragão");
        if (personagens == 1) {
            window.location.href = "../html/gameoverhawise3.html";
        } else if (personagens == 2) {
            window.location.href = "../html/hawisefasefinal.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
