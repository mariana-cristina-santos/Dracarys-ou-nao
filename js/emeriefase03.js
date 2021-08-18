function qual(){
    direção = prompt ("Para qual direção deseja ir? \n 1 - Atacar o dragão na barriga \n 2 - Atacar o dragão na garganta" )

    if (direção==1){
        window.location.href  = ("../html/emeriefasefinal.html");
    } else if (direção==2){
        window.location.href =  ("../html/emeriefasefinal.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
    
}