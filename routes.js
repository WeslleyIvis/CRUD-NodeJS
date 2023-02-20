const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.get('/', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
    res.render('index', { posts: posts });
  });
});

router.post('/add', (req, res) => {
  const { title, conteudo } = req.body;
  Post.create({
    titulo: title,
    conteudo: conteudo,
  })
    .then(() => res.redirect('/'))
    .catch((error) => {
      res.send('Não foi possivel enviar o conteudo: ' + error);
    });
});

router.delete('/deletar', (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  Post.destroy({ where: { id: id } })
    .then(() => res.send('Postagem excluida com susseco'))
    .catch((erro) => res.send('Erro: ' + erro));
});

router.get('/test', (req, res) => {
  res.send('OK então say onara');
});

module.exports = router;
