import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Produto } from './src/model/Produto';

export function main() {

    let opcao: number;

    const produto: Produto = new Produto(1, "Camiseta Regata Algodão", 79.90, 1, 10);
    produto.visualizar();
    produto.vender(1);
    produto.visualizar();
    produto.reposicao(1);
    produto.visualizar();

    

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
        console.log("            6 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.redstrong,"\nCROSSFITERS - Obrigado(a) por usar nosso sistema!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellowstrong,"\n\nCadastrar Produto\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.yellowstrong, "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.yellowstrong, "\n\nBuscar produto por ID\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.yellowstrong, "\n\nAtualizar dados do Produto\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.yellowstrong, "\n\nApagar um Produto\n\n", colors.reset);

                keyPress()
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