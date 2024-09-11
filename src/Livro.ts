export default class livro {
    constructor(titulo: string, autor: string, ISBN: string) {
        this.titulo = titulo
        this.autor = autor
        this.ISBN = ISBN
    }
    private titulo: string
    private autor: string
    private ISBN: string

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public getAutor(): string {
        return this.autor
    }
    public setAutor(autor:string): void{
        this.autor = autor 
    }
    public getIsbn(): string{
        return this.ISBN
    }
    public setIsbn(ISBN:string): void{
        this.ISBN = ISBN
    }

    
    exibirDetalhes(): void{
        console.log(`${this.titulo} com autoria de ${this.autor} com o codigo ${this.ISBN} `)
    }

}