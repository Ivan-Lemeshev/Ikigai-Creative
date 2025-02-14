require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const mailer = require('./mailer');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const { request } = require('http');
app.use(bodyParser.json());
// Обслуживание всех статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Отправка файла index.html при запросе на /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/sendRequest', async (req, res) => {
  // try {
  // } catch (error) {
  //   res.status(500).send('Ошибка при отправке почты: ' + error.message);
  //   console.log(error.message)
  // }

  try {
    const { text, service, price, hasPrepaymant, email } = req.body.data;
    const result = await mailer.sendEmail(text);
    if (hasPrepaymant) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email: email, 
        line_items: [{
          price_data: {
            currency: 'gbp',
            product_data: { name: service },
            unit_amount: price,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://ikigaiicreative.com/',
        cancel_url: 'https://ikigaiicreative.com/',
      });
      res.json({ url: session.url });
    }
    res.status(200).json({ message: 'ok'});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});