const express = require('express');

const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.set('view engine', 'pug');

app.get('/', (req,res,next) => {
  res.render('index');
})

app.get('/cards', (req,res) => {
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", colors});
})

app.listen(3000);
