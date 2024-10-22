# 🌟 Web Carros

## 📝 Descrição

Este projeto é uma aplicação web inspirada no Webmotors, focada no gerenciamento e exibição de veículos. A plataforma permite que os usuários façam o cadastro de carros, enviem imagens e visualizem os detalhes de cada veículo através de um dashboard dinâmico e interativo. Usuários podem se registrar, fazer login e, após autenticados, cadastrar novos carros ou gerenciar seus veículos.

## 🚀 Funcionalidades

- **📱 Design Responsivo**: A interface é projetada para se adaptar perfeitamente a qualquer tamanho de tela, garantindo uma experiência consistente tanto em dispositivos móveis quanto em desktops.
- **🔐 Autenticação de Usuário**: Apenas usuários registrados e autenticados podem cadastrar e gerenciar os veículos.
- **🚗 Cadastro e Gerenciamento de Veículos**: Os usuários autenticados podem cadastrar carros, incluindo fotos e informações detalhadas, além de visualizar, editar ou excluir seus veículos.
- **📊 Dashboard Interativo**: O painel oferece uma visão geral de todos os carros cadastrados, permitindo que os usuários visualizem informações detalhadas sobre cada veículo.
- **🔍 Pesquisa e Filtro**: Funcionalidade de busca que permite aos usuários pesquisar veículos específicos, com filtros para facilitar a navegação entre as opções.
- **📂 Upload de Imagens**: Suporte para envio de imagens dos veículos, permitindo que os usuários apresentem seus carros com fotos de alta qualidade.


## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - ⚛️ ReactJS
  - 🟦 TypeScript
  - 🎨 TailwindCSS
  - 🔥 Firebase

## 🗂️ Estrutura do Projeto

### Frontend

- 📂 **`src/assets/`**: Contém as imagens usadas na aplicação.
- 📂 **`src/components/`**: Componentes reutilizáveis, como:
  - 📦 Container
  - 🗂️ Header
  - 🔤 Input
  - 🖥️ Layout
  - 📊 PanelHeader
- 📂 **`src/context/`**:
  - 🔑 AuthContext
- 📂 **`src/pages/`**: Páginas da aplicação:
  - 🚗 Car
  - 📈 Dashboard
  - 🏠 Home: Página inicial com carros a venda listados.
  - 🔐 Login
  - 📝 Register
- 📂 **`src/routes/`**: Definição das rotas da aplicação.
- 📂 **`src/services/`**: Lógica de funcionalidades e chamadas de API.
- 📂 **`src/App.tsx`**: Componente principal que organiza as rotas e o layout geral.
- 📂 **`src/index.css`**: Estilos globais da aplicação.
- 📂 **`src/main.tsx`**: Arquivo de entrada da aplicação.

## ⚙️ Instalação e Execução

1. **Clone o repositório do projeto:**
   ```bash
   git clone https://github.com/jhondharkyson520/webcarros.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd webcarros
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute a aplicação:**
   ```bash
   npm run dev
   ```
