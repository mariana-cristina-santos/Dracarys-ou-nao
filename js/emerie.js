function qual(){
    direção = prompt ("Qual arma deseja levar? \n 1 - Arco e Flecha  \n 2 - Duas espadas" )

    if (direção==1){
        return location = ("../html/emeriefase1.html");
    } else if (direção==2){
        return location =("../html/gameoveremerie.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
    
}