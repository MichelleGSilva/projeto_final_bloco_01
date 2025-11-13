export class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;
    private _categoria: number;
    private _estoque: number;
    

    constructor(id: number, nome: string, preco: number, categoria: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
        this._estoque = estoque;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: number) {
        this._categoria = categoria;
    }

    public get estoque() {
        return this._estoque;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    public vender(quantidade: number): boolean {

        if (this._estoque < quantidade) {
            console.log("\n Estoque Insuficiente!");
            return false;
        }

        this._estoque -= quantidade;
        return true;
    }

    public reposicao(quantidade: number): void {
        this._estoque += quantidade;
    }

    public visualizar(): void {

        let categoriaItem: string = "";

        switch (this._categoria) {
            case 1:
                categoriaItem = "Roupa de Academia";
                break;
            case 2:
                categoriaItem = "Acessório Fitness";
                break;
            case 3:
                categoriaItem = "Outros Produtos";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Preço: R$ " + this._preco.toFixed(2));
        console.log("Categoria: " + categoriaItem);
        console.log("Estoque disponível: " + this._estoque);

    }

}