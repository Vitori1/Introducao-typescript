# Introducao-typescript
Projeto TypeScript - Boas-vindas e Interface de Paciente
Este é um pequeno projeto em TypeScript com foco em variáveis tipadas, funções, parâmetros opcionais e o uso de interfaces.

📋 Descrição
O projeto demonstra:

Definição de objetos com tipos explícitos.

Criação e uso de funções com parâmetros obrigatórios e opcionais.

Uso de interfaces (Pessoa, Paciente, Endereco) para garantir a estrutura de objetos complexos.

📁 Estrutura do Código
🔸 Objeto pessoa
ts
Copiar
Editar
const pessoa: { nome: string; idade: string } = {
  nome: "Vitória",
  idade: "35"
};
Exibe os dados da pessoa no console.

🔸 Funções de boas-vindas
desejarBoasVindas(nome: string): void

Mostra uma saudação simples no console.

obterMensagemBoasVindas(nome: string): string

Retorna uma mensagem de saudação como string.

obterOutraMensagemBoasVindas(nome: string, idade: string, telefone?: string): string

Retorna uma saudação personalizada com idade e, opcionalmente, o telefone.

🔸 Interfaces
Pessoa
ts
Copiar
Editar
interface Pessoa {
  nome: string;
  idade: number;
  dizerOi(): void;
}
Define uma pessoa com nome, idade e um método.

Paciente
ts
Copiar
Editar
interface Paciente {
  nome: string;
  idade: number;
  readonly cpf: string;
  internado: boolean;
  endereco?: Endereco;
}
Define um paciente com CPF somente leitura e um endereço opcional.

Endereco
ts
Copiar
Editar
interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
}
Estrutura para o endereço do paciente.

🔸 Exemplo de uso
ts
Copiar
Editar
const paciente1: Paciente = {
  nome: "Matheus",
  cpf: "5555555555",
  idade: 23,
  internado: false
};
✅ Tecnologias Utilizadas
TypeScript

🚀 Como executar
Instale o TypeScript se ainda não tiver:

bash
Copiar
Editar
npm install -g typescript
Compile o código:

bash
Copiar
Editar
tsc index.ts
Execute o JavaScript gerado:

bash
Copiar
Editar
node index.js
📝 Autor
Feito por Vitória 👩‍💻
