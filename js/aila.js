function qualaila(){
    direção = prompt ("Para qual direção deseja ir? \n 1 - Leste  \n 2 - Oeste" )

    if (direção==1){
       return location =   ("../html/ailafase2.html");
    } else if (direção==2){
        return location  =("../html/gameover.html");
    }else {
        return alert ("Escolha somente dentre as duas opções disponiveis!")    
        
    }
}