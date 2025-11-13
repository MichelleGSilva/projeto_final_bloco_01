import { Produto } from "../model/Produto";
export interface ProdutoRepository {

    listar(): Produto[]
    buscarPorID(id: number): Produto | undefined
    cadastrar(produto: Produto): void
    atualizar(id: number, produto: Produto): void
    deletar(id: number): void
    vender(id: number, quantidade: number): boolean
    repor(id: number, quantidade: number): void
}