const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const Post = require('./models/Post');

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
    res.render('index', { posts: posts });
  });
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.post('/add', (req, res) => {
  const { title, conteudo } = req.body;
  Post.create({
    titulo: title,
    conteudo: conteudo,
  })
    .then(() => res.send('Conteudo enviado'))
    .catch((error) => {
      res.send('Não foi possivel enviar o conteudo: ' + error);
    });
});

app.listen(3000, () => {
  console.log('Server on: url http://locahost:3000');
});
