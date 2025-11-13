import readlinesync = require("readline-sync");
import { RoupaAcademia } from './src/model/RoupaAcademia';
import { ProdutoController } from './src/controller/ProdutoController';
import { colors } from './src/util/Colors';

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, preco, categoria, estoque, quantidade: number;
    let nome, tamanho, tecido: string;
    const tiposProdutos = ['Roupa de Academia', 'Acessório Fitness'];

    console.log("\nCriar Produtos de Exemplo\n");

    let p1: RoupaAcademia = new RoupaAcademia(produtos.gerarId(), "Camiseta Dry Fit", 99.90, 1, 20, "M", "Poliéster");
    produtos.cadastrar(p1);

    let p2: RoupaAcademia = new RoupaAcademia(produtos.gerarId(), "Regata Algodão", 79.90, 1, 15, "G", "Algodão");
    produtos.cadastrar(p2);

    produtos.listar();

    while (true) {

        console.log(colors.bg.white, colors.fg.redstrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("          CROSSFITERS - ROUPAS DE ACADEMIA           ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar um Produto                    ");
        console.log("            6 - Vender Produto                       ");
        console.log("            7 - Reposição de Estoque                 ");
        console.log("            8 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8) {
            console.log(colors.fg.redstrong,"\nCROSSFITERS - Obrigado(a) por usar nosso sistema!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellowstrong,"\n\nCadastrar Produto\n\n", colors.reset);

                console.log("Digite o Nome do Produto: ");
                nome = readlinesync.question("");

                console.log("Digite o Preço do Produto (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Categoria: ");
                categoria = readlinesync.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                console.log("Digite o Estoque inicial: ");
                estoque = readlinesync.questionInt("");

                console.log("Digite o Tamanho (P/M/G): ");
                tamanho = readlinesync.question("");

                console.log("Digite o Tecido: ");
                tecido = readlinesync.question("");

                produtos.cadastrar(new RoupaAcademia(produtos.gerarId(), nome, preco, categoria, estoque, tamanho, tecido));

                keyPress();
                break;

            case 2:
                console.log(colors.fg.yellowstrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                produtos.listar();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.yellowstrong, "\n\nBuscar produto por ID\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");
                produtos.buscarPorID(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.yellowstrong, "\n\nAtualizar dados do Produto\n\n", colors.reset);

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log("Digite o Nome do Produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o Preço do Produto (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite o Estoque: ");
                    estoque = readlinesync.questionInt("");

                    console.log("Digite o Tamanho (P/M/G): ");
                    tamanho = readlinesync.question("");

                    console.log("Digite o Tecido: ");
                    tecido = readlinesync.question("");

                produtos.atualizar(id, new RoupaAcademia(id, nome, preco, produto.categoria, estoque, tamanho, tecido));
                } else {
                    console.log(colors.fg.red, "\nO Produto ID: " + id + " não foi encontrado!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.yellowstrong, "\n\nApagar um Produto\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");
                produtos.deletar(id);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nVender Produto\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");
                console.log("Digite a quantidade a vender: ");
                quantidade = readlinesync.questionInt("");
                produtos.vender(id, quantidade);

                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nRepor Estoque\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");
                console.log("Digite a quantidade a repor: ");
                quantidade = readlinesync.questionInt("");
                produtos.repor(id, quantidade);
                
                keyPress();
                break;
            default:
                console.log(colors.fg.yellowstrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Michelle Gonçalves Silva ");
    console.log("Generation Brasil - michelles@genstudents.org");
    console.log("https://github.com/MichelleGSilva");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();