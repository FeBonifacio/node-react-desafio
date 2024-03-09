<h1>BACKEND</h1> 
NODEJS, EXPRESS, CORS

Configuração do Banco de Dados: O código começa configurando uma conexão com o banco de dados PostgreSQL. Isso é feito usando o módulo pg e criando uma instância de Pool com as credenciais de acesso ao banco de dados.

Verificação da Existência da Tabela de Clientes: Após a configuração do banco de dados, o código verifica se a tabela de clientes já existe. Se não existir, ele a cria. Isso é feito executando uma consulta SQL que verifica a existência da tabela na base de dados. Se a tabela não existir, outra consulta SQL é executada para criar a tabela clientes, especificando as colunas id, nome, email, telefone, coordenadaX e coordenadaY.

Definição da Função calcularRota: A função calcularRota é definida para calcular as rotas mais curtas entre os clientes. Isso é feito consultando todas as coordenadas dos clientes no banco de dados, calculando a distância entre cada par de clientes e armazenando as rotas mais curtas em um array. As rotas são classificadas por distância e as quatro rotas mais curtas são retornadas.

Definição da Função rotaCalculoRota: Esta função envolve a função calcularRota e retorna uma função assíncrona que manipula uma solicitação HTTP. Quando esta rota é acessada, ela chama a função calcularRota e retorna as rotas mais curtas em formato JSON.

Configuração do Express: O código configura um servidor Express na porta 3000. Ele define várias rotas para criar, buscar, atualizar e excluir clientes no banco de dados. Além disso, há uma rota para obter a localização de todos os clientes e uma rota para calcular as rotas mais curtas entre os clientes.

Resumindo, este código configura um servidor Express que fornece uma API para criar, buscar, atualizar e excluir clientes no banco de dados PostgreSQL. Ele também fornece uma rota para calcular as rotas mais curtas entre os clientes com base em suas coordenadas.
