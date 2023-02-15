const express = require('express');
const app = express();
const hbs = require('express-handlebars');

// Banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'weslley49', {
  host: 'localhost',
  dialect: 'mysql',
});

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.post('/add', (req, res) => {
  res.send('Formulario recebido com susseco!');
});

app.listen(3000, () => {
  console.log('Server on: url http://locahost:3000');
});
