import { Produto } from "./Produto";

export class RoupaAcademia extends Produto {
    private _tamanho: string;
    private _tecido: string;

    constructor(id: number, nome: string, preco: number, categoria: number, estoque: number,
        tamanho: string, tecido: string){
    super(id, nome, preco, categoria,estoque)
    this._tamanho = tamanho
    this._tecido = tecido
}

    public get tamanho () {
        return this._tamanho
 }
    public set tamanho(tamanho:string) {
        this._tamanho= tamanho
    } 

        public get tecido () {
        return this._tecido
 }
    public set tecido(tecido:string) {
        this._tecido = tecido
    } 

    public vender(quantidade: number): boolean {

        if (this.estoque < quantidade) {
            console.log("\nEstoque Insuficiente para Venda!")
            return false
        }

        this.estoque = this.estoque - quantidade
        console.log(`Venda Realizada: ${quantidade} unidade(s) de ${this.nome}`)
        return true
    }

    public visualizar(): void {
        super.visualizar()
        console.log("Tamanho " + this._tamanho)
        console.log("Tecido " + this._tecido)
    }
 }