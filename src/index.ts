const pessoa: {
    nome: string,
    idade: string
} = {
    nome: "Vitória",
    idade: "35"
}
console.log("---")
console.log(pessoa)
console.log("---")
function desejarBoasVindas(nome: string): void{
    console.log(`Boas vindas ${nome}`)
}
desejarBoasVindas("Vitória")
console.log("---")
function obterMensagemBoasVindas(nome: string): string{
    return `Boas vindas ${nome}`
}
const mensagemBoasVindas = obterMensagemBoasVindas("Vitória")
console.log(mensagemBoasVindas)
console.log("---")
function obterOutraMensagemBoasVindas(nome: string, idade: string, telefone?: string): string{
    let mensagem = `Boas vindas ${nome}, você tem ${idade} anos de idade`
    if (telefone){
        mensagem = mensagem + ` e seu número de telefone é ${telefone}`
    }
    return mensagem
}
const outraMensagemBoasVindas = obterOutraMensagemBoasVindas("Vitória","33")
console.log(outraMensagemBoasVindas)
console.log("---")
interface Pessoa {
    nome: string;
    idade: number;
    dizerOi(): void;
}
interface Paciente {
    nome: string;
    idade: number;
    readonly cpf: string;
    internado: boolean;
    endereco?: Endereco;
}
interface Endereco {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
}
const paciente1: Paciente = {
    nome: "Matheus",
    cpf: "5555555555",
    idade: 23,
    internado: false
};
