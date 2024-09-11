import leia from "readline-sync"
import livroFisico from "./LivroFisico"
import ebook from "./Ebook"
import livro from "./Livro"


export default class Biblioteca {
    private Novolivro: livro[] = []

    public Adc(livro: livro) {
        this.Novolivro.push(livro)
    }
    public AdcLivro() {
        console.log("-----------cadastras livros -----------")
        var titulo = leia.question("Escreva o titulo do livro: ")
        var autor = leia.question("Escreva o nome do autor: ")
        var ISBN = leia.question("Digite o codigo do livro: ")
        var formatoDoLivro = leia.keyInSelect(["fisico", "ebook"]) + 1;



        if (formatoDoLivro === 1) {
            var numeroDePagina = leia.questionInt("Digite o numero de pag: ")
            var Novolivro = new livroFisico(titulo, autor, ISBN, numeroDePagina)
            this.Adc(Novolivro)
            console.log(`${Novolivro} foi adicionado com sucesso!!`)
        } else {
            var tamanhoArquivo = leia.questionInt("Digite o tamanho do aquivo: ")
            var outrolivro = new ebook(titulo, autor, ISBN, tamanhoArquivo)
            this.Adc(outrolivro)
            console.log(`${outrolivro} foi adicionado com sucesso!!`)
        }
    }

    public buscaLivro(): void {
        var nomeArquivo = leia.question("Escreva o nome do arquivo: ")

        var arquivo = this.Novolivro.findIndex(conta => conta.getTitulo() === nomeArquivo);

        if (arquivo === -1) {
            console.log("A CONTA DE DESTINO NÃO EXISTE")
            return
        } else {
            console.table(this.Novolivro[arquivo])
        }
    }

    public removerLivro(): void {
        console.log("------------remove conta-------------")
        var nomelivro = leia.question("Escreva o nome do livro: ")

        for (var i = 0; i < this.Novolivro.length; i++) {
            if (nomelivro === this.Novolivro[i].getTitulo()) {
                this.Novolivro.slice(i, 1);
                console.log(`deletado ${nomelivro} com sucesso!!`)
                return
            }
            console.log(`NAO FOI ENCONTRADO NENHUM LIVRO COM O NOME ${nomelivro}`)
        }
    }
    public mostrarLista(): void{
        console.table(this.Novolivro)
    }
}