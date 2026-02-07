# Prompt-360

Prompt-360 é um projeto em desenvolvimento cujo objetivo é facilitar a criação, teste e evolução de prompts para Inteligência Artificial, de forma centralizada e prática. A ideia é permitir que usuários e equipes experimentem prompts, melhorem instruções com apoio de IA e organizem esse conhecimento em um único ambiente.

## 📁 Estrutura do projeto

```
PROMPT-360/
├── back-end/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── front-end/
│   ├── index.html
│   └── laboratorio.html
```

### Back-end

* Desenvolvido em **Node.js**
* Responsável por iniciar o servidor e futuramente concentrar a lógica de comunicação com APIs de IA
* Arquivo principal: `server.js`

### Front-end

* Desenvolvido inicialmente em **HTML puro**
* `index.html`: tela inicial do projeto
* `laboratorio.html`: ambiente para testes e experimentação de prompts

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

* Node.js instalado (versão 18+ recomendada)
* Gerenciador de pacotes npm

### Passos

1. Acesse a pasta do back-end:

   ```bash
   cd back-end
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   node server.js
   ```

   ou

   ```bash
   npm start
   ```

4. Abra os arquivos do front-end no navegador:

   * `front-end/index.html`
   * `front-end/laboratorio.html`

## 🎯 Objetivo do MVP

* Disponibilizar um laboratório simples para testar prompts
* Permitir iteração e melhoria de prompts com apoio de IA
* Criar a base para futuramente:

  * Cadastro de equipes
  * Versionamento de prompts
  * Biblioteca compartilhada de prompts validados

## 🛠️ Tecnologias utilizadas

* Node.js
* JavaScript
* HTML

## 📌 Status do projeto

🚧 Em desenvolvimento (MVP)

---

Este projeto está sendo construído de forma incremental, com foco em aprendizado, experimentação e evolução contínua.