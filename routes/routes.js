const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');
const upload = multer();

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.get('/editar/:id', (req, res) => {
  const { id } = req.params;
  Post.findOne({ where: { id: id } }).then((post) => {
    res.render('editar', { post: post });
  });
});

// C

router.post('/add', upload.single('image'), (req, res) => {
  const { title, conteudo } = req.body;
  let image = null;

  if (req.file !== undefined) {
    image = req.file.buffer;
  }

  Post.create({
    titulo: title,
    conteudo: conteudo,
    img: image,
  })
    .then((r) => console.log(r))
    .catch((error) => {
      res.send('Não foi possivel enviar o conteudo: ' + error);
    });
});

// R

router.get('/', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
    res.render('index', { posts: posts });
  });
});

// U

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

// D

router.delete('/deletar', (req, res) => {
  const { id } = req.query;
  Post.destroy({ where: { id: id } })
    .then(() => res.send('Deletado com sucesso'))
    .catch((erro) => res.send('Erro: ' + erro));
});

module.exports = router;
