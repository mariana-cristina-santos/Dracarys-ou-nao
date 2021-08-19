function qual() {
    var personagens = "";
    while (personagens != 1 && personagens != 2) {
        personagens = prompt("Para qual lugar deseja ir? \n 1 - Local fechado  \n 2 - Local mais amplo" )
        if (personagens == 1) {
            window.location.href = "../html/gameoverhawise1.html";
        } else if (personagens == 2) {
            window.location.href = "../html/hawisefase1.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
