import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
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
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nCROSSFITERS - Obrigado(a) por usar nosso sistema!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados do Produto\n\n");

                break;
            case 5:
                console.log("\n\nApagar um Produto\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();