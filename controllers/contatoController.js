const emailHelper = require('../helpers/emailHelper');

const contatoController = {
  mostrarFormulario: (req, res) => {
    res.render('contato', { erro: null }); 
  },

  enviarMensagem: async (req, res) => {
    try {
      const { nome, email, mensagem } = req.body;
      const assunto = 'Novo contato via formulário';
      await emailHelper.enviarEmail(nome, email, assunto, mensagem);
      res.render('obrigado');
    } catch (error) {
      console.error(error);
      res.render('contato', { erro: 'Ocorreu um erro ao enviar o email.' });
    }
  },
};

module.exports = contatoController;

