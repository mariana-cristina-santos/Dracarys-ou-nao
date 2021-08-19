function escolha() {
    var personagens = "";
    while (personagens != 1 && personagens != 2 && personagens != 3) {
        personagens = prompt("Qual perosnagem deseja escolher? \n 1 - Hawise  \n 2 - Emerie \n 3- Aila");
        if (personagens == 1) {
            window.location.href = "./html/hawise.html";
        } else if (personagens == 2) {
            window.location.href = "./html/emerie.html";
        } else if (personagens == 3) {
            window.location.href = "./html/aila.html";
        } else {
            alert("Escolha somente dentre as duas opções disponiveis!");
        }
    }
}
