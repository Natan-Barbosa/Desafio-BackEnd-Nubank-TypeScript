# Desafio Backend - Sistema de Clientes e Contatos

Este projeto foi desenvolvido como parte de um desafio técnico para criar uma API REST completa para gerenciamento de clientes e seus contatos utilizando NestJS, TypeORM e MySQL.

## 🎯 Objetivos do Desafio

O desafio consistiu em desenvolver uma aplicação que atendesse aos seguintes requisitos técnicos:

- ✅ Cadastro de Cliente (POST /clientes)
- ✅ Cadastro de Contato (POST /contatos) associado a um cliente existente
- ✅ Listagem de todos os clientes com seus contatos (GET /clientes)
- ✅ Listagem de contatos de um cliente específico (GET /clientes/{id}/contatos)
- ✅ Uso de Spring Boot + Spring Data JPA (Adaptado para NestJS + TypeORM)
- ✅ Entidades Cliente e Contato com relacionamento OneToMany / ManyToOne

## 🚀 Tecnologias Utilizadas

- **Runtime:** Node.js 22.12.0
- **Framework:** NestJS 11.0.1
- **ORM:** TypeORM 0.3.25
- **Banco de Dados:** MySQL 2 (mysql2 3.14.2)
- **Validação:** class-validator 0.14.2 & class-transformer 0.5.1
- **Documentação:** Swagger/OpenAPI (@nestjs/swagger 11.2.0)
- **Linguagem:** TypeScript 5.7.3

## 📁 Estrutura do Projeto

```
src/
│── config/
├── client/
│   ├── client.controller.ts
│   ├── client.dto.ts
│   ├── client.entity.ts
│   ├── client.module.ts
│   └── client.service.ts
├── contacts/
│   ├── contact.entity.ts
│   ├── contacts.controller.ts
│   ├── contacts.dto.ts
│   ├── contacts.module.ts
│   └── contacts.service.ts
├── controllers/
├── test/
├── app.module.ts
└── main.ts
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 22.12.0
- MySQL Server
- npm ou yarn

### Passos para instalação

1. **Clone o repositório:**

```bash
git clone git@github.com:Natan-Barbosa/Desafio-BackEnd-Nubank-TypeScript.git
cd Desafio-BackEnd-Nubank-TypeScript
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nubank_db
```

## 🚀 Execução

### Desenvolvimento

```bash
npm run start:dev
```

### Produção

```bash
npm run build
npm run start:prod
```

### Acessar Documentação da API

Após iniciar a aplicação, acesse a documentação interativa do Swagger em:

```
http://localhost:3000/api
```

### Testes

```bash
# Testes unitários
npm run test

# Testes com coverage
npm run test:cov

# Testes e2e
npm run test:e2e
```

## 📚 Documentação da API

### Swagger/OpenAPI

A API possui documentação interativa completa disponível através do Swagger UI:

**URL:** http://localhost:3000/api

A documentação inclui:

- Descrição detalhada de todos os endpoints
- Exemplos de requisições e respostas
- Modelos de dados (schemas)
- Interface para testar os endpoints diretamente no navegador

### Endpoints da API

### Clientes

#### Criar Cliente

```http
POST /client
Content-Type: application/json

{
  "clientName": "João Silva",
  "cnpj": "joao@email.com"
}
```

#### Listar Todos os Clientes com Contatos

```http
GET /client
```

#### Listar Contatos de um Cliente Específico

```http
GET /client/{id}
```

### Contatos

#### Criar Contato

```http
POST /contacts
Content-Type: application/json

{
  "contactName": "Maria Santos",
  "contactNumber": "(11) 99999-9999",
  "clientID": 1
}
```

## 🧪 Testes

O projeto inclui uma suite completa de testes:

- **Testes Unitários:** Testam a lógica de negócio dos services e controllers
- **Testes de Integração:** Testam os endpoints da API
- **Testes E2E:** Testam o fluxo completo da aplicação

Para executar os testes:

```bash
npm run test        # Testes unitários
npm run test:e2e    # Testes end-to-end
npm run test:cov    # Testes com coverage
```

## 📋 Scripts Disponíveis

- `npm run build` - Compila o projeto TypeScript
- `npm run start` - Inicia a aplicação
- `npm run start:dev` - Inicia em modo desenvolvimento com hot-reload
- `npm run start:debug` - Inicia em modo debug
- `npm run lint` - Executa o linter ESLint
- `npm run format` - Formata o código com Prettier

## 🔧 Configurações Adicionais

### Swagger/OpenAPI

Documentação automática da API configurada com @nestjs/swagger, acessível em `http://localhost:3000/api` com interface interativa para testar endpoints.

### ESLint e Prettier

O projeto está configurado com ESLint e Prettier para manter a qualidade e consistência do código.

### TypeORM

Configurado para trabalhar com MySQL e gerenciar automaticamente as entidades e relacionamentos.

## 📝 Considerações Técnicas

- **Validação:** Utilização de class-validator para validação de DTOs
- **Transformação:** class-transformer para serialização/deserialização
- **Documentação:** Swagger/OpenAPI para documentação automática e interativa da API
- **Relacionamentos:** Implementação correta do relacionamento OneToMany/ManyToOne
- **Tratamento de Erros:** Implementação de tratamento adequado de erros
- **Documentação:** Código bem documentado e estruturado

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico.

---

**Desenvolvido como parte do desafio técnico backend**
