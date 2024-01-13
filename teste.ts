// exemplo.ts
class Mensagem {
    private conteudo: string;

    constructor(conteudo: string) {
        this.conteudo = conteudo;
    }

    exibirMensagem(): void {
        console.log(this.conteudo);
    }
}

// Crie uma instância da classe Mensagem
const minhaMensagem = new Mensagem("Olá, TypeScript!");

// Exiba a mensagem no console
minhaMensagem.exibirMensagem();
