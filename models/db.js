const Sequelize = require('sequelize');
// Conexão com o banco de dados MYSQL
const sequelize = new Sequelize('crud', 'root', 'weslley49', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
