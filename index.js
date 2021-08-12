function escolha(){
    personagens = prompt ("Qual perosnagem deseja escolher? \n 1 - Hawise  \n 2 - Emerie \n 3- Aila" )

    if (personagens==1){
        return location = ("./hawise.html");
    } else if (personagens==2){
        return location =("./emerie.html");
    } else if (personagens==3){
        return location =("./aila.html");
    }else {
        return alert ("Escolha somente dentre as três opções disponiveis!")    
        
    }
    
}
