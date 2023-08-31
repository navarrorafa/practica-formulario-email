const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const contatoRoutes = require('./routes/contatoRoutes');
app.use('/contato', contatoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor ON ${PORT}`);
});
