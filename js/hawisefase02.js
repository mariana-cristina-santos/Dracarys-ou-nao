function qual(){
    direção = prompt ("O que deseja fazer? \n 1 - Atacar o dragão no solo \n 2 - Atacar o dragão quando ele estiver voando" )

    if (direção==1){
        window.location.href  = ("../html/gameoverhawise2.html");
    } else if (direção==2){
        window.location.href =  ("../html/hawisefase2.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
    
}