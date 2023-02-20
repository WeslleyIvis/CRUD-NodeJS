const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const router = require('./routes');
const cors = require('cors');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(router);

app.listen(3000, () => {
  console.log('Server on: url http://locahost:3000');
});
