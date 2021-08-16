function qual(){
    direção = prompt ("Em que lugar deseja atacar? \n 1 - Garganta do dragão \n 2 - Olho do dragão" )

    if (direção==1){
        window.location.href  = ("../html/gameoverhawise3.html");
    } else if (direção==2){
        window.location.href =  ("../html/hawisefasefinal.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
    
}