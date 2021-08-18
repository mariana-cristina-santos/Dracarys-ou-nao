function qual(){
    direção = prompt ("Para qual lugar deseja ir? \n 1 - Local fechado  \n 2 - Local mais amplo" )

    if (direção==1){
        window.location.href  = ("../html/gameoverhawise1.html");
    } else if (direção==2){
        window.location.href =  ("../html/hawisefase1.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
    
}