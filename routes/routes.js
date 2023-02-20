const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.get('/editar/:id', (req, res) => {
  const { id } = req.params;
  Post.findOne({ where: { id: id } }).then((post) => {
    res.render('editar', { post: post });
  });
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
  Post.destroy({ where: { id: id } })
    .then(() => res.send('Deletado com sucesso'))
    .catch((erro) => res.send('Erro: ' + erro));
});

router.put('/edit', (req, res) => {
  const { id } = req.query;
  const { titulo, conteudo } = req.body;
  console.log(req.body);

  console.log(titulo, conteudo, id);
  Post.findOne({ where: { id: id } })
    .then((post) => {
      if (post) {
        (post.titulo = titulo), (post.conteudo = conteudo);
        return post.save();
      }
    })
    .then((updateUser) => {
      res.send('Alterado');
    })
    .catch((erro) => res.send(erro));
});

module.exports = router;
