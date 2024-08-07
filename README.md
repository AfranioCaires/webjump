# Documentação

# Sumario

1. [Executando o Projeto](#1-executando-o-projeto)
2. [Tecnologias Utilizadas](#2-tecnologias-utilizadas)
   1. [Tailwind CSS](#21-tailwind-css)
   2. [Class Variance Authority (CVA) e CLSX](#22-class-variance-authority-cva-e-clsx)
   3. [JSON Server](#23-json-server)
   4. [TypeScript](#24-typescript)
3. [Estrutura de Pastas](#3-estrutura-de-pastas)
   1. [src/components](#31-srccomponents)
   2. [src/context](#32-srccontext)
   3. [src/hooks](#33-srchooks)
   4. [src/pages](#34-srcpages)
   5. [src/services](#35-srcservices)
   6. [src/utils](#36-srcutils)
4. [Testes](#4-testes)

## 1. Executando o Projeto

1. Antes de iniciar o projeto, certifique-se de que todas as dependências estão instaladas. Execute o comando:

```bash
npm install
```

2. **Inicie o servidor de mock API:** Execute o comando `npm run server` para iniciar o servidor que simula a API.

```bash
  npm run server
```

O servidor está rodando na porta `8888`. É possível mudar as rotas e endpoints nos arquivos `db.json` e `routes.json`.

3. **Inicie o servidor de desenvolvimento:** Execute o comando `npm run dev` para iniciar o ambiente de desenvolvimento da aplicação.

```bash
  npm run dev
```

Após a execução, o projeto está funcionando na porta `5173` no localhost.

## 2. Tecnologias Utilizadas

### 2.1 Tailwind CSS

#### Motivo da Escolha

- Simplificação do desenvolvimento de interfaces.
- Manutenção facilitada.
- Implementação facilitada de um Design System.

#### Benefícios Técnicos

- **Redução de Código Duplicado:** Classes CSS reutilizáveis.
- **Otimização:** Remoção de classes não utilizadas no build, resultando em um arquivo CSS mínimo.
- **Extensão Conferier:** Padronização da ordem das classes Tailwind para consistência e legibilidade do código.

#### Configuração

Configuração de cores, fontes de breackpoints do projeto:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        red1: "#CB0D1F",
        red2: "#ED1A39",
        red3: "#E50019",
        black1: "#231F20",
        black2: "#000000",
        black3: "#1A1818",
        gray1: "#E2DEDC",
        gray2: "#959595",
        gray3: "#808185",
        gray4: "#ACACAC",
        gray5: "#626262",
        gray6: "#8E8E8E",
        teal1: "#00A8A9",
        teal2: "#27A3A9",
        blue1: "#1E2B50",
        orange1: "#F26324",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
```

## 2.2 Class Variance Authority (CVA) e CLSX

### Class Variance Authority (CVA)

**O que é:**
Class Variance Authority (CVA) é uma biblioteca que facilita a criação de componentes com variantes dinâmicas em projetos que utilizam Tailwind CSS. Ela permite a definição de variantes de estilo para componentes através de props, ajudando a manter o código limpo e modular.

**Motivo da Escolha:**

- **Flexibilidade:** Permite definir variantes para componentes (por exemplo, um botão que pode ser primário ou secundário) de maneira declarativa.
- **Modularidade:** Facilita a criação de componentes que podem mudar de aparência com base em suas props, sem precisar duplicar o código de estilos.

**Benefícios Técnicos:**

- **Consistência:** Garante que os estilos das variantes sejam aplicados corretamente sem conflitos.

### CLSX

**O que é:**
CLSX é uma biblioteca auxiliar que simplifica a combinação de classes condicionais em JavaScript/TypeScript. É especialmente útil para projetos que utilizam Tailwind CSS, onde a composição de várias classes pode se tornar complexa.

**Motivo da Escolha:**

- **Facilidade de Uso:** Simplifica a lógica para adicionar ou remover classes com base em condições.
- **Legibilidade:** Melhora a clareza do código ao lidar com múltiplas classes CSS condicionais.

**Benefícios Técnicos:**

- **Prevenção de Erros:** Reduz a possibilidade de erros ao manipular classes CSS manualmente.

## 2.3 JSON Server

**O que é:**
JSON Server é uma ferramenta que cria uma API RESTful fake a partir de um arquivo JSON. É muito útil durante o desenvolvimento para simular interações com uma API real sem a necessidade de um servidor backend completo.

**Motivo da Escolha:**

- **Simulação Rápida:** Permite criar uma API simulada rapidamente, facilitando o desenvolvimento frontend.
- **Desenvolvimento Independente:** Permite que a equipe de frontend trabalhe de forma independente da equipe de backend, reduzindo dependências e aumentando a eficiência.

**Benefícios Técnicos:**

- **Facilidade de Configuração:** Configuração rápida com um arquivo JSON e comandos simples.
- **Ambiente de Desenvolvimento:** Proporciona um ambiente de desenvolvimento mais realista e interativo para o frontend.

## 2.4 TypeScript

**O que é:**
TypeScript é uma linguagem de programação que estende o JavaScript com tipagem estática opcional. Ajuda a identificar erros em tempo de desenvolvimento e melhora a qualidade do código.

**Motivo da Escolha:**

- **Segurança de Tipos:** Proporciona uma verificação de tipos em tempo de compilação, ajudando a identificar erros antes da execução.
- **Melhoria na Manutenção:** Facilita a refatoração e manutenção do código, especialmente em projetos grandes e complexos.

**Benefícios Técnicos:**

- **Detecção Precoce de Erros:** Ajuda a detectar erros de tipo antes da execução, reduzindo o número de bugs.
- **Integração com Ferramentas:** Melhora a integração com IDEs e ferramentas de desenvolvimento, oferecendo autocompletar e verificação de tipos.

## 3. Estrutura de Pastas

### 3.1 `src/components`

**Descrição:**
A pasta `components` têm seus componentes dividos em: `primitives` e `composites`.

- **Primitives:** Contém componentes básicos e reutilizáveis, como botões e textos, que não dependem de outros componentes para serem utilizados. Os componentes `primitives` estão na pasta `/ui`
- **Composites:** Contém componentes mais complexos que combinam múltiplos componentes primitivos, como cabeçalhos e rodapés.

### 3.2 `src/context`

**Descrição:**
A pasta `context` armazena contextos da aplicação para compartilhamento de dados em toda a árvore de componentes sem a necessidade de passar props manualmente.

- **Categoria Context:** Um contexto para gerenciar e fornecer informações sobre categorias em toda a aplicação, reduzindo chamadas redundantes à API.
- **Providers:** Um diretório para encapsular todos os contextos da aplicação, evitando a poluição do arquivo principal (`main`).

### 3.3 `src/hooks`

**Descrição:**
A pasta `hooks` contém hooks customizados que encapsulam lógica reutilizável, como a paginação de dados.

### 3.4 `src/pages`

**Descrição:**
A pasta `pages` é responsável pelo gerenciamento das rotas da aplicação, contendo arquivos que definem rotas estáticas e dinâmicas e organizam a navegação da aplicação.

### 3.5 `src/services`

**Descrição:**
A pasta `services` define serviços que interagem com APIs e outras fontes de dados externas, incluindo a configuração do Axios para chamadas HTTP.

- **Serviços de API:** Centraliza a configuração de endpoints e instâncias de API, evitando a exposição direta dos detalhes da API.

### 3.6 `src/utils`

**Descrição:**
A pasta `utils` contém funções auxiliares e utilitárias que são usadas em diferentes partes da aplicação.

## 4. Testes

Os testes da aplicação foram feitos utilizando o Vitest: uma ferramenta de testes utilizada para garantir a qualidade e a funcionalidade do código. É especialmente integrada com projetos que usam o bundler Vite.

**Motivo da Escolha:**

- **Integração com Vite:** O Vitest é compatível com o bundler Vite, facilitando a configuração e a execução dos testes.
- **Eficiência:** Oferece uma solução eficiente para testes, sem a necessidade de bibliotecas adicionais.

**Benefícios Técnicos:**

- **Simples Configuração:** Configuração direta e integração com o ambiente de desenvolvimento existente.
- **Desempenho:** Testes rápidos e eficientes devido à integração com Vite.

### 6.2 Execução de Testes

**Descrição:**
Para garantir que o código esteja funcionando corretamente, é necessário executar testes com Vitest.

1. **Executar Testes:** Use o comando `npm run test` para executar os testes e verificar a funcionalidade do código.

```bash
  npm run test
```
