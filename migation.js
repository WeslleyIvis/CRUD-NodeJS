const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'weslley49', {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

const Post = sequelize.define('posts', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
});

Post.create({
  title: 'The wallking Dead',
  content: 'Loren ipsum',
});

Users.create({
  name: 'Kaju',
  sobrenome: 'Tai',
  idade: '21',
  email: 'kaju_tai@hotmail.com',
});

Users.sync({ force: true });
Post.sync({ force: true });
