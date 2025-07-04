"use strict";
const pessoa = {
    nome: "Vitória",
    idade: "35"
};
console.log("---");
console.log(pessoa);
console.log("---");
function desejarBoasVindas(nome) {
    console.log(`Boas vindas ${nome}`);
}
desejarBoasVindas("Vitória");
console.log("---");
function obterMensagemBoasVindas(nome) {
    return `Boas vindas ${nome}`;
}
const mensagemBoasVindas = obterMensagemBoasVindas("Vitória");
console.log(mensagemBoasVindas);
console.log("---");
function obterOutraMensagemBoasVindas(nome, idade, telefone) {
    let mensagem = `Boas vindas ${nome}, você tem ${idade} anos de idade`;
    if (telefone) {
        mensagem = mensagem + ` e seu número de telefone é ${telefone}`;
    }
    return mensagem;
}
const outraMensagemBoasVindas = obterOutraMensagemBoasVindas("Vitória", "33");
console.log(outraMensagemBoasVindas);
console.log("---");
