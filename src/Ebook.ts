import livro from "./Livro";

export default class ebook extends livro{
    private tamanhoArquivo: number
    constructor(titulo: string, autor: string, ISBN: string,tamanhoArquivo: number) {
        super(titulo, autor, ISBN)
        this.tamanhoArquivo = tamanhoArquivo
    }
    public getTamanhoArq(): number {
        return this.tamanhoArquivo
    }
    public setTamanhoArq(tamanhoArquivo: number): void {
        this.tamanhoArquivo =tamanhoArquivo
    }
    public override exibirDetalhes(): void {
        console.log (this.tamanhoArquivo)

    }
}