const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res,next) => {
  res.render('index');
})

app.get('/cards', (req,res) => {
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", hint: "Think about whose tomb it is."});
})

app.listen(3000);
