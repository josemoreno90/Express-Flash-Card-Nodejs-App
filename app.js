const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res,next) => {
  res.render('index');
})

app.get('/cards', (req,res) => {
  res.render('card', {prompt: "Who is buried in Grant's Tomb?", colors});
})

app.get('/hello', (req,res) => {
  res.render('hello');
})

app.listen(3000);
