function escolha(){
    personagens = prompt ("Qual perosnagem deseja escolher? \n 1 - Hawise  \n 2 - Emerie \n 3- Aila" )

    

    if (personagens==1){
        window.location.href = ("./html/hawise.html");
    } else if (personagens==2){
        window.location.href =  ("./html/emerie.html");
    } else if (personagens==3){
        window.location.href =  ("./html/aila.html");
    
    }else {
        return alert ("Escolha somente dentre as três opções disponiveis!")    
        
    }
    
}
