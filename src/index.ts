import Biblioteca from "./Biblioteca";
import leia  from "readline-sync"

var livros =new Biblioteca();

var seleção = 0;

do{
    seleção = leia.keyInSelect([ "AdcLivro","removerLivros","buscaLivro","mostrarLista"]) + 1;

    console.log("---------------MENU----------------")

    switch (seleção) {
        case 1:
            livros.AdcLivro();
            break;
        case 2:
            livros.removerLivro();
            break;
        case 3:
            livros.buscaLivro();
            break;
        case 4:
           livros.mostrarLista();
            break;
    }



}while(seleção !== 0);