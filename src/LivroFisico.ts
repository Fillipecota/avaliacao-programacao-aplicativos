import livro from "./Livro";

export default class livroFisico extends livro {
    private numeroDePagina: number
    constructor(titulo: string, autor: string, ISBN: string,numeroDePagina: number) {
        super(titulo, autor, ISBN)
        this.numeroDePagina = numeroDePagina
    }
    public getNumDePag(): number {
        return this.numeroDePagina
    }
    public setNumDePag(numeroDePagina: number): void {
        this.numeroDePagina = numeroDePagina
    }
    public override exibirDetalhes(): void {
        console.log(this.exibirDetalhes)

    }
}