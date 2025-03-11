# Web Carros

## Descrição

O **Web Carros** é uma aplicação web inspirada na Webmotors, projetada para permitir o cadastro, visualização e gerenciamento de carros. A aplicação oferece uma interface amigável para que usuários possam se cadastrar, fazer login e gerenciar anúncios de veículos. Apenas usuários autenticados podem cadastrar e gerenciar carros. Além disso, a aplicação conta com um **dashboard** que exibe as informações detalhadas dos veículos cadastrados, com a possibilidade de visualizar fotos e descrições completas de cada carro.

## Funcionalidades

- ** Design Responsivo**: A interface é projetada para se adaptar perfeitamente a qualquer tamanho de tela, garantindo uma experiência consistente tanto em dispositivos móveis quanto em desktops.
- ** Autenticação de Usuário**: Apenas usuários registrados e autenticados podem cadastrar e gerenciar os veículos.
- ** Cadastro e Gerenciamento de Veículos**: Os usuários autenticados podem cadastrar carros, incluindo fotos e informações detalhadas, além de visualizar, editar ou excluir seus veículos.
- ** Dashboard Interativo**: O painel oferece uma visão geral de todos os carros cadastrados, permitindo que os usuários visualizem informações detalhadas sobre cada veículo.
- ** Pesquisa e Filtro**: Funcionalidade de busca que permite aos usuários pesquisar veículos específicos, com filtros para facilitar a navegação entre as opções.
- ** Upload de Imagens**: Suporte para envio de imagens dos veículos, permitindo que os usuários apresentem seus carros com fotos de alta qualidade.


##  Tecnologias Utilizadas

- **Frontend**:
  -  **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
  -  **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
  -  **TailwindCSS**: Framework de CSS utilitário para um design rápido e customizável.
  -  **Firebase**: Utilizado para autenticação de usuários junto a Firestore para o banco de dados.

##  Estrutura do Projeto

### Frontend

-  **`src/assets/`**: Contém as imagens usadas na aplicação.
-  **`src/components/`**: Componentes reutilizáveis, como:
  -  Container
  -  Header
  -  Input
  -  Layout
  -  PanelHeader
-  **`src/context/`**:
  -  AuthContext
-  **`src/pages/`**: Páginas da aplicação:
  -  Car
  -  Dashboard
  -  Home: Página inicial com carros a venda listados.
  -  Login
  -  Register
-  **`src/routes/`**: Definição das rotas da aplicação.
-  **`src/services/`**: Lógica de funcionalidades e chamadas de API.
-  **`src/App.tsx`**: Componente principal que organiza as rotas e o layout geral.
-  **`src/index.css`**: Estilos globais da aplicação.
-  **`src/main.tsx`**: Arquivo de entrada da aplicação.

##  Instalação e Execução

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

##  Configuração do Firebase

Para executar o projeto localmente, você precisa configurar o Firebase para a autenticação e o banco de dados.

1. **Acesse o Firebase Console**:
   - Entre no [Firebase Console](https://console.firebase.google.com/) e crie um novo projeto (ou use um já existente).

2. **Configurações do Projeto**:
   - No Firebase Console, vá até **Configurações do Projeto** e selecione **Configurações Gerais**. 
   - No painel de configuração, adicione um novo app para web e copie as credenciais de configuração fornecidas pelo Firebase (estas incluem `apiKey`, `authDomain`, `projectId`, etc.).

3. **Arquivo `.env`**:
   - Na raiz do seu projeto, crie um arquivo `.env` e adicione as seguintes variáveis com os valores copiados do Firebase:

     ```plaintext
     VITE_apiKey=your-api-key
     VITE_authDomain=your-auth-domain
     VITE_projectId=your-project-id
     VITE_storageBucket=your-storage-bucket
     VITE_messagingSenderId=your-messaging-sender-id
     VITE_appId=your-app-id
     ```

4. **Habilitar Autenticação**:
   - No Firebase Console, vá até a seção **Authentication** e habilite o método de autenticação desejado (ex: Email/Password).

5. **Configuração do Firestore**:
   - Ainda no Firebase Console, acesse **Firestore Database** e configure um banco de dados no modo de teste para facilitar o desenvolvimento local.

Após essas configurações, o Firebase estará pronto para uso no ambiente local.
