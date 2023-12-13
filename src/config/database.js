module.exports = {
  dialect: 'postgres', // BANCO DE DADOS QUE EU VOU USAR.
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger', // NOME DO BANDO DE DADOS
  define: {
    timespamps: true, // QUANDO EU CRIO UM DADO NO MEU BANCO DE DADOS, CRIA-SE OS CAMPOS:(created_at, updated_at)
    underscored: true, // PERMITE CRIAR TABELAS COM NOMES EM CAIXA BAIXA E SEPARADOS COM UNDERLINE (EX: user_products).
    underscoredAll: true,
  },
}
