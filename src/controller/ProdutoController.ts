import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    buscarPorID(id: number): Produto | undefined {
     let produto = this.buscarNoArray(id);
    if (produto) {
        produto.visualizar();
        return produto;
    } else {
        console.log(colors.fg.bluestrong, "\nO Produto ID: " + id + 
            " não foi encontrado!", colors.reset);
        return undefined;
    }
}

    listar(): Produto[] {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
        return this.listaProdutos;
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, "\nO Produto ID: " + produto.id + 
            " foi cadastrado com sucesso!", colors.reset);
    }

    atualizar(id: number, produto: Produto): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO Produto ID: " + id + 
                " foi atualizado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nO Produto ID: " + id + 
                " não foi encontrado!", colors.reset);
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nO Produto ID: " + id + 
                " foi apagado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nO Produto ID: " + id + 
                " não foi encontrado!", colors.reset);
        }
    }

    public vender(id: number, quantidade: number): boolean {
    let produto = this.buscarNoArray(id);

    if (produto != null) {
        if (produto.vender(quantidade) == true) {
            console.log(colors.fg.green, `\nVenda de ${quantidade} unidade(s) do Produto ID: ${id} 
                realizada com sucesso!`, colors.reset);
            return true;
        } else {
            console.log(colors.fg.red, "\nEstoque insuficiente para realizar a venda!", colors.reset);
            return false;
        }
    } else {
        console.log(colors.fg.red, "\nO Produto ID: " + id + 
            " não foi encontrado!", colors.reset);
        return false;
    }
}
    public repor(id: number, qtd: number): void {
        let produto = this.buscarNoArray(id);

        if (produto != null) {
            produto.reposicao(qtd);
            console.log(colors.fg.green, `\nReposição de ${qtd} unidade(s) do Produto ID: ${id} 
                realizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, "\nO Produto ID: " + id + 
                " não foi encontrado!", colors.reset);
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }
}

