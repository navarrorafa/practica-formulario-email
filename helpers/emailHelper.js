const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: "testbridgemadrid@outlook.com",
    pass: "Bridge123*",
  },
});

const enviarEmail = async (nome, remetente, assunto, mensagem) => {
  const info = await transporter.sendMail({
    from: `"${nome}" <${remetente}>`,
    to: process.env.EMAIL_USER,
    subject: assunto,
    text: mensagem,
  });
  console.log('Mensagem enviada:', info.messageId);
};

module.exports = {
  enviarEmail,
};
