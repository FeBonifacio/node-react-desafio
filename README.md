<h1>Sistema de Gerenciamento de Clientes</h1>
Este é um sistema de gerenciamento de clientes desenvolvido com React no frontend e Node.js no backend. Ele permite cadastrar, buscar, editar e calcular rotas para visitar clientes.

<h2>Funcionalidades</h2>
Cadastro de Clientes: Permite cadastrar novos clientes com nome, telefone, email e coordenadas (coordenadaX e coordenadaY).
Busca de Clientes: Possibilita buscar clientes cadastrados.
Edição de Clientes: Permite editar os dados de um cliente existente.
Cálculo de Rotas: Calcula as rotas mais curtas para visitar os clientes cadastrados.

<h2>Como executar</h2>
Configuração do Banco de Dados:
PostgreSQL instalado.
Crie um banco de dados chamado "clientes".
Execute o script create_table.sql para criar a tabela necessária no banco de dados.
Configuração do Backend:
Navegue até a pasta backend.
Instale as dependências com npm install.
Configure as variáveis de ambiente no arquivo .env, se necessário.
Inicie o servidor com npm start.

Configuração do Frontend:
Na até a pasta frontend.
Instale as dependências com npm install.
Inicie a aplicação com npm start.

Acesso à Aplicação:
Acesse a aplicação no navegador através do endereço http://localhost:3000.

<h2>Estrutura do Projeto</h2>
backend: Contém o código do servidor Node.js.<br/>
index.js: Arquivo principal do servidor.<br/>
controllers/: Contém os controladores das rotas.<br/>
routes/: Contém as definições das rotas da API.<br/>
database/: Contém a configuração e scripts de banco de dados.<br/>

frontend: Contém o código da aplicação React.<br/>
src/: Contém os componentes e páginas da aplicação.<br/>
components/: Componentes reutilizáveis da aplicação.<br/>
pages/: Páginas principais da aplicação.<br/>
services/: Contém os serviços para fazer requisições à API.<br/>
styles/: Arquivos de estilos da aplicação.<br/>

Tecnologias Utilizadas
Frontend:<br/>
React<br/>
React Router<br/>
Axios<br/>
<hr/>
Backend:<br/>
Node.js<br/>
Express<br/>
PostgreSQL<br/>
pg (PostgreSQL Client for Node.js)
