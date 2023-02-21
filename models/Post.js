const db = require('./db');

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
  img: {
    type: db.Sequelize.BLOB,
  },
});

module.exports = Post;

//Post.sync({ force: true });
